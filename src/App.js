import arrivals from "./data/arrival.json";
import "./index.css"
import { useEffect, useState, createRef } from "react";

function App() {
  const trends = arrivals.trending;
  

  const [imgsInView, setImgsInView] = useState(0)
  const length = trends.length
  const card = createRef()
 const [cardWidth, setCardWidth] = useState()
  const show = 5

  
  // useEffect(() => {
    
  //   console.log(card.current.clientWidth)
  //   }, [imgsInView])

const moveStyle = {
  transform: `translateX(-${cardWidth * 5}px)`
}

  function handleNextSlide(){
    if(imgsInView < (length - show)){
       setImgsInView(prevState => prevState + 2)
    }
    const width = card.current.clientWidth
    setCardWidth(width)
  }
  function handleBackSlide(){
    if(imgsInView < (length - show)){
       setImgsInView(prevState => prevState - 2)
    }
   
  }

// David's Help - finding the width of certain divs
  // const ref = createRef()
  // useEffect(() => {
  //   console.log(ref.current?.clientWidth)
  // }, [imgsInView])

  return (
    <div className="App">
     
      <h2>Trending</h2>
      <div className="container">
        <div className="cardS" style={moveStyle}>
          {trends.map((trend) => (
            <>
              <div ref={card} className="card">
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
