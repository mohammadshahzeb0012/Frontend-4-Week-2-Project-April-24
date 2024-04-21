import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/searchBar.js'
import { ResultContainer } from './components/resultContainer.js';


function App() {
  const [response, setResponse] = useState(null)
  const [loader, setLoader] = useState(false)
  const [SearchParam, setSearchParam] = useState(null)


  return (
    <div className="app">
      {
        !response ?
          <SearchBar
            setResponse={setResponse}
            setLoader={setLoader}
            setSearchParam={setSearchParam}
          /> :
          <ResultContainer
            response={response}
            SearchParam={SearchParam}
          />
      }
      {loader && <div className="loader-wrraper">
        <div className="loader"></div>
      </div>}
    </div>
  )
}


export default App;
