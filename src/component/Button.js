import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react'


export const Button = (props) => {
    return (
      <>
      {/* <div>
        こんにちは。
      </div> */}
            <button onClick={() => props.test(props.value)}>
            {props.value}
        </button>
      </>

    );
}
  // return (
  //   <div>
  //     <div className="container">
  //       <div className="calculator">
  //         <div className="input-container">
  //           <input type="text" value={props.handleNumberClick} readOnly />
  //           <button className="backspace-button">
  //             &#9003;
  //           </button>
  //         </div>
  //         <div>
  //           <button onClick={() => handleNumberClick("1")}>1</button>
  //           <button onClick={() => handleNumberClick("2")}>2</button>
  //           <button onClick={() => handleNumberClick("3")}>3</button>
  //           <button>+</button>
  //         </div>
  //         <div>
  //           <button onClick={() => handleNumberClick("4")}>4</button>
  //           <button onClick={() => handleNumberClick("5")}>5</button>
  //           <button onClick={() => handleNumberClick("6")}>6</button>
  //           <button className="operator-button">-</button>
  //         </div>
  //         <div>
  //           <button onClick={() => handleNumberClick("7")}>7</button>
  //           <button onClick={() => handleNumberClick("8")}>8</button>
  //           <button onClick={() => handleNumberClick("9")}>9</button>
  //           <button>*</button>
  //         </div>
  //         <div>
  //           <button onClick={() => handleNumberClick("0")}>0</button>
  //           <button className="clear-button">
  //             C
  //           </button>
  //           <button>.</button>
  //           <button>=</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
// }
