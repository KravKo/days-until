// import React from 'react'
import './style.css'
import WP from '../../img/piece/w-pawn.png'

function chessboard() {
    let HorizontalAxis = ["a","b","c","d","e","f","g","h"];
    let VerticalAxis =[1,2,3,4,5,6,7,8];

    let Board = [];

     for (let j = VerticalAxis.length - 1; j>=0; j--){
        for (let i = 0; i < HorizontalAxis.length; i++){

            const num = j+i+2;
            if (num % 2 === 0) {
                Board.push(<div className='tiles black-tiles'><img className='piece' src={WP} /></div>)
            } else{
                
                Board.push(<div className='tiles white-tiles'>[{HorizontalAxis[i]}{VerticalAxis[j]}]</div>)
            }
        }
        
    }

  return (
    <>
    <div className="chessboard">
        {Board}
    </div>
    </>
  )
}

export default chessboard