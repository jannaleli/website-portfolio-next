import Link from "next/Link";
import Logo from "./layout/logo";
import Technology from "./technology";
import classes from "./sideprojectcard.module.css";
import Title from "./projecttitle";

function SideProjectCard({ project }) {
  return (
    <div className={classes.card}>
      <Title title={project.project_title} />
      <div className={classes.cardcontent}>
        <div className={classes.text}>{project.project_description}</div>
        <Technology technology={project.technologies} />
      </div>
    </div>
  );
}

export default SideProjectCard;
