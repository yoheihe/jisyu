const PublishedButton = (props) => {
  return (
  <button onClick={() => props.onClick()}>
    公開状態: {props.isPublished.toString()}
  </button>
  //  console.log(props.isPublished)

  )
}

export default PublishedButton;