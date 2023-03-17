import {useState,useCallback, useMemo} from 'react';
import './App.css';
import Videoref from './Videoref';

function App() {
  const [next,setnext]=useState()
  const [ispaying,setisplaying]=useState(false)

  const onPlay=useCallback((()=>{
    setisplaying(true)
  }),[])
  const onPause=useCallback((()=>{
    setisplaying(false)
  }),[])

  const videoDate=useMemo((()=>{
    return(
      {
        title:"bunny",
        url:"https://www.w3schools.com/html/mov_bbb.mp4"
      }
    )
  }),[])
  return (
    
          <div>
            <input type="text" value={next} onChange={((evt)=>{
              setnext(evt.target.value)
            })}/>
            <span>{next}</span>
            <div>vide is {ispaying ? "playing" : "paused" }</div>
            <Videoref 
            
            src={
              videoDate
            }
            
            onPlay={onPlay}
            onPause={onPause}
            />
          </div>
  );
}

export default App;
