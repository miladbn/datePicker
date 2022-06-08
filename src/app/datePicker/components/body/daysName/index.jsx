import classes from "./daysName.module.css";

const DaysName = () => {
  return (
    <div className={classes.daysRow}>
      <p>شنبه</p>
      <p>یک شنبه</p>
      <p>دو شنبه</p>
      <p>سه شنبه</p>
      <p>چهار شنبه</p>
      <p>پنج شنبه</p>
      <p>جمعه</p>
    </div>
  );
};

export default DaysName;
