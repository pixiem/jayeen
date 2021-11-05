import React, { useState } from 'react';
import "./Card.css";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase.init';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();



const Card = (props) => {
    const history = useHistory();
    const { name, duration, description, price, img, } = props.place;

    const [user, setUser] = useState({});
   
      


    
    return (
        <div className="card">
            <div className="image-section">
                <img width="100%" height="150px" src={img} alt="" />
            </div>
            <div className="description-section" >
                <h3>{name}</h3>
                <div className="d-flex justify-content-between">
                    <h6 className="duration-box">{duration}</h6>
                    <h6 className="price-box">{price}</h6>
                </div>
                <a className="bn39" href="/placeorder" ><span className="bn39span">BOOK NOW</span>
                </a>
                


            </div>
        </div>
    );
};

export default Card;