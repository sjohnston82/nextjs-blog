import AllPosts from "../../components/posts/all-posts";

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
