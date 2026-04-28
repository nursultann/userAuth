import Navbar from "../components/navbar";

function Home(){
    return(
        <div>
            <Navbar />
            <h1>Home</h1>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
        </div>
    )
}

export default Home;