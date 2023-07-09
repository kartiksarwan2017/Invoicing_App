import HigherOrder from '../HigherOrder/HigherOrder';


const Heading = ({headingText}) => {
    return(
        <>
        <div className="heading">
            <h1 style={{textAlign: "center" , marginTop: "40px"}}><span className='font-semibold'>StartUp</span> <span>{headingText}</span> </h1>
        </div>
        </>
    )
}

const Register = HigherOrder(Heading, "Register");

export default Register;