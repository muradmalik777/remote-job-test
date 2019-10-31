import React, {useEffect} from 'react';
import './assets/scss/app.scss';
import Home from './pages/Home';

const App = () => {

  useEffect(() => {
    document.title = "Remote Job | Test"
  })
  
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
