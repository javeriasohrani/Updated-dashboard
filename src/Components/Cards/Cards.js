import React from 'react'
import SvgMountain from '../../svg/Mountain'
import "./Cards.css";
export default function Cards(props) {
    return (
        
        <div className="card-wrapping">
        <div className="cards-wrap">
            <div className="cards">
                <div className="num-icons">
                    <div className="title-item">
                        <span>{props.price}</span>
                        <h6>{props.date}</h6>
                    </div>
                    <div className="num-image">
                     <SvgMountain/>
                     <h6>{props.vacations}</h6>

                        
                    </div>

                </div>

            </div>
              
        </div>
        </div>
    )
}
