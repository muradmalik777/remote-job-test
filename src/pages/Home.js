import React, {useState, useEffect} from 'react';
import '../assets/scss/home.scss';
import Jobs from '../components/Jobs/Jobs';
import Candidate from '../components/Candidate/Candidate';
import Filter from '../components/Filter/Filter';
import {getJobs} from '../helpers/Jobs';
import {applyFilter} from '../helpers/Utils';
import {myProfile} from '../helpers/Profile';


const Home = () => {
    const [jobs] = useState(getJobs())
    const [filteredJobs, setFilteredJobs] = useState({})
    const [profile] = useState(myProfile())

    useEffect(() => {
        let data = applyFilter(jobs, myProfile())
        setFilteredJobs(data)
        console.log(data)
    }, [jobs])

    return (
        <div className="home">
            <Jobs jobs={jobs} />
            <Candidate profile={profile} />
            <Filter profile={profile} filter={filteredJobs} />
        </div>
    )
}

export default Home;