import React from 'react'
import {FaMapMarkerAlt} from "react-icons/fa"
import './Card.css'

const Card = (props) => {
    return (
        <div className='Card'>
            <div className="Card__Image-Container">
                <img src={props.item.cardImg} alt="" className="Card__Image" />
            </div>
            <div className="Card__Data">
                <div className='Card__Data-Top'>
                    <div className='Card__Data-Location'>
                        <h5 className="Card__Location">
                            <FaMapMarkerAlt className='Location__Mark' />
                            <span>{props.item.location}</span>
                        </h5>
                        <a href="https://instagram.com/webcodersevvy/" className="Card__Location-Link">
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className='Card__Location-Title'>
                        {props.item.title}
                    </h2>
                </div>
                <div className='Card__Data-Bottom'>
                    <p className="Card__Location-Travel_Time-Period">
                        <span className="Date Travel__Date-From">{props.item.timePeriod.dateFrom}</span>
                        <span className="Dash">-</span>
                        <span className="Date Travel__Date-To">{props.item.timePeriod.dateTo}</span>
                    </p>
                    <p className="Card__Location-Desc">{props.item.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card