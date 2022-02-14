import React, { useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';
import './Shoes.css';

const Shoes = () => {
    const [shoes,setShoes] = useState([]);
    console.log(shoes);

    useEffect(() => {
      fetch('http://localhost:5000/shoes')
      .then(res => res.json())
      .then(data => setShoes(data));
    },[])

    return (
        <div className='container shoes py-5'>
            <div className="heading-area row">
                <div className='col-md-6 col-lg-3 heading-left'>
                    <span class="top">RUNNING</span>
                    <br />
                    <span class="bottom">SHOES</span>
                </div>
                <div className='col-md-6 col-lg-6 heading-right mt-5'>
                    <span>Nam maximus, purus quis tincidunt semper, felis tellus mole stie nulla in finibus erat magna et tortor. Phasellus a magna lobortis</span>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  
              {
                shoes.map(shoe => <Shoe
                  key={shoe._id}
                  shoe={shoe}
                ></Shoe>)
              }
  
          </div>
        </div>
    );
};

export default Shoes;