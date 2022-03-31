import Link from "next/Link";
import Logo from "./layout/logo";

import classes from "./date.module.css";

function Date({ date }) {
  return (
    <div className={classes.date}>
      <p className={classes.text}>{date} </p>
    </div>
  );
}

export default Date;
