import MonthPicker from "./components/monthPicker";
import YearPicker from "./components/yearPicker";
import classes from "./datePicker.module.css";

const DatePicker = () => {
  return (
    <div className={classes.datePickerMain}>
      <div className={classes.firstRow}>
        <YearPicker />
        <MonthPicker />
      </div>
    </div>
  );
};

export default DatePicker;
