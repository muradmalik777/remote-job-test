import React from 'react';
import './filter.scss';

const Filter = (props) => {
    console.log(props)
    return(
        <div className="filter">
            <div className="left">
                <h3>Jobs "{props.profile.name}" can apply</h3>
                { props.filter.can && props.filter.can.map((item,index) => 
                    <span key={index}>{item.company}</span>
                )}
            </div>
            <div className="right">
                <h3>Jobs "{props.profile.name}" cannot apply</h3>
                { props.filter.cannot && props.filter.cannot.map((item,index) => 
                    <span key={index}>{item.company}</span>
                )}
            </div>
        </div>
    )
}

export default Filter;