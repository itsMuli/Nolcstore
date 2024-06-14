import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import instance from '../axiosInstance';
import Layout from "./../../components/Layout/Layout";
import "./../../styles/AuthStyles.css";


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] =useAuth()
    
    const navigate = useNavigate ()
    const location = useLocation ()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await instance.post('/api/v1/auth/login', { 
                email, 
                password,
        } );
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state || "/")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    };

  return (
    <Layout title={"Login"}>
        <div className='form-container'>
            <h1 className='title'>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail"
                        placeholder='Email'
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form-control" 
                        id="exampleInputPassword1"
                        placeholder='Password'
                        required />
                </div>
                <div className='mb-3'>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                </div>
                
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {
                        navigate('/forgot-password')
                    }}>
                    Forgot Password?
                </button>
                
            </form>

        </div>
    </Layout>
  )
}

export default Login