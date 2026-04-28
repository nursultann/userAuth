import { useEffect, useState } from "react";
import axios from "axios";
function Login (){
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const fetchUsers = async () =>{
        const response = await axios.get('https://67077010a0e04071d22a495c.mockapi.io/users');
        setUsers(response.data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const SignIn = () => {
        const user = users.find((user) => user.email === email && user.password === password);
        console.log(user);
        if (user) {
            alert('Успешный вход!');
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/';
        } else {
            alert('Неверный логин или пароль.');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={SignIn}>Войти</button>
        </div>
    )
}
export default Login;