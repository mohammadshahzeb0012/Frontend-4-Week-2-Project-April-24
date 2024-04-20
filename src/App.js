import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/searchBar.js'
import { ResultContainer } from './components/resultContainer.js';


function App() {
  const [apiStatus, newApiStatus] = useState(null)
  const [loader, setLoader] = useState(false)


  return (
    <div className="app">
      <SearchBar
        newApiStatus={newApiStatus}
        setLoader={setLoader}
      />
      {apiStatus && <ResultContainer apiStatus={apiStatus} />
      }
      {loader && <div className="loader-wrraper">
        <div className="loader"></div>
      </div>}
    </div>
  )
}


export default App;
