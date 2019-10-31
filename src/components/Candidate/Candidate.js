import React from 'react';
import './candidate.scss';

const Candidate = (props) => {
    return(
        <div className="my-profile flex-col">
            <h2>{props.profile.name}</h2>
            <p>Profile: {props.profile && props.profile.profile.map((item, index) => <span key={index}>{item}, </span>)}</p>
        </div>
    )
}

export default Candidate;