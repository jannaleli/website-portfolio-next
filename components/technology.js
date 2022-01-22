import Link from "next/Link";
import Logo from "./layout/logo";

import classes from "./technology.module.css";

function Technology({ technology }) {
  return (
    <div className={classes.technologycontent}>
      {technology.map(tech => (
        <div className={classes.technology}>
          <p className={classes.text}>{tech + "  "} </p>
        </div>
      ))}
    </div>
  );
}

export default Technology;
