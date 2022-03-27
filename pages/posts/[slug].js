import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export function getStaticProps(context) {
  // all get static props has a context object, using the params prop in the context object gives us our slug
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const data = getPostsFiles();

  const slugs = data.map((post) => post.replace(/\.md$/, ""));

  const pathsWithParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default PostDetailPage;
