import React from 'react';
import ReactDOM from 'react-dom';
import Chess from './Component/Chess'
function Chessboard(){
  return(
    <div>
      <Chess />
    </div>
  )
}
ReactDOM.render(<Chessboard/>,document.getElementById('root'));