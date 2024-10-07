import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "./firebase";
import { set, ref } from "firebase/database";

export const doRegisterUser = async (name: string, lastName: string, email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    set(ref(db, `/users/${user?.uid}`), {
      uid: user?.uid,
      name: name,
      lastName: lastName,
      email: email,
      status: "Online",
      imageUrl: "https://unavatar.io/microlink/microlink.io",
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const doLoggedIn = async (email: string, password: string) => {
  try {
    const result: any = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem(
      "activeUser",
      JSON.stringify({
        uid: result.user.uid,
        name: result.user.name,
        lastName: result.user.lastName,
        role: result.user.role,
        email: result.user.email,
      })
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const doSignOut = () => {
  return auth.signOut();
};
