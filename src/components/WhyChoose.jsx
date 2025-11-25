import classes from "./WhyChoose.module.css";

function WhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>LÝ DO CHỌN NỘI THẤT HOÀNG GIA</h2>
        <p className={classes.description}>
          Với niềm khao khát mang đến cho khách hàng một không gian sống trong
          và đầy cảm hứng để cho mọi diện tích được sử dụng hiệu quả, Nội thất
          Hoàng Gia không ngừng sáng tạo mang đến những thiết kế mới mẻ riêng
          biệt phục vụ nhu cầu sử dụng, đội ngũ kỹ sư thiết kế công thành niềm
          an tâm.
        </p>

        <div className={classes.reasons}>
          <div className={classes.reasonItem}>
            <img
              src="https://shop.thuviencokhi.com/wp-content/uploads/2018/06/icon-chat-luong.png"
              alt="Cam kết chất lượng"
            />

            <h3>Cam kết chất lượng</h3>
            <p>
              Sản phẩm được sản xuất theo tiêu chuẩn chất lượng cao, từ khâu lựa
              chọn nguyên liệu đến quy trình sản xuất.
            </p>
          </div>

          <div className={classes.reasonItem}>
            <img
              src="https://png.pngtree.com/png-vector/20220820/ourmid/pngtree-trends-icon-progress-improvement-statistics-vector-png-image_19615284.png"
              alt="Đảm bảo tiến độ"
            />
            <h3>Đảm bảo tiến độ</h3>
            <p>
              Đảm bảo tiến độ thi công nội thất mang đến sự hài lòng tuyệt đối
              cho khách hàng.
            </p>
          </div>

          <div className={classes.reasonItem}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSih6zRW6t7eGW-5Yv84jK4IJQh-NQBO_uyNQ&s"
              alt="Tận tâm với gia chủ"
            />
            <h3>Tận tâm với gia chủ</h3>
            <p>
              Luôn lắng nghe và thấu hiểu mong muốn của khách hàng để mang đến
              không gian sống lý tưởng nhất.
            </p>
          </div>

          <div className={classes.reasonItem}>
            <img
              src="https://oneled.vn/wp-content/uploads/2020/03/icon-bao-hanh.png"
              alt="Bảo hành dài hạn"
            />
            <h3>Bảo hành dài hạn</h3>
            <p>
              Chính sách bảo hành dài hạn, hỗ trợ khách hàng tận tình, chu đáo,
              giúp khách hàng an tâm khi sử dụng sản phẩm của Hoàng Gia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
