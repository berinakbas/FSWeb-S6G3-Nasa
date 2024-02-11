import React, {useState , useEffect} from "react";
import "./App.css";

import ApiObj from "./fetchedApi";
import ApodComponent from "./Apod";

const App = () => {
 const [apodData , setApODData] = useState([]);
 
  useEffect(async() => {
    const fetchData = await ApiObj.fetchData(5);
    setApODData(fetchData);

  }, []);

  return (
    <div className="App">
      {
        apodData ?
        apodData.map((item,index) => <ApodComponent key={index} apodData={item} />)
        :
        <p>Loading...</p>
      }
    </div>

    );
  }

  export default App;