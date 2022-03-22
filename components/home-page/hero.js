import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ernie2.webp"
          alt="Hey its Ernie"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ernie</h1>
      <p>
        I am the one and only bowling phenom - who blogs about all things
        bowling and frontend frameworks related.
      </p>
    </section>
  );
};

export default Hero;
