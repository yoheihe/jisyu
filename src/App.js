import logo from './logo.svg';
import './App.css';
import Article from './Article.js';
import Test from './Test.js';
import { useState } from 'react';
import { Button } from './component/Button.js';
import { Display } from './component/Display.js';

function App() {
  // const [firstName, setFirst] = useState("")
  // const [secondName, setSecond] = useState("")
  const [input, setInput] = useState("0"); //現在の入力値
  const [result, setResult] = useState("0"); //計算結果
  const handleNumberClick = (inputNumber) => {
    setInput(inputNumber);
  }

  return (
    <>
      <Display />
      <Button
        handleNumberClick={handleNumberClick}
      />

    </>
  );

};

export default App;


{/* <input type="text"
        onChange={(val) =>
          setFirst(val.target.value)
        }
      />

      <input type="text"
        onChange={(val2) =>
          setSecond(val2.target.value)
        }
      />
        <p>{firstName}{secondName}</p> */}

{/* <Article
        title={"hello"}
        content="ここに記事がきます"
      />
      <Test
        check_number="1"
        sample="こんにちは" /> */}




