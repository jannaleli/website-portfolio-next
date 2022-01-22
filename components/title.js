import Link from "next/Link";
import Logo from "./layout/logo";

import classes from "./title.module.css";

function Title({ title }) {
  return (
    <div className={classes.title}>
      <p className={classes.text}>{title} </p>
    </div>
  );
}

export default Title;
