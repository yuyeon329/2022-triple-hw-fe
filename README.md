# Triple 2022 공개채용 FE HomeWork

### 프로젝트 실행 방법  
1. clone하고자 하는 디렉토리로 이동
2. `git clone https://github.com/yuyeon329/2022-triple-hw-fe.git`
3. `npm install`
4. `npm start`

node version : v16.14.2  
npm version : 8.5.0  
  
---
### 사용한 기술과 선택한 이유  
1. React : 유지보수와 재사용에 편리한 Component 단위로 개발을 함으로써 효율을 높였습니다.  
    - Styled Component : 각 React 컴포넌트에 종속되는 스타일을 적용하기 위해 사용하였습니다.  
    ```javascript
    const StyledPlayPlayStore = styled.img.attrs({
      src: `${playstore}`
     })`
      display : block;
      width : 54px;
      height : 54px;
      `

    ```

    - React Hook : 특정 컴포넌트가 렌더링 될 때마다 원하는 작업을 수행할 수 있도록 useEffectHook을 사용하였습니다.  
    페이지가 로딩 될 때, 실행될 수 있도록 deps에 빈 배열을 넣었습니다. 
    ```javascript
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
    }, []);
    ```


    - Custom Hook : 숫자가 증가하는 애니메이션을 구현하기 위해 Custom Hook을 구현했습니다.  
    각 숫자는 종료 수치만 다르고 모두 같은 로직을 공유하므로 컴포넌트 로직을 함수로 만들어서 재사용하였습니다.
    ```javascript
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
        }, []);
  
        return {__html : count};
      }

      export default useCounter;
    ```  
### 컴포넌트 구획 기준  
![image](https://user-images.githubusercontent.com/73763069/178102014-509ba0f2-c206-47c3-b7b4-f425bbc30572.png)  


