import logo from './logo.svg';
import './App.css';
import Article from './Article.js';
import Test from './Test.js';
import { useEffect, useState } from 'react';
import { Button } from './component/Button.js';
import { Display } from './component/Display.js';

function App() {
  // const [firstName, setFirst] = useState("")
  // const [secondName, setSecond] = useState("")

  const [result, setResult] = useState("0"); //計算結果
  const [input, setInput] = useState("0"); //現在の入力値
  useEffect(() => {
    console.log("process start");
  }, []);
  //第二引数でuseEffectの中身を実行するタイミングを指定できる
  //第二引数は空の配列だとリロード時の１回のみ、変数を入れると変数の値が変わった時に実行することができる
  console.count("レンダリング");
  //"レンダリング"の後に"process start"が実行される

  // const parentComponent = () => {
  const handleButtonClick = (value) => {
    console.log(value);
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };
  //prevInputの値が0だったら、valueに置き換え、0でなかったらvalueを追加

  const handleOperatorClick = (ope) => {
    if (input.slice(-1) !== ope) {
      setInput((prevInput) => prevInput + ope);
    }
  };

  const handleClear = (clear) => {
    setResult(0);
    setInput("0");
  }; //結果と表示の値を0にする

  // 計算のボタンがクリックされた時の処理
  const handleCalculate = () => {
    try {
      const calculatedResult = evaluateExpression(input);
      setInput(calculatedResult.toString()); //計算結果を文字列として変数に保持
      setResult(calculatedResult); //計算結果を値として変数に保持
    } catch (error) {
      setInput("エラー：" + error.message);
      setResult("エラー");
    } //エラーが出た時、メッセージを表示
  };

  //四則演算を評価する関数
  const evaluateExpression = (expression) => {

    //不正な文字を取り除く
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');  //正規表現

    //評価
    const result = eval(sanitizedExpression);
    if (Number.isInteger(result)) {
      return result; // 整数の場合は ".0" を表示せずにそのまま返す
    } else {
      return result.toFixed(2); // 小数点以下2桁で表示
    }
  };


  return (
    <>
      <div>
        テスト
      </div>
      {/* <Display /> */}
      <div className="calculator">
        <div className="input-container">
          <input type="text" value={input} readOnly />
          {/* <button className="backspace-button" onClick={handleBackspace}>
            &#9003;
          </button> */}
        </div>
      </div>
      <Button value="1" test={handleButtonClick} />
      <Button value="2" test={handleButtonClick} />
      <Button value="3" test={handleButtonClick} />
      <button className="operator-button" onClick={() => handleOperatorClick("+")}>+</button>
      <Button value="4" test={handleButtonClick} />
      <Button value="5" test={handleButtonClick} />
      <Button value="6" test={handleButtonClick} />
      <button className="operator-button" onClick={() => handleOperatorClick("-")}>-</button>
      <Button value="7" test={handleButtonClick} />
      <Button value="8" test={handleButtonClick} />
      <Button value="9" test={handleButtonClick} />
      <button className="operator-button" onClick={() => handleOperatorClick("*")}>*</button>
      <Button value="0" test={handleButtonClick} />
      <Button value="." test={handleButtonClick} />
      <button className="clear-button" onClick={handleClear}>
        C
      </button>
      <button className="operator-button" onClick={handleCalculate}>=</button>
      {/* <Button value="+" ope={handleOperatorClick} />
      <Button value="-" ope={handleOperatorClick} />
      <Button value="*" ope={handleOperatorClick} />
      <Button value="/" ope={handleOperatorClick} />
      <Button value="=" test={handleButtonClick} /> */}
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      {/* <Button value="2" onClick={handleButtonClick} />
      <Button value="3" onClick={handleButtonClick} />
      <Button value="4" onClick={handleButtonClick} />
      <Button value="5" onClick={handleButtonClick} />
      <Button value="6" onClick={handleButtonClick} />
      <Button value="7" onClick={handleButtonClick} />
      <Button value="8" onClick={handleButtonClick} />
      <Button value="9" onClick={handleButtonClick} />
      <Button value="0" onClick={handleButtonClick} />
      <Button value="+" onClick={handleButtonClick} />
      <Button value="-" onClick={handleButtonClick} />
      <Button value="*" onClick={handleButtonClick} />
      <Button value="/" onClick={handleButtonClick} />
      <Button value="=" onClick={() => handleButtonClick('=')} /> */}
      {/* <Button value="C" onClick={() => setDisplay('')} /> */}
    </>
  );
}
// };

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




