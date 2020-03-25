import React, {useEffect, useState} from 'react';
import Navigation from "./src/navigations/Navigation";
import * as firebase from "firebase/app";
import Register from "./src/screens/Register";
import {firebaseApp} from "./src/utils/firebase";


export default function App() {
  return (
      <Navigation/>
  );
}
