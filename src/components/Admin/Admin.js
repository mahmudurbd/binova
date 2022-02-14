import React from 'react';
import { useForm } from 'react-hook-form';
import './Admin.css';
const Admin = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = data =>{
    console.log(data)
  }
    return (
        <section class="admin py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center">
        <div class="fdb-box fdb-touch">
          <div class="row">
            <div class="col">
              <h1>Make Admin</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row mt-4">
            <div class="col">
              <input {...register("email")} type="text" class="form-control" placeholder="Email"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="d-grid gap-2 col-12 mx-auto">
              <input class="btn admin-btn" type="submit" value="Submit"/>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Admin;