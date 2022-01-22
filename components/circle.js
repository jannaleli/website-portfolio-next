import Link from "next/Link";
import Logo from "./layout/logo";
import Image from "next/image";
import profilePic from "../public/me.jpeg";
import classes from "./circle.module.css";

function Circle() {
  return (
    <div className={classes.circle}>
      <Image
        className={classes.image}
        src={profilePic}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Circle;
