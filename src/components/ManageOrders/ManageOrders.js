import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const [orders,setOrders] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data =>setOrders(data))
    },[])

    const handleDelete = id => {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.deletedCount){
          if(data.deletedCount){
            Swal.fire(
                'Deleted!',
                'You have deleted packages successfully!',
                'success'
              );}
          const remaining = orders.filter(order => order._id != id);
          setOrders(remaining);
        }
      })
    }

    return (
        <div className='container table-responsive'>
            <h2>Manage Packages</h2>
            <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">User Name</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
      {
        orders.map(order => (
      <tr>
      <td scope="row"><img className='img-fluid' src={order.item.image} alt="" width='50'/></td>
      <td>{order.item.productName}</td>
      <td>{order.item.price}</td>
      <td>{order.name}</td>
      <td><button onClick={() => handleDelete(order._id)} className='btn btn-danger'>Delete</button></td>
    </tr>
        ))
      }
  </tbody>
</table>
</div>
        </div>
    );
};

export default ManageOrders;
