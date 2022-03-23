import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  // we destructure from props.post instead of just props because each post is an object with the properties we want to extract
  const { title, image, excerpt, date, slug } = props.post;

  // formatting the date to a human readable format
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // the image prop is just the name of the file, no the full path, so we must make one using template literals
  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/images/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive" 
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
