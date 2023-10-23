import React, { useState } from 'react'
import './Register.css'
import { instance } from '../../Axios';
import Loader from '../../loader/Loader';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate=useNavigate()




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)

     await instance.post('register/', formData).then((res) => {
      console.log('res', res.status)
      if (res.status === 201){
        setIsSuccess(true)
      }
      
    }).catch((res)=>{
    setIsLoading(false)
    console.log('res', res)
    }

    )
    console.log('Registration Details:', formData);
    setIsLoading(false)

    if (isSuccess==true){
      navigate('/login')
    }
  };

  console.log('log',isSuccess);
  return (
    <div>
      
      <div className="register-main">
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" name='first_name' onChange={handleInputChange} />
              <span>Firstname</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" name='last_name' onChange={handleInputChange} />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder="" name='email' required="" onChange={handleInputChange} />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="password" placeholder="" name='password' required="" onChange={handleInputChange} />
            <span>Password</span>
          </label>
          <label>
            <input className="input" type="password" placeholder="" name='confirm-password' required="" onChange={handleInputChange} />
            <span>Confirm password</span>
          </label>
          <button className="submit" style={isLoading ? {backgroundColor:'white'} : {}} onClick={handleSubmit}> { isLoading ? <Loader/> : 'Submit'} </button>
          <p className="signin">Already have an acount ? <Link to='/login'>Signin</Link> </p>
        </form>
      </div>

    </div>
  )
}
