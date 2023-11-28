import { Navigate, Outlet } from "react-router-dom";

const isLogin = false;
const AuthMiddlewares = () => {
  return <>{isLogin ? <Outlet /> : <Navigate to={"/auth/login"} />}</>;
};

export default AuthMiddlewares;
