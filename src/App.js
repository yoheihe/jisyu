import './App.css';
import { useEffect, useState } from 'react';
import { Button } from './component/Button.js';

function App() {
  const [result, setResult] = useState("0"); //計算結果
  const [input, setInput] = useState("0"); //現在の入力値
  useEffect(() => {
    console.log("process start");
  }, []);
  //第二引数でuseEffectの中身を実行するタイミングを指定できる
  //第二引数は空の配列だとリロード時の１回のみ、変数を入れると変数の値が変わった時に実行することができる
  console.count("レンダリング");//"レンダリング"の後に"process start"が実行される

  //数値ボタンがクリックされた時の処理
  const handleButtonClick = (numValue) => {
    //prevInputの値が0だったら、numValueに置き換え、0でなかったらnumValueを追加
    setInput((prevInput) => (prevInput === "0" ? numValue : prevInput + numValue));
  };

  //四則演算ボタンがクリックされた時の処理
  const handleOperatorClick = (ope) => {
    if (input.slice(-1) !== ope) {
      setInput((prevInput) => prevInput + ope);
    } 
  };

  // バックスペースのボタンがクリックされた時の処理
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, prevInput.length - 1));
  }; //最後の値を削除

  //結果と表示の値を0にする
  const handleClear = (clear) => {
    setResult(0);
    setInput("0");
  };

  // 計算のボタンがクリックされた時の処理
  const handleCalculate = () => {
    try {
      const calculatedResult = evaluateExpression(input);
      setInput(calculatedResult.toString()); //計算結果を文字列として変数に保持
      setResult(calculatedResult); //計算結果を値として変数に保持
      //エラーが出た時、メッセージを表示
    } catch (error) {
      setInput("エラー：" + error.message);
      setResult("エラー");
    }
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
      <div className="container">
        <div className="calculator">
          <div className="input-container">
            <input type="text" value={input} readOnly />
            <button className="backspace-button" onClick={handleBackspace}>
              &#9003;
            </button>
          </div>
          <div className="input-button">
            <Button value="1" inputButton={handleButtonClick} />
            <Button value="2" inputButton={handleButtonClick} />
            <Button value="3" inputButton={handleButtonClick} />
            <button className="operator-button" onClick={() => handleOperatorClick("+")}>+</button>
          </div>
          <div className="input-button">
            <Button value="4" inputButton={handleButtonClick} />
            <Button value="5" inputButton={handleButtonClick} />
            <Button value="6" inputButton={handleButtonClick} />
            <button className="operator-button" onClick={() => handleOperatorClick("-")}>-</button>
          </div>
          <div className="input-button">
            <Button value="7" inputButton={handleButtonClick} />
            <Button value="8" inputButton={handleButtonClick} />
            <Button value="9" inputButton={handleButtonClick} />
            <button className="operator-button" onClick={() => handleOperatorClick("*")}>*</button>
          </div>
          <div className="input-button">
            <Button value="0" test={handleButtonClick} />
            <Button value="." test={handleButtonClick} />
            <button className="clear-button" onClick={handleClear}>
              C
            </button>
            <button className="operator-button" onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div>

      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
    </>

  );
}
// };
export default App;
