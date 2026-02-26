import axios from "axios";
import { useState } from "react";

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    
    const SignUp = async () =>{
        const response = await axios({
            method: 'post',
            url: 'https://69a007f73188b0b1d537859e.mockapi.io/myapp',
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