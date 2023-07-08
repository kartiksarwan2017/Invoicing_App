// import React, {useState, useEffect} from 'react';


// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  
//   return (
//     <div className='login-container'>

//       <h2>Login</h2>
      
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input 
//            type="text" 
//            placeholder='Enter Email' 
//            value={email}
//            onChange={(e) => setEmail(e.target.value)}
//         />
//         <input 
//            type="password" 
//            placeholder='Enter Password' 
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>  
//     </div>
//   )
// }

// export default Login;






import HigherOrder from "../HigherOrder/HigherOrder";

const Heading = ({headingText}) => {
    return(
        <>
        <div className="heading">
            <h1 className='text-5xl text-center my-20'><span className='font-semibold'>StartUp</span> <span>{headingText}</span> </h1>
        </div>
        </>
    )
}

const Login = HigherOrder(Heading, "Login");

export default Login;