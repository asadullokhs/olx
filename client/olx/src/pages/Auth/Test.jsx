import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Test = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let credentialResponseDecoded = jwtDecode(credentialResponse.credential)
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
            console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Test;