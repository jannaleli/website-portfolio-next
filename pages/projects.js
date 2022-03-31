import Head from "next/head";
import Image from "next/image";
import { connectToDatabase } from "../lib/mongodb";
import { Fragment } from "react";
import SideProjectCard from "../components/sideprojectcard";
import classes from "../styles/Home.module.css";
export default function Projects({ projects }) {
  return (
    <div className={classes.container}>
      <div>
        <ul className={classes.projlist}>
          {projects.map(project => (
            <SideProjectCard project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const projects = await db
    .collection("sideprojects")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    }
  };
}
