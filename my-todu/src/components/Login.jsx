import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {loginUser}  from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[name,setName]=useState("");
    const dispatch = useDispatch();
const navigate=useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        const dummyUser = {
            email: 'test@gmail.com',
            password: '123456',
            name: 'Aman',
            token: 'sample-jwt-token'
        };

        const userData = {name, email, password };
        if (email === dummyUser.email && password === dummyUser.password&&name===dummyUser.name) {
            // localStorage.setItem('token', 'sample-jwt-token'); // Token Save
            dispatch(loginUser(userData));
            localStorage.setItem('token', dummyUser.token);
            navigate('/dashboard');
            alert('Login Successful!');
        } else {
            alert('Invalid Email or Password!');
        }
    }

    return (
        <div className="p-4 border h-full w-80 mt-20 m-auto bg-[#FBFDFC]">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              
            <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    type="email"
                    placeholder="test@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    type="password"
                    placeholder="123456"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 w-full rounded"
                >
                    Login
                </button>
                <p className='text-red-600 font-bold pt-5'>Please Log in</p>
            </form>
        </div>
    );
};

export default Login;
