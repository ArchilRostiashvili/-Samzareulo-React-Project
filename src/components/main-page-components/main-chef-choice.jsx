import "./main-chef-choice.css";

export default function ChefChoice(props) {
  if (!props.data || props.data.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <h4> Today's Specials</h4>
      <div className="grid-container">
        <div className="grid-box">
          <img src={props.data[0].imageURLs[0]} alt="" />
        </div>
        <div className="grid-box">
          <img src={props.data[1].imageURLs[0]} alt="" />
        </div>
        <div className="grid-box">
          <img src={props.data[2].imageURLs[0]} alt="" />
        </div>
        <div className="grid-box">
          <img src={props.data[3].imageURLs[0]} alt="" />
        </div>
      </div>
    </div>
  );
}
