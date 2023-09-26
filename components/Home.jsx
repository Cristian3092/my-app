import { Link } from "react-router-dom"
function Home (){

    return (
        <div>
            <h1>Bienvenido</h1>
            <button>
                <Link to ="./Signup"> Sign Up</Link> 
            </button>
            <button>
                <Link to ="./Login"> Log In</Link> 
            </button>

        </div>
    )
}

export default Home