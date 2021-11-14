import React from "react";
import styles from "./index.module.scss";
import { UserCircleIcon } from "@heroicons/react/solid";
import TextInput from "components/TextInput";

function ProfileForm() {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={styles["profile-wrapper"]}>
      <div className="mb-6">
        <div className={`${styles["profile-avatar"]} relative`}>
          <UserCircleIcon className="w-full h-full rounded-full" />
            <span className={styles["active"]}></span>
        </div>
      </div>
      <div className={styles["profile-form"]}>
        <TextInput
          label="First name"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
        />
        <TextInput
          label="Last name"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
        />

        <TextInput
          label="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
