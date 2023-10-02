import { Link } from "react-router-dom"
import { useState } from "react";

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
                    <h1>Bienvenido</h1>
            <div>
                <h2 className="login">Login</h2>
                <form  onSubmit={handleLogin}>
                    <div className="cuadrados">
                        <input type="text" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}required/>
                        <input type="text" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}required/>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </form>
                <a href="./"> Forget your password? </a>
                {error && <p>Complete all fields</p>}
            </div>

            <div>
                <button className="button">
                    <Link to ="./Signup"> Sign Up</Link> 
                </button>
            </div>
            </>
            
        )
       
    
    }


export default Login