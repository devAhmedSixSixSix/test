const MainTitleAndDescription = ({mainTitle, description}) => {
  return (
    <div className="text-center my-5">
        <h2>{mainTitle}</h2>
        <sapn className="d-block bg-success rounded m-auto my-3" style={{
            width: "80px",
            height: "5px"
        }}></sapn>
        <p>{description}</p>
    </div>
  )
}

export default MainTitleAndDescription
