import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "big-erns-big-earns",
    title: "Big Ern's Big Earns",
    image: "erniemccracken.webp",
    excerpt:
      "A riveting post about Big Ernie McCracken's monster earnings from a career as a pro bowler.",
    date: "2022-03-22",
  },
  {
    slug: "big-erns-big-earns2",
    title: "Big Ern's Big Earns",
    image: "erniemccracken.webp",
    excerpt:
      "A riveting post about Big Ernie McCracken's monster earnings from a career as a pro bowler.",
    date: "2022-03-22",
  },
  {
    slug: "big-erns-big-earns3",
    title: "Big Ern's Big Earns",
    image: "erniemccracken.webp",
    excerpt:
      "A riveting post about Big Ernie McCracken's monster earnings from a career as a pro bowler.",
    date: "2022-03-22",
  },
  {
    slug: "big-erns-big-earns4",
    title: "Big Ern's Big Earns",
    image: "erniemccracken.webp",
    excerpt:
      "A riveting post about Big Ernie McCracken's monster earnings from a career as a pro bowler.",
    date: "2022-03-22",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
