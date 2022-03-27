import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // this takes the filename and uses regex to remove the file extension
  // for this to be effective you must name your content folders in kabob case

  // first you need an absolute path to the specific file you need data for
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  // matter is a function that is from the gray-matter library for parsing markdown files.  it will return
  // an object that has a data prop containing all the meta data of the file and another prop that contains the markdown text
  // the names data and content must be used
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  // readdirSync will return all the files in a directory in an array of strings
  const postFiles = getPostsFiles();

  // mapping over post files and returning them all in the array allPosts
  const allPosts = postFiles.map((file) => {
    return getPostData(file);
  });

  // default JS sort method to move the most recent items to the top of the list or in this case front of the array
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
