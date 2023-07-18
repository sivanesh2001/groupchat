import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser} = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />; // Replaced "<Navigate />" with "<Navigate to="/" replace={true} />" to specify the destination.
  }

  return children;
};
