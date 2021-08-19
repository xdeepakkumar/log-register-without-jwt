import React, {useState} from 'react';
import "./register.css";
import axios from "axios";
import { useHistory } from 'react-router';

export default function Register() {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user, [name] : value
        })
    }

    const register = () => {
        const {name, email, password, reEnterPassword} = user;
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9000/register", user)
            .then(res => {
                alert(res.data.message);
                history.push("/login");
            });
        }else{
            alert("invalid input");
        }
    }

    return (
        <div>
           <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter Your name" onChange={handleChange}/>
            <input type="text" name="email" value={user.email} placeholder="Enter Your email" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="Enter Your password" onChange={handleChange}/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Your password" onChange={handleChange}/>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={ () => history.push("/login")}>Login</div>
        </div>
        </div>
    )
}
