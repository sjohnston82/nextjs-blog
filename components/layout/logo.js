import { Fragment } from "react";
import Image from "next/image";

import classes from "./logo.module.css";

const Logo = () => {
  return (
    <Fragment>
      <div className={classes.logo}>Big Ern's Bitchin' Bowling Blog</div>
    </Fragment>
  );
};

export default Logo;
