import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Big Ern's Bitchin' Bowling Blog!</title>
        <meta
          name="description"
          content="A blog by Big Ernie McCracken, to keep his adoring fan base in the know."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

// we use getStaticProps here instead of getServerSideProps because we do not need to rerender all of the posts every time
// a request comes in.  these blog posts would rarely change if ever so getStaticProps is the best way to pre render them.
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800,
  };
}

export default HomePage;
