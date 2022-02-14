import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
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
              <h1>Review Section</h1>
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
              <input {...register("userName")} type="text" class="form-control" placeholder="Name"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("designation")} type="text" class="form-control" placeholder="Designation"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("rating")} type="number" class="form-control" placeholder="Rating"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("rating")} min="1" max="5" type="number" class="form-control" placeholder="Rating (1 - 5)"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <textarea {...register("review")}  class="form-control" rows="5" placeholder="Write your review here"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <input type="submit" class="form-control btn regular-btn" value="Upload"/>
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

export default Review;