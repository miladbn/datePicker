import Header from "./components/header";
import Body from "./components/body";
import classes from "./datePicker.module.css";

const DatePicker = () => {
  return (
    <div className={classes.datePickerMain}>
      <Header />
      <Body />
    </div>
  );
};

export default DatePicker;
