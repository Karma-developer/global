import React from "react";
import './card-styles.css';
import img3 from "../../assets/images/sardegna.jpg";

const CardSa = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={img3} alt="grecia" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Sardegna</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam temporibus eaque praesentium, exercitationem molestias aut quos quo quasi possimus facilis fugiat, dolores, dolorem illum perspiciatis dignissimos quibusdam distinctio quidem.
                </p>
                <a href="#" className="btn btn-outline-success">Vedi le città</a>
            </div>
        </div>
    );
};

export default CardSa;