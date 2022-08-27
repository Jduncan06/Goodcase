import {Container, Row, Col} from 'reactstrap';
import React from "react";
import placeholder from '../app/assets/placeholder.mp4'

const Tagline = () =>{
    return(
        <div className="tagline">
            <video src={placeholder} loop autoPlay muted/>
            <div className='overlay'>
                <div className="content m-4">
                    <h1>Comedians Unpack</h1> 
                    <h1>Your Gripes</h1>
                </div>
            </div>
        </div>
    );
};

export default Tagline