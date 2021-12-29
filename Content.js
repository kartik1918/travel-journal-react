import React from "react"
import data from "./data"

export default function Content(props) {
    console.log(props)
    return (
        <div>
            <section>
                    <img src={props.item.imageUrl}  
                    className="content-img"
                    />
                <div className="trip-details">
                    <p className="content-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {props.item.location}
                        <a href={props.item.googleMapsUrl} className="content-maps">View on Google Maps</a>
                    </p>  
                    <h2>{props.item.title}</h2>
                    <p className="content-date"><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span></p>
                    <p className="content-description">{props.item.description}</p>
                </div>
            </section>
            <hr />
        </div>                                            
    )
}