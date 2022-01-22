import Head from "next/head";
import Image from "next/image";
import { connectToDatabase } from "../lib/mongodb";
import { Fragment } from "react";
import Card from "../components/card";
import classes from "../styles/Home.module.css";
export default function Work({ works }) {
  console.log(works);
  return (
    <div className={classes.container}>
      <div>
        <ul className={classes.cardlist}>
          {works.map(work => (
            <Card work={work} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const works = await db
    .collection("portfolio_web")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  console.log(works);
  return {
    props: {
      works: JSON.parse(JSON.stringify(works))
    }
  };
}
