import React, { useState } from "react";


const Login = ({onLogin})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        if(email === "" || password === ""){
            setError(true)
            return
        }
        setError(false)

    }

    
    return (
        <>
        <div>
            <h2 className="login">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="cuadrados">
                    <input type="text" placeholder="Introduce tu email" value={email} onChange={(e)=> setEmail(e.target.value)}required/>
                    <input type="text" placeholder="Introduce tu contraseña" value={password} onChange={(e)=> setPassword(e.target.value)}required/>
                </div>
                <button className= "button" onClick={handleLogin}>Login</button>
            </form>
            {error && <p>Todos los campos son obligadorios</p>}
        </div>
        </>
    )


}
    export default Login