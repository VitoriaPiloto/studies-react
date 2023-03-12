import React from 'react'

export default function Navb(props){
    return(
            <div className="card">
                <div className="card--img-box">
                    <img className="card--img" src={props.imageUrl} alt={props.title} />
                </div>

                <div className="card--infos">
                    <h2 className="card--location">{props.location}</h2>
                    <a className="card--location-url" href={props.googleMapsUrl}>
                        View on Google Maps
                    </a>
                    <h3 className="card--title">{props.title}</h3>
                    <p className="card--date">
                    {props.startDate} - {props.endDate}
                    </p>
                    <p className="card--description">{props.description}</p>
                    <hr/>                    
                </div>         
         </div>
    )
}