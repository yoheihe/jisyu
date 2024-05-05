import logo from './logo.svg';
import './App.css';
import Article from './Article.js';
import Test from './Test.js';
import { useState } from 'react';

function App() {
  const [firstName, setFirst] = useState("")
  const [secondName, setSecond] = useState("")

  return (
    <>
      <input type="text"
        onChange={(val) =>
          setFirst(val.target.value)
        }
      />

      <input type="text"
        onChange={(val2) =>
          setSecond(val2.target.value)
        }
      />
        <p>{firstName}{secondName}</p>


      {/* <Article
        title={"hello"}
        content="ここに記事がきます"
      />
      <Test
        check_number="1"
        sample="こんにちは" /> */}
    </>
  );


};



export default App;
