import Logo from "./logo";
import Link from "next/link";

import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* when using the next Link component on something other than plain text, such as a logo component
            in this case, you need to add your own anchor tag but do not need to supply it with an href prop
        */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact Big Ern</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
