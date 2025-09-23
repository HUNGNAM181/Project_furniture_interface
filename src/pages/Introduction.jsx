import classes from "./Introduction.module.css";

function Introduction() {
  return (
    <section className={classes.intro}>
      <div className={classes.header}>
        <h2 className={classes.title}>Về chúng tôi</h2>
        <h3 className={classes.subtitle}>
          Nội Thất Hoàng Gia là một đại gia đình
        </h3>
      </div>
      <div className={classes.mission}>
        <h3 className={classes.sectionTitle}>SỨ MỆNH</h3>
        <p className={classes.text}>
          Được thành lập từ năm 2023, Nội Thất Hoàng Gia hoạt động với sứ mệnh
          tạo ra các công trình khác biệt và sáng tạo thể hiện được phong cách
          riêng của gia chủ với sự chuyên nghiệp trong việc Mix & Match các
          phong cách nội thất. Ứng dụng kiến trúc trong thiết kế nội thất, các
          thiết kế của Nội Thất Hoàng Gia được đánh giá cao ở tính đơn giản
          thanh lịch nhưng vẫn sang trọng tinh tế đảm bảo công năng sử dụng.
        </p>
      </div>
      <div className={classes.story}>
        <div className={classes.card}>
          <h3 className={classes.sectionTitle}>Nội Thất Hoàng Gia</h3>
          <h4 className={classes.subheading}>Khẳng định phong cách sống</h4>
          <p className={classes.text}>
            Nội Thất Hoàng Gia mong muốn mỗi thiết kế của chúng tôi thực hiện sẽ
            toát lên được phong cách riêng, và “gu” thẩm mỹ của từng gia chủ.
            Mỗi một dự án nội thất chúng tôi luôn muốn truyền đến cảm hứng và sự
            trải nghiệm mới mẻ đến quý khách hàng.
          </p>
          <p className={classes.text}>
            Nội Thất Hoàng Gia chính là một đơn vị thiết kế uy tín giúp biến
            ngôi nhà mơ ước trong tâm trí quý khách thành hiện thực. Chúng tôi
            luôn nỗ lực hết mình để giúp quý khách hàng nâng tầm không gian sống
            hiện đại, sang trọng và vô cùng tiện nghi.{" "}
          </p>
        </div>
        <div className={classes.card}>
          <h4 className={classes.subheading}>
            Mang đến trải nghiệm sống tuyệt vời
          </h4>
          <p className={classes.text}>
            Nội Thất Hoàng Gia hướng đến mục tiêu không chỉ thiết kế nên những
            không gian chất lượng mà còn là một trải nghiệm sống tuyệt vời, ý
            nghĩa nhất. Sự thỏa mãn, hài lòng của quý khách hàng là mục tiêu
            xuyên suốt của chúng tôi. Được thấy nụ cười hài lòng của khách hàng
            là động lực để chúng tôi cố gắng mỗi ngày
          </p>
        </div>
      </div>
      <div className={classes.culture}>
        <h3 className={classes.sectionTitle}>VĂN HÓA NỘI THẤT HOÀNG GIA</h3>
        <div className={classes.cultureGrid}>
          <div className={classes.cultureItem}>
            <img
              src="https://hoanggiadesign.com.vn/wp-content/uploads/2022/10/icon1-1.png"
              alt="ảnh 3 người"
              className={classes.icon}
            />
            <p className={classes.text}>
              Đặt trọn tâm huyết vào dự án của khách hàng, xem nhà khách hàng
              như nhà của mình.Tư vấn và giải đáp thắc mắc của khách hàng nhanh
              chóng, thân thiện, chuyên nghiệp.
            </p>
          </div>
          <div className={classes.cultureItem}>
            <img
              src="https://hoanggiadesign.com.vn/wp-content/uploads/2022/10/icon2-1.png"
              alt="ảnh kim cương"
              className={classes.icon}
            />
            <p className={classes.text}>
              Minh bạch trong lời nói, hành động.Thẳng thắn chia sẻ, chân thành
              góp ý dựa trên lợi ích chung.
            </p>
          </div>
          <div className={classes.cultureItem}>
            <img
              src="https://hoanggiadesign.com.vn/wp-content/uploads/2022/10/icon3.png"
              alt="ảnh bóng đèn"
              className={classes.icon}
            />
            <p className={classes.text}>
              Tư duy học hỏi, trau dồi, cải thiện kỹ năng chuyên môn. Tìm hiểu &
              chấp nhận thử thách, sẵn sàng thử sức với những điều mới.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <p className={classes.highlight}>
          UY TÍN – HÀI LÒNG KHÁCH HÀNG LÀ TIÊU CHÍ HÀNG ĐẦU MÀ NỘI THẤT HOÀNG
          GIA LUÔN HƯỚNG ĐẾN
        </p>
      </div>
    </section>
  );
}
export default Introduction;
