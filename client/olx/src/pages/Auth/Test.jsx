import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useInfoContext } from "../../context/Context";

const Test = () => {
  const { setCurrentUser } = useInfoContext();
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let data = jwtDecode(credentialResponse.credential);
          setCurrentUser(data);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Test;
