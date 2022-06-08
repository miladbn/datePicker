import YearPicker from "./yearPicker";
import MonthPicker from "./monthPicker";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerRow}>
      <YearPicker />
      <MonthPicker />
    </div>
  );
};

export default Header;
