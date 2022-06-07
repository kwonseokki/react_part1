
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title , category] = useState(['남자 코트 추천', '가우동 맛집 추천', '프론트엔드 강의 추천']);
  let [like, likeChange] = useState(['0', '1', '2']);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  [1,2,3].map(function(param){
    return '123123'
  });

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 >ReactBlog</h4>
      </div>

{/* <button onClick={()=> {
  let copy2 = [...title];
  copy2.sort();
  category(copy2);
}}>가나다순 정렬버튼</button>
    <div className='list'>
    <h4>{ title[0] } <span onClick={ () => {likeChange(like+1)}}>👍</span> {like} </h4><button onClick={()=>{
   let copy = [...title];
    copy[0] = '여자코트 추천';
     category(copy);
      }}>여자</button>
    <p>2월 17일 발행</p>
    </div>

    <div className='list'>
    <h4>{ title[1] }</h4>
    <p>2월 17일 발행</p>
    </div>

    <div className='list'>
    <h4 onClick={()=> {
      setModal(true);
      if(modal == true) {
        setModal(false);
      }
    }}>{ title[2] }</h4>
    <p>2월 17일 발행</p>
    </div> */}

    

    {
    
      title.map(function(a, i){
         
        return (
          <div className='list' key={i}>
            
          <h4 onClick={()=>{
            setIdx(i);
            setModal(true);
            if(modal == true) {
              setModal(false);
            }
            
            }}>{i}. { title[i] }</h4>

          <span onClick={ () => {
            let copy = [...like];
            copy[i]++;
            likeChange(copy)
            }}>👍</span> {like[i]}
          <p>2월 17일 발행</p>
          </div>
          )
      })

    }
    
    {
     modal == true ? <Modal idx={idx} category={category} title={title}></Modal> : null
    }
    
    </div>
  );
}


const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.title[props.idx]}</h4>
      <p>날짜{props.test}</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0]='여자 코트 추천';
        props.category(copy);
      }}>글수정</button>
    </div>
  )
}


export default App;
