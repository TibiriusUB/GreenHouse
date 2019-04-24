import React from 'react';

export default function Card(props) {
    return (
        <div className="col-md-4" style={{marginTop:10, position:'relative'}}>
            <div className={props.cardStyle}>
                <img className="card-img-top img-responsive" src={props.imageUrl} alt="Card cap"/>
                <div className="card-body">
                    <p style={{fontWeight:'600'}} className="card-titles">{props.title}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            {
                props.showPlusSign &&
                <a href="#!" onClick={props.onPlusClick} style={{color:'red', position:'absolute', top:10, right:30}}><i className="fas fa-plus-square fa-2x"></i></a>
            }
            
        </div>
    )
}
