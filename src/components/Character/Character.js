import React from "react";

import "./Character.css";

const Character = props => (
  <div className="card">
    <img className="card-image" src={props.imageSrc} alt="character" />
    <h2 className="card-name">{props.name}</h2>
    <h2 className="card-id">Id: {props.id} - created {props.age} years ago</h2>
    <p className="card-species">Status: <span class="value-holder">{props.status}</span></p>
    <p className="card-species">Species: <span class="value-holder">{props.species}</span></p>
    <p className="card-gender">Gender: <span class="value-holder">{props.gender}</span></p>
    <p className="card-gender">Origin: <span class="value-holder">{props.origin}</span></p>
    <p className="card-gender">Last Location: <span class="value-holder">{props.location}</span></p>
  </div>
);

export default Character;
