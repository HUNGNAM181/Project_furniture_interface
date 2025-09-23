import { Link } from "react-router-dom";
import classes from "./CategoryList.module.css";

const categories = [
  {
    id: 1,
    title: "Phòng khách",
    desc: "Thiết kế không gian sống đẳng cấp và tiện nghi.",
    img: "/phong_khach/1.jpg",
    link: "livingRoom",
  },
  {
    id: 2,
    title: "Phòng ngủ",
    desc: "Nơi thư giãn và tạo năng lượng sau một ngày dài.",
    img: "/phong_ngu/1.jpg",
    link: "bedroom",
  },
  {
    id: 3,
    title: "Phòng bếp",
    desc: "Không gian ấm cúng cho những bữa ăn sum vầy.",
    img: "/phong_bep/5.jpg",
    link: "kitchen",
  },
  {
    id: 4,
    title: "Phòng trẻ em",
    desc: "Thiết kế tươi sáng và an toàn cho bé yêu.",
    img: "/phong_tre_em/1.jpg",
    link: "childrenBedRoom",
  },
];

const CategoryList = () => {
  return (
    <section className={classes.categorySection}>
      <h2>Danh mục nổi bật</h2>
      <div className={classes.categoryGrid}>
        {categories.map((cat) => (
          <div key={cat.id} className={classes.card}>
            <img src={cat.img} alt={cat.title} />
            <div className={classes.cardContent}>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <Link to={cat.link} className={classes.button}>
                Xem thêm
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
