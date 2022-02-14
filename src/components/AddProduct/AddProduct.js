import React from 'react';
import './AddProduct.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddProduct = () => {
    const { register, handleSubmit,reset} = useForm();
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addproduct',data)
        .then(res =>{
          if(res.data.insertedId){
            Swal.fire(
                'Good job!',
                'You have added product successfully!',
                'success'
              );
              reset();
        }
        })
    }
    return (
        <section class="add-product py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center">
        <div class="fdb-box fdb-touch shadow p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col">
              <h1>Please Add Product</h1>
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
              <input {...register("productName")} type="text" class="form-control" placeholder="Name"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("image")} type="text" class="form-control" placeholder="Image URL"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("price")} type="number" class="form-control" placeholder="Price"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("rating")} type="number" class="form-control" placeholder="Rating(1-5)"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <textarea {...register("description")} class="form-control" id="" rows="5">Description</textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <input type="submit" class="form-control btn regular-btn" value="Add Product"/>
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

export default AddProduct;