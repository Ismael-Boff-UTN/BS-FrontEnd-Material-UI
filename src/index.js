import React from "react";
import ReactDOM from "react-dom";
import BuenSaborApp from "./BuenSaborApp";
import reportWebVitals from "./reportWebVitals";
import  {  GoogleOAuthProvider  }  from  '@react-oauth/google' ;

ReactDOM.render(
 
  < GoogleOAuthProvider  clientId = "804016986665-4o6pdrstb389q0s03tn5k523qut440g4.apps.googleusercontent.com" > <BuenSaborApp />,</GoogleOAuthProvider >,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
