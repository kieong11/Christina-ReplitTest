import * as React from 'react';

function Box(props) {
  const clickMe= ()=>{
    alert("리액트 강의 완료")
  }
  return (
    <div className="box">
      Box
      {props.num}
      {props.name}
      <button onClick = {clickMe}>클릭!</button>

    </div>
  )
}

export default Box