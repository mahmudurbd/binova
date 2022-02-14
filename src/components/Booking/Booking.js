import React, { useEffect, useState } from 'react';
import './booking.css';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';


const Booking = () => {
    const [product,setProduct] = useState({});
    const {user} =useAuth();
    
    const {bookingId} = useParams();

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    data.item = product
      console.log(data);
       axios.post('http://localhost:5000/placeorder',data)
      .then(res =>{
          if(res.data.insertedId){
            Swal.fire(
              'Good job!',
              'You have placed order successfully!',
              'success'
            );
            reset();
          }
      })
  };
    

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${bookingId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


    return (
        <section class="booking py-5">
  <div class="container">
    <div class="row pt-4">
      <div class="col-12 col-md-6">
      <div class="card booking-card shadow-lg">
                    <img src={product.image} class="card-img-top p-3" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h6 class="card-title">{product.productName}</h6>
                        <Rating className='my-1'
                        emptySymbol="far fa-star"
                        fullSymbol="far fa-star text-warning"
                        initialRating={product.rating}
                        />
                        <div>
                            <div className="time">
                                <h2 className='common-fonts text-center'>${product.price}</h2>
                            </div> 
                        </div>
                    </div>
                </div>
      </div>

      <div class="col-12 col-md-6 pt-5 pt-md-0">
        <form onSubmit={handleSubmit(onSubmit)} className='shadow p-5'>
        <h3>Please Fill Up Form</h3>
          <div class="row">
            <div class="col">
              <input {...register("name")} type="text" class="form-control" placeholder={user.displayName}/>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <input {...register("email")} type="email" class="form-control" placeholder={user.email}/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <textarea {...register("description")} class="form-control" name="message" rows="2" placeholder="Address"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input {...register("phone")} type="number" class="form-control" placeholder="Phone Number"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <input type="submit" class="form-control btn regular-btn" value="Place Order"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    );
};

export default Booking;