import { useRef ,memo} from "react"

export default memo(function Videoref({src,onPlay,onPause}){

    const VideoStory=useRef()
    const count=useRef(0)
    count.current++
    return(

       <div>
        <p>Call count is{count.current} </p>
        <h1>{src.title}</h1>
        <video src={src.url} ref={VideoStory} />
        <button onClick={(()=>{
            VideoStory.current.play()
            onPlay()
        })} >play</button>
        <button onClick={(()=>{
            VideoStory.current.pause()
            onPause()
        })} >pause</button>
       </div>
    
    )
   
})