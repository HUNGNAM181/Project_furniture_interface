import classes from "./Procedure.module.css";

export default function Procedure() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>QUY TRÌNH THI CÔNG</h2>
      <img
        src="/quy-trinh-thiet-ke-noi-that.jpg"
        alt="ảnh quy trình"
        className={classes.image}
      />
    </div>
  );
}
