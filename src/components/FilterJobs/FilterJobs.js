import React, {useState, useEffect} from 'react';
import './filterJobs.scss';
import {getJobs} from '../../helpers/Jobs';

const Sidebar = (props) => {
    const [jobs] = useState(getJobs())
    console.log("mm ", jobs)

    return(
        <div className="sidebar">

        </div>
    )
}

export default Sidebar;