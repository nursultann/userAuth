import axios from "axios";
import { useState } from "react";

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async () =>{
        const response = await axios.get('https://69a007f73188b0b1d537859e.mockapi.io/myapp');
        console.log(response.data);
        setUsers(response.data);
    }

    const SignUp = async () =>{
        await fetchUsers();
        const userExists = users.some((user) => user.email === email);
        if(userExists){
            alert('Пользователь с таким email уже существует!');
            return;
        }
        const response = await axios({
            method: 'post',
            url: 'https://67077010a0e04071d22a495c.mockapi.io/users',
            data: {
                name: username,
                password: password,
                email: email,
                phone: phone,
                avatar: avatar,
            }
        });
        console.log(response);
        if(response.status === 201){
            alert('Успешная регистрация!');
        }
    }

    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="avatar" onChange={(e) => setAvatar(e.target.value)} />
            <button onClick={SignUp}>Register</button>
        </div>
    )
}

export default Register;