
import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title , category] = useState(['남자 코트 추천', '가우동 맛집 추천', '프론트엔드 강의 추천']);
  let [like, likeChange] = useState(['0', '1', '2']);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [inputData, inputChange] = useState('');
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

<Profile></Profile>

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
    {/* 글입력 */}
    <input  onChange={(e)=> {
      let inputed = e.target.value;
      inputChange(inputed);
    }}/>

    {/* 글발행 */}
    <button onClick={()=>{
      let copy = [...title];
      copy.push(inputData);
      category(copy);

    }}>글 발행</button>

    {
     modal == true ? <Modal idx={idx} category={category} title={title}></Modal> : null
    }
    
    </div>
  );
}

class Profile extends React.Component{
  constructor() {
    super();
    this.state = {  name : "kim", age : 27 }
  }

  changeName() {
    this.setState({name:"kwon"})
  }

  render() {
    return(
      <div>
       <h3>프로필입니다.</h3> 
       <p>저는 {this.state.name} 입니다.</p>
       <button onClick={()=> {this.changeName().bind(this)} }>이름바꿔</button>
        </div>
    )
  }
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.title[props.idx]}</h4>
      <p>날짜{props.test}</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy.splice([props.idx], 1);
        props.category(copy);
      }}>삭제</button>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0]='여자 코트 추천';
        props.category(copy);
      }}>글수정</button>
    </div>
  )
}


export default App;
