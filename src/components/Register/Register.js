import React from 'react';
import './Register.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {
  
  const {googleSignIn, emailSignUp} = useAuth();
   const handleGoogle = () => {
     googleSignIn();
   }

  const {register, handleSubmit } = useForm();
   const onSubmit = data => {
     emailSignUp(data.email,data.password,data.name);

  };

    return (
        <section class="register py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
        <div class="p-5 shadow register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col">
              <img src={logo} alt="" />
              <p className='text-center mt-3'>Please Register</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("name")} type="text" class="form-control" placeholder="Name"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("email")} type="email" class="form-control" placeholder="Email"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("password")} type="password" class="form-control mb-1" placeholder="Password"/>
              <p class="text-right"><Link className='text-dark' to="/login">Already have account?</Link></p>
            </div>
          </div>
          <div class="row my-2">
            <div class="col">
              <input onClick={emailSignUp} type="submit" value='Register' class="register-btn"/>
            </div>
          </div>
        </form>
        OR
          <div class="row mt-2">
            <div class="col">
              <button onClick={handleGoogle} class="register-btn">Login with <i class="fab fa-google"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Register;