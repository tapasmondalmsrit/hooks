import { useRef } from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocation = location?.state?.path || "/";
  const { dispatch } = useAuth();
  const username = useRef();
  const password = useRef();
  const HandlerLoginForm = async (e) => {
    e.preventDefault();
    try {
      //   const res = await axios.post("http://localhost:8000/api/user/login", {
      //     username: username.current.value,
      //     password: password.current.value,
      //   });
      //   const { message, status, ...other } = res.data;
      // dispatch({ type: "LOGIN_SUCCESS", payload: other });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          username: username.current.value,
          password: password.current.value,
        },
      });
      username.current.value = "";
      password.current.value = "";
      navigate(redirectLocation, { replace: true });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      //   NotificationManager.error(err.response.data.message, "Warning", 3000);
    }
  };
  return (
    <div className="loginWrapper">
      <div className="loginLeft">
        {/* <div className="frontImgWrapper">
          <img
            src={"http://localhost:3000/images/loginpage1.png"}
            className={show1 === 1 ? "frontImg show" : "frontImg hide"}
            alt=""
          />
          <img
            src={"http://localhost:3000/images/loginpage2.png"}
            className={show1 === 2 ? "frontImg show" : "frontImg hide"}
            alt=""
          />
          <img
            src={"http://localhost:3000/images/loginpage3.png"}
            className={show1 === 3 ? "frontImg show" : "frontImg hide"}
            alt=""
          />
          <img
            src={"http://localhost:3000/images/loginpage4.png"}
            className={show1 === 4 ? "frontImg show" : "frontImg hide"}
            alt=""
          />
        </div> */}
      </div>
      <div className="loginRight">
        <div className="loginRightWrapper">
          <div className="loginRightTop">
            <div className="loginRightTopTop">
              <span className="loginRightTopLogo">Login </span>
            </div>
            <div className="loginRightTopForm">
              <form className="loginBox" onSubmit={HandlerLoginForm}>
                <input
                  placeholder="Username"
                  type="text"
                  required
                  className="loginInput"
                  ref={username}
                />
                <input
                  placeholder="Password"
                  type="password"
                  required
                  minLength="6"
                  className="loginInput"
                  ref={password}
                />

                <button className="loginButton">Login</button>
              </form>
            </div>
          </div>
          <div className="loginRightBottom">
            <center>
              <span></span>
            </center>
            <center>
              <span>Dont have an account?</span>
              <span
                className="SignUptext"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
