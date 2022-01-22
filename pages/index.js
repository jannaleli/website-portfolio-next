import Head from "next/head";
import Image from "next/image";
import Circle from "../components/circle";
import classes from "../styles/Home.module.css";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className={classes.main}>
      <Circle />
      <div className={classes.maintext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </div>
    </div>
  );
}
