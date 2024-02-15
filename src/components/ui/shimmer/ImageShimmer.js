import style from "../shimmer/shimmer.module.css";

const ImageShimmer = ({ numberOfLine = 1 }) => {
  return (
    <div className={style.miniShimeer} style={{ padding: "16.5px 5px" }}>
      <div className={style.miniBox}></div>

      {[...Array(numberOfLine).keys()].map((va, index) => (
        <div key={index} className={style.miniList}></div>
      ))}
    </div>
  );
};

export default ImageShimmer;
