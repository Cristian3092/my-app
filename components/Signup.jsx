import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "../helpers/helpers";


const SignUp = ({})=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(["" || []]);
    const [name, setName] = useState ("")
    const [surname, setSurname] = useState ("")
    const [error, setError] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [repetPassword, setRepetPassword] = useState("" || [])
    const [username, setUserName] = useState (""|| [])

 

    const handleSignUp= (e) => {
        e.preventDefault();
        
        if(email === "" || password === "" && [] || name === "" || surname === "" || username === ""){
            setError(true)
            return{
                massage: "Complete all fields"
            }
        }
        setError(false)

        if (!validEmail.test(email)) {
            setEmailError(true);
        }
        if (!validPassword.test(password)) {
            setPasswordError(true);
        }

        if(password < 3 && password >= 8 ){
            setPasswordError(true)
            return{
                massage: "Your password is incomplete"
            }
        }
        if( password != repetPassword){
            return{
                massage: "Your password is incorrect"
            }
        }
            
      
    }

    return (
        <>
        <div>
            <h2 className="signup">SignUp</h2>
            <form  onSubmit={handleSignUp}>
                <div className="cuadrados-signup" >
                    <input type="text" placeholder="Enter your username" value={username} onChange={(e)=> setUserName(e.target.value)}required/>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}required/>
                    <input type="text" placeholder="Enter your surname" value={surname} onChange={(e)=> setSurname(e.target.value)}required/>
                    <input type="email"  placeholder= "Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}required/>
                    <input type="text"  placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}required/>
                    <input type="text"  placeholder="Repet your password" value={repetPassword} onChange={(e)=> setRepetPassword(e.target.value)}required/>
                </div>
                    <button className="button" onClick={handleSignUp}>SignUp</button>
                    <button className="button"><Link to ="/"> Go Home</Link> </button>
            </form>
                    {emailError && <p>Your email is incorrect</p>}
                    {passwordError && <p>Your password is incorrect</p>}
                    {error && <p>Complete all fields</p>}
        </div>
        </>
    )
}



    export default SignUp