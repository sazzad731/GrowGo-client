import { use } from "react";
import { AuthContext } from "../ContextProvider/Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className="flex items-center justify-center min-h-screen w-full"><span className="loading loading-xl"></span></div>
  }

  if(!user){
    return <Navigate state={location.pathname} to="/login"/>
  }

  if(user && user.email){
    return children
  }
};

export default PrivateRoute;