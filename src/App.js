import React, {useEffect} from 'react';
import './assets/scss/app.scss';
import FilterJobs from './components/FilterJobs/FilterJobs';

const App = () => {

  useEffect(() => {
    document.title = "Remote Job | Test"
  })
  
  return (
    <div className="app">
      <FilterJobs />
    </div>
  );
}

export default App;
