import { useState } from "react";
import { useEffect } from "react";


function CurrentTime () {
  const [currentTime,setCurrentTime] = useState<Date>();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date())
    },1000);
  },[]) 

  return (
    <div className="flex justify-center items-center bg-amber-950 text-amber-300 rounded-2xl p-6 m-6 shadow-lg">
      <p>Current time  {currentTime?.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime