import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [aboutInstructor, setAboutInstructor] = useState("");
  const [startedInstructing, setStartedInstructing] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlefullName = (e) => setFullName(e.target.value);
  const handleRole = (e) => setRole(e.target.value);
  const handleAboutInstructor = (e) => setAboutInstructor(e.target.value);
  const handleStartedInstructing = (e) => setStartedInstructing(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, fullName, role, aboutInstructor, startedInstructing };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={handlefullName}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <label for="cars">Choose a car:</label>

              <select name="role" id="role" onChange={handleRole}>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>

             <input type="text" name="aboutInstructor" id="aboutInstructor" value={aboutInstructor} onChange={handleAboutInstructor}/>              
             <input type="text" name="startedInstructing" id="startedInstructing" value={startedInstructing} onChange={handleStartedInstructing}/>              

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"/login"}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
