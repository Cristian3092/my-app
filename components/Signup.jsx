import React, { useState } from "react";
import { validEmail, validPassword } from "../helpers/helpers";


const SignUp = ({})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(["" || []]);
    const [name, setName] = useState ("")
    const [surname, setSurname] = useState ("")
    const [error, setError] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp= (e) => {
        e.preventDefault();
        
        if(email === "" || password === "" || name === "" || surname === ""){
            setError(true)
            return{
                massage: "Alguno de tus campos estan incompletos"
            }
        }
        setError(false)

        if (!validEmail.test(email)) {
            setEmailError(true);
        }
        if (!validPassword.test(password)) {
            setPasswordError(true);
        }

        if(password < 3 && password >= 8){
            setPasswordError(true)
            return{
                massage: "Tu contraseña no es valida"
            }
        }
    }

    return (
        <>
        <div>
            <h2 className="signup">SignUp</h2>
            <form onSubmit={handleSignUp}>
                <div className="cuadrados">
                    <input type="text" placeholder="Introduce tu nombre" value={name} onChange={(e)=> setName(e.target.value)}required/>
                    <input type="text" placeholder="Introduce tu apellido" value={surname} onChange={(e)=> setSurname(e.target.value)}required/>
                    <input type="text"  placeholder= "Introduce tu email" value={email} onChange={(e)=> setEmail(e.target.value)}required/>
                    <input type="text"  placeholder="Introduce tu contraseña" value={password} onChange={(e)=> setPassword(e.target.value)}required/>
                </div>
                    <button className="button" onClick={handleSignUp}>SignUp</button>
        
            </form>
                    {emailError && <p>Tu email introducido no es valido</p>}
                    {passwordError && <p>La contraseña indroducida no es valida</p>}
                    {error && <p>Todos los campos son obligadorios</p>}
        </div>
        </>
    )
}



    export default SignUp