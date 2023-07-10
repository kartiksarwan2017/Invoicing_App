import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./HigherOrder.scss";

const HigherOrder = (Heading, headingText) =>
  function Func() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPasword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const LoginContainer = async () => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {
          container.classList.add("right-panel-active");
        });

        signInButton.addEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
      };

      LoginContainer();
    }, []);

    const handleRegister = (e) => {
      e.preventDefault();

      // Create a new user object with registration details
      const newUser = {
        username,
        email,
        password,
      };

      // Store the user object in local storage
      localStorage.setItem("user", JSON.stringify(newUser));

      // Reset the form fields
      setUsername("");
      setEmail("");
      setPassword("");


      setTimeout(() => {
        navigate("/login"); // Redirect to the dashboard page after successful login
      }, 1000);

      Swal.fire({
        title: `User Created Sucessfully!`,
        icon: 'success',
        showCloseButton: true,
        timer: 1000
      });



   
    };

    const handleLogin = (e) => {
      e.preventDefault();

      // Retrieve user details from local storage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);

        // Check if the entered username and password match the stored user
        if (user.email === email && user.password === password) {
          // TODO: Perform any additional login logic (e.g., set user authentication state)
          localStorage.setItem("username", user.username);


          
         Swal.fire({
          title: `Logged In Sucessfully!`,
          icon: 'success',
          showCloseButton: true,
          timer: 1000


        });
  
        setTimeout(() => {
          // Redirect to the login page
        navigate("/home");
        }, 1000);

        } else {
          Swal.fire({
            title: `<strong>Invalid Username or Password</strong>`,
            icon: 'error',
            showCloseButton: true,
            timer: 1000
          });
        }
      } else {
        Swal.fire({
          title: `<strong>User not Found!</strong>`,
          icon: 'error',
          showCloseButton: true,
          timer: 1000
        });
      }

      // Reset the form fields
      setEmail("");
      setPassword("");
    };

    return (
      <>
        <div className="login-singup-container">
          {Heading && <Heading headingText={headingText} />}

          <section className="form-container">
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form onSubmit={(e) => handleRegister(e)}>
                  <h1>Create Account</h1>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPasword(e.target.value)}
                    required
                  />
                  <button type="submit">Register</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form onSubmit={(e) => handleLogin(e)}>
                  <h1>Sign In</h1>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="submit">Login</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>

                    <button className="ghost" id="signIn">
                      <Link to="/login">Sign In</Link>
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>

                    <button className="ghost" id="signUp">
                      <Link to="/register">Sign Up</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };

export default HigherOrder;
