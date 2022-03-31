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
        <div>Jann Aleli Castillo Zaplan</div>
        <div>
          9 years of overall experience in software development. 6 years of
          experience in mobile/web development (iOS, Android, ReactJS, React
          Native) Proven skills in Objective-C, Swift, iOS Development, macOS
          Development, Android, C/C++, ReactJS, and React Native. Eager to learn
          new technologies and implementing them into new projects. Deep
          experience with technical decision making and expertise in customer
          management and product development.
        </div>
      </div>
    </div>
  );
}
