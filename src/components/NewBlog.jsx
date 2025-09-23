import { Link } from "react-router-dom";
import classes from "./NewBlog.module.css";

const NewBlog = ({ image, title, date, description, link }) => {
  return (
    <div className={classes.blogCard}>
      <img src={image} alt={title} className={classes.blogImage} />
      <div>
        <div className={classes.containerDate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokWidth="1.5"
            stroke="currentColor"
            class={classes.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p className={classes.blogDate}>{date}</p>
        </div>
        <h3 className={classes.blogTitle}>{title}</h3>
        <p className={classes.blogDescription}>{description}</p>
        <Link to={link} className={classes.blogLink}>
          Xem chi tiết &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NewBlog;
