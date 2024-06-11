import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("users");
    if (!user) {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  return localStorage.getItem("users") ? <Outlet /> : null;
};

export default PrivateRoute;
