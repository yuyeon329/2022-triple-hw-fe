import { useEffect, useState } from 'react';

function easeOutQuint(num) {
  return 1 - Math.pow(1 - num, 5);
}

function useCounter(info){
  const [count, setCount] = useState(0)
  const fps = 1000 / 60
  const step = Math.round(800 / fps)

  useEffect(()=> {
    let now = 0;
    const counter = setInterval(() => {
      now += 1;
      const vel = easeOutQuint(now / step)
      setCount(Math.round(info.end * vel));

      if(vel == 1) {
        clearInterval(counter);
      }
    }, step)
  }, [info.end, step, fps])
  
  return {__html : count};
}

export default useCounter;