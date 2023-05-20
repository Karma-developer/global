import React from "react";
import './card-styles.css';
import img2 from "../../assets/images/albania.jpg";

const CardA = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={img2} alt="grecia" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Albania</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam temporibus eaque praesentium, exercitationem molestias aut quos quo quasi possimus facilis fugiat, dolores, dolorem illum perspiciatis dignissimos quibusdam distinctio quidem.
                </p>
                <a href="#" className="btn btn-outline-success">Vedi le città</a>
            </div>
        </div>
    );
};

export default CardA;