import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import Navbar from '../navbar/Navbar';
import "./Home.css"

const Home = () => {
    const [places, setPlace] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setPlace(data));
    },[]);
    return (
        <div>
            <div>
      
      <section className="section-One" >
        <Navbar></Navbar>
        <div className="section-one-bottom">
          <span>PLAN A TRIP TO SANTORINI VILLAGE</span>
          <h1 className="special-font">World Tour Club</h1>
        </div>
      </section>
      <div className="section-two">
            <div className="card-header" >
                <h1>Our Famous Tour</h1>

            </div>
            <div className="card-operation ">
            {
                places.map(place => <Card
                  place={place}>

                </Card> )
            }
            </div>

        

        </div>
    </div>
        </div>
    );
};

export default Home;