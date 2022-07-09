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
    ![image](https://user-images.githubusercontent.com/73763069/178100913-c9182795-a91b-4744-b730-931d78693e22.png)


    - Custom Hook :

