import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AuthContext } from "../App";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Login Success:", codeResponse);
      setIsLoggedIn(true);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <button onClick={() => login()} className={`header__register_btn`}>
      Register
    </button>
  );
}

export default Login;
