import React from "react";
import NavWrapper from "layouts/NavWrapper";
import ProfileForm from "../components/ProfileForm";

function Profile() {
  return (
    <NavWrapper>
      <div className="w-full h-screen bg-black  flex justify-center">
       <ProfileForm />
      </div>
    </NavWrapper>
  );
}

export default Profile;
