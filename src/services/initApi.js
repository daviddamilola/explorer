import initFirebase from "./initFirebase";
import firebaseAuthServiceFactory from "./firebaseAuth";
import apiServiceFactory from "./api";

const firebase = initFirebase();

const authServices = firebaseAuthServiceFactory({
  store: { firebase },
  config: {},
});

let api = apiServiceFactory({
  store: {
    auth: authServices,
  },
  config: {},
});

api = {
  ...api,
  // Append authServices to `api` because we might want to listen to Auth changes
  authServices,
};

export default api;
