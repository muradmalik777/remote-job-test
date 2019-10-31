import React from 'react';
import './jobs.scss';

const Jobs = (props) => {

    return(
        <div className="all-jobs">
            <h2>Job Borad with list of Companies and Requirements</h2>
            { props.jobs && props.jobs.map((item, index) => 
                <div key={index} className="job">
                    <h3>{item.company}</h3>
                    <p>Compulsary Requirements: {item.compulsary_requirements.map((m1, index2) => <span key={index2}>{m1}, </span>)}</p>
                    <p>Optional  Requirements: {item.optional_requirements.map((m2, index3) => <span key={index3}>{m2}, </span>)}</p>
                </div>
            )}
        </div>
    )
}

export default Jobs;