import { useState } from "react";
import PublishedButton from "./PublishedButton";

const Article = (props) => {
  const [isPublished, setIspublished] = useState(false)
  const publishArticle = () => {
    setIspublished(true)
  }
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <PublishedButton isPublished={isPublished} onClick={publishArticle} />
    </div>
        //ボタンを押したらpublishArticleの関数が実行される
  );
};

export default Article;