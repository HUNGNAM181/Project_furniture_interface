import NewBlog from "../components/NewBlog";
import classes from "./BlogPage.module.css";

const BlogPage = () => {
  const blogs = [
    {
      image: "/phong_khach/10.jpg",
      title: "4 Phong cách Thiết kế Nội thất Phổ biến nhất hiện nay",
      date: "12 tháng 9, 2025",
      description:
        "Khám phá các phong cách như Modern, Indochine, Minimalism, Neo Classical...",
      link: "4phongcach",
    },
    {
      image:
        "https://vietnamdecor.com.vn/wp-content/uploads/2024/04/ke-tivi-vach-ngan-phong-khach-2.jpg",
      title: "Kích thước của kệ tủ tivi phòng khách đúng tiêu chuẩn",
      date: "10 tháng 9, 2025",
      description:
        "Tìm hiểu kích thước chuẩn giúp tối ưu không gian phòng khách...",
      link: "kichthuocketuTV",
    },
    {
      image:
        "https://file.hstatic.net/200000050142/file/phong-cach-thiet-ke-noi-that-romanticism-1-1_78ac5536bd0e4f3ea126e1f3514e6725.jpg",
      title: "Phong cách thiết kế Romanticism",
      date: "08 tháng 9, 2025",
      description:
        "Phong cách lãng mạn với gam màu nhẹ nhàng và nội thất tinh tế...",
      link: "phongcachRomanticism",
    },
  ];

  return (
    <div className={classes.blogPage}>
      <h2 className={classes.blogHeading}>Tin tức & Blog</h2>
      <div className={classes.blogGrid}>
        {blogs.map((blog, index) => (
          <NewBlog key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
