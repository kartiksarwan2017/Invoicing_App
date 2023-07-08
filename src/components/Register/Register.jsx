// import React, {useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';


// const Register = () => {

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPasword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Create a new user object with registration details
//     const newUser = {
//       username,
//       email, 
//       password
//     };

//     // Store the user object in local storage
//     localStorage.setItem('user', JSON.stringify(newUser));

//     // Reset the form fields
//     setUsername('');
//     setEmail('');
//     setPassword('');


//     // Redirect to the login page
//     navigate('/login');

//   }


//   return (
//    <>
//     <div className="register-container">

//       <h2>Register</h2>

//       <form onSubmit={(e) => handleRegister(e)}>
//         <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="password" placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmPasword(e.target.value)} />
//         <button type="submit">Register</button>
//       </form>
      
//     </div>
//    </>
//   )
// }

// export default Register;


import HigherOrder from '../HigherOrder/HigherOrder';


const Heading = ({headingText}) => {
    return(
        <>
        <div className="heading">
            <h1 className='text-5xl text-center my-20'><span className='font-semibold'>StartUp</span> <span>{headingText}</span> </h1>
        </div>
        </>
    )
}

const Register = HigherOrder(Heading, "Register");

export default Register;