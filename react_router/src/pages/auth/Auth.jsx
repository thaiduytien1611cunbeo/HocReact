import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  return (
    <div>
      {!outlet && (
        <>
          <h1>Authentication</h1>
          <button
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/auth/register");
            }}
          >
            Register
          </button>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Auth;
