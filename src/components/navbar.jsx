import { useEffect, useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div>
            {/* <h1>Navbar</h1> */}
            {user && <p>Добро пожаловать, {user.name}!</p>}
            <a href="/">Home</a>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
            <button onClick={() => {
                localStorage.removeItem('user');
                setUser(null);
            }}>Logout</button>
        </div>
    )
}
export default Navbar;