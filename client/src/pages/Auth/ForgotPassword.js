import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import instance from '../axiosInstance';
import "./../../styles/AuthStyles.css";


const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [answer,setAnswer] = useState("")
    
    
    const navigate = useNavigate ()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const res = await instance.post('/api/v1/auth/forgot-password', { 
                email, 
                newPassword,
                answer
            }
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                
                navigate("/login");
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    };

  return (
    <Layout title={"Forgot Password"}>
        <div className='form-container'>
            <h1 className='title'>RESET PASSWORD</h1>
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
                        type="text" 
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputAnswer"
                        placeholder='Your favourite sport'
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} 
                        className="form-control" 
                        id="exampleInputPassword"
                        placeholder='Password'
                        required />
                </div>
                <div className='mb-3'>
                <button type="submit" className="btn btn-primary">
                   Reset
                </button>
                </div>
            </form>

        </div>
    </Layout>
  )
}

export default ForgotPassword