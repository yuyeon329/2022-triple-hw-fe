import { useEffect, useState } from 'react';

function useCounter(info){
  const [count, setCount] = useState(info.start)
  const step = Math.abs(Math.floor(2000 / (700 - info.start)))

  useEffect(()=> {
    let now = info.start;
    const counter = setInterval(() => {
      now += 1;
      setCount(now);
      // alert(JSON.stringify(count));
      // alert(now);

      if(now == info.end) {
        clearInterval(counter);
      }
    }, step)
  }, [info.start, info.end, step])
  
  return {__html : count};
}

export default useCounter;