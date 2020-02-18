import app from "./app";  // ./ 같은 폴더 내에 파일을 상대경로 지정해줌
const port = 3000;

const helloworld = () => {
    console.log(`Listening on ${port}`); 
    //문자열 안에 변수 넣는법 `` 브라켓을 사용한다.
    
};

app.listen(port,helloworld);