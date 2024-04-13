import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useInfoContext } from "../../context/Context";
import { googleAuth } from "../../api/authRequests";

const Test = () => {
  const { setCurrentUser } = useInfoContext();
  return (
    <div>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          let data = jwtDecode(credentialResponse?.credential);
          let res;
          let newUser = {
            name: data.given_name,
            surname: data.name,
            email: data.email,
            profilePicture: data.picture,
          };
          res = await googleAuth(newUser);
          localStorage.setItem("profile", JSON.stringify(res?.data.findUser));
          localStorage.setItem("token", JSON.stringify(res?.data.token));
          setCurrentUser(newUser);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Test;
