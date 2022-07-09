import { useEffect, useState } from 'react';

function easeOutQuint(num) {
  return 1 - Math.pow(1 - num, 5);
}

function useCounter(info){
  const [count, setCount] = useState(info.start)
  const fps = 1000 / 60
  const step = Math.round(800 / fps)

  useEffect(()=> {
    let now = info.start;
    const counter = setInterval(() => {
      const vel = easeOutQuint(++now / step)
      setCount(Math.round(info.end * vel));

      if(vel === 1) {
        clearInterval(counter);
      }
    }, step)
  }, [info.start, info.end, step, fps])
  
  return {__html : count};
}

export default useCounter;