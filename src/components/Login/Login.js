import React from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {googleSignIn,emailSingIn} = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if(data.password.length > 5){
      emailSingIn(data.email,data.password)
    }
  }

  const handleGoogle = ()=> {
    googleSignIn();
  }

  
    return (
        <section class="login py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
        <div class="p-5 shadow login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col">
              <img src={logo} alt="" />
              <p className='text-center mt-3'>Please login</p>
            </div>
          </div>
          <div class="row mt-1">
            <div class="col">
              <input {...register("email")} type="text" class="form-control" placeholder="Email"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("password")} type="password" class="form-control mb-1" placeholder="Password"/>
              <p class="text-right"><Link className='text-dark' to="/register">Don't have any account?</Link></p>
            </div>
          </div>
          <div class="row my-2">
            <div class="col">
                <input type="submit" value='Login' class="login-btn"/>
            </div>
          </div>
        </form>
        OR
        <div class="row mt-2">
            <div class="col">
              <button onClick={handleGoogle}  class="login-btn">Login with <i class="fab fa-google"></i></button>
            </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Login;