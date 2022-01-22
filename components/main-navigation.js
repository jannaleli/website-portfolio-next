import Link from "next/Link";
import Logo from "./layout/logo";

import classes from "./main-navigation.module.css";
const { RESUME_LINK } = process.env;
function MainNavigation() {
  console.log(process.env.RESUME_LINK);
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/projects">Side Projects</Link>
          </li>
          <li>
            <a href={RESUME_LINK}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
