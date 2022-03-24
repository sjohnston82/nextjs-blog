import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "big-erns-big-earns",
  title: "Big Ern's Big Earns",
  image: "erniemccracken.webp",
  date: "2022-03-22",
  content: "# This is a first post",
};

const PostContent = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
