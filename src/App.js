import arrivals from "./data/arrival.json";
import "./index.css"
import { useState } from "react";

function App() {
  const trends = arrivals.trending;
  

  const [imgsInView, setImgsInView] = useState(0)
  const length = trends.length
  const show = 5
  


const moveStyle = {
  transform: `translateX(-${imgsInView * 5}%)`
}

  function handleNextSlide(){
    if(imgsInView < (length - show)){
       setImgsInView(prevState => prevState + 2)
    }
   
  }
  function handleBackSlide(){
    if(imgsInView < (length - show)){
       setImgsInView(prevState => prevState - 2)
    }
   
  }

  return (
    <div className="App">
     
      <h2>Trending</h2>
      <div className="container">
        <div className="cardS" style={moveStyle}>
          {trends.map((trend) => (
            <>
              <div className="card">
                <img className="image" src={trend.image} alt="" />
                <h5>{trend.price}</h5>
                <h3>{trend.name}</h3>
                <h4>{trend.foodGroup}</h4>
              </div>
            </>
          ))}
          
        </div>
        <div className="nextBtn" onClick={handleNextSlide}>Next</div>
        <div className="BackBtn" onClick={handleBackSlide}>Back</div>
      </div>
      
    </div>
  );
}

export default App;
