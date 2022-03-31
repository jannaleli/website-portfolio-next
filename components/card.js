import Link from "next/Link";
import Logo from "./layout/logo";
import Technology from "./technology";
import classes from "./card.module.css";
import Title from "./title";
import Date from "./date";

function Card({ work }) {
  console.log(work.technologies);
  return (
    <div className={classes.card}>
      <Title title={work.company_name + " " + "(" + work.work_title + ")"} />
      <Date date={work.date} />
      <div className={classes.cardcontent}>
        <div className={classes.text}>{work.work_description}</div>
        <Technology technology={work.technologies} />
      </div>
    </div>
  );
}

export default Card;
