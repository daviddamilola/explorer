const formatError = ({ code, message }) => {
    let errorMsg;
  
    switch (code) {
      case "auth/wrong-password":
        errorMsg = "Wrong username or password.";
        break;
      case "auth/user-not-found":
        errorMsg = "Email not found.";
        break;
      default:
        errorMsg = message;
    }
  
    return new Error(errorMsg);
  };

const authServiceFactory = (serviceDeps) => {
    const { store } = serviceDeps;
    const { firebase } = store;
    const firebaseAuth = firebase.auth();
  
    // An event that we trigger anytime the auth state changes
    let onAuthStateChangeEvent = () => {};
  
    const anonymousLogin = async () => {
      try {
        const result = await firebaseAuth.signInAnonymously();
        onAuthStateChangeEvent(result.user);
  
        return result;
      } catch (error) {
        throw formatError(error);
      }
    };
  
    const login = async (email, password) => {
      try {
        const result = await firebaseAuth.signInWithEmailAndPassword(
          email,
          password
        );
  
        if (!result?.user?.emailVerified) {
          await logout();
          throw new Error("Email not verified.");
        }
  
        onAuthStateChangeEvent(result.user);
  
        return result;
      } catch (error) {
        throw formatError(error);
      }
    };
  
    const register = async (email, password) => {
      try {
        const result = await firebaseAuth.createUserWithEmailAndPassword(
          email,
          password
        );
  
        onAuthStateChangeEvent(result.user);
  
        return result;
      } catch (error) {
        throw formatError(error);
      }
    };
  
    const logout = async () => {
      try {
        const result = await firebaseAuth.signOut();
  
        onAuthStateChangeEvent(null);
  
        return result;
      } catch (error) {
        throw formatError(error);
      }
    };
  
    const deleteAccount = async () => {
      try {
        const result = await firebaseAuth.currentUser.delete();
  
        onAuthStateChangeEvent(null);
  
        return result;
      } catch (error) {
        throw formatError(error);
      }
    };
  
    /**
     * Extracts only the data we want to set in the global state variable `user`
     * that is then passed to all routes
     * @param {Object} user the user object returned by firebase auth
     */
    const extractUserData = (user) => {
      return {
        id: user?.uid,
        email: user?.email,
        emailVerified: user?.emailVerified,
        lastSignIn: user?.metadata?.lastSignInTime,
        isAnonymous: user?.isAnonymous,
      };
    };
  
    const sendEmailVerification = () => {
      // From https://firebase.google.com/docs/auth/web/passing-state-in-email-actions
      const actionCodeSettings = {
        url: "explorer-577f5.web.app",
      };
  
      firebaseAuth?.currentUser?.sendEmailVerification(actionCodeSettings);
    };
  
    const onAuthStateChanged = (func) => {
      if (typeof func === "function") onAuthStateChangeEvent = func;
      let invokedOnce = false;
  
      firebaseAuth.onAuthStateChanged((user) => {
        if (!invokedOnce) {
          onAuthStateChangeEvent(user);
          invokedOnce = true;
        }
      });
    };
  
    return {
      anonymousLogin,
      login,
      register,
      logout,
      deleteAccount,
      extractUserData,
      sendEmailVerification,
      onAuthStateChanged,
      getUserId: () => firebaseAuth?.currentUser?.uid,
      // Note: The following security-sensitive operations can return code
      // "auth/requires-recent-login" in the thrown `error` object
      updateEmail: (newEmail) => firebaseAuth?.currentUser?.updateEmail(newEmail),
      updatePassword: (newPassword) =>
        firebaseAuth?.currentUser?.updatePassword(newPassword),
    };
  };
  
  export default authServiceFactory;
  