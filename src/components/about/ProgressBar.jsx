import "./about.css";

export const ProgressBar = (props) => {
  return (
    <>
      <div className="progress-bar">
        <div className="text">
          <p>{props.title}</p>
          <h4>{props.value}%</h4>
        </div>
        <div className="progress">
          <input type="range" className="slider" min="0" max="100" defaultValue={props.value} />
        </div>
      </div>
    </>
  );
};
