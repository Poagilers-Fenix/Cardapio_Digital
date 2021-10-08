import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import { firebase } from "../config";

const [isSigningUp, setSigningUp] = useState(false);
const [user, setUser] = useState(null);

useEffect(() => {
  firebase.auth().onAuthStateChanged(setUser);
}, []);

export const handleEnter = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response.user);
      setUser(response.user);
      return user;
    })
    .catch((error) => alert(error));
};

const handleRegister = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response.user);
      setUser(response.user);
    })
    .catch((error) => alert(error));
};
const handleLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => setUser(null))
    .catch((error) => alert(error));
};

const onRedefine = (email) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => alert("Email enviado"))
    .catch((error) => alert(error));
};

if (user === null) {
  if (isSigningUp) {
    return <SignUp onRegister={handleRegister} />;
  } else {
    return (
      <SignIn
        onEnter={handleEnter}
        onSignUp={setSigningUp}
        onRedefine={onRedefine}
      />
    );
  }
} else {
  return <Welcome user={user} onLogout={() => handleLogout()} />;
}
