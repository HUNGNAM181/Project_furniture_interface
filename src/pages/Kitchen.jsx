import React from "react";
import classes from "./Kitchen.module.css";

function Kitchen() {
  return (
    <section className={classes.kitchenSection}>
      <div className={classes.container}>
        <header className={classes.heroSection}>
          <h1 className={classes.mainTitle}>
            Mẫu thiết kế phòng bếp đẹp, hiện đại 2025
          </h1>
          <p className={classes.introText}>
            Xu hướng thiết kế phòng bếp hiện nay rất đa dạng. Gia chủ có thể
            chọn kiểu bếp không gian mở liền phòng khách, bố trí phòng bếp có
            bàn đảo, chọn các mẫu tủ bếp đẹp thông minh,… tùy theo sở thích. Tuy
            nhiên, điều quan trọng là cần cân nhắc các nguyên tắc về ánh sáng,
            màu sắc, thi công sàn,… để đảm bảo tổng thể hài hòa và mãn nhãn
            nhất. Cùng Là Nhà tham khảo một số mẫu thiết kế nội thất nổi bật để
            có thêm nhiều gợi ý lý tưởng nhé!
          </p>
        </header>

        <div className={classes.contentSection}>
          <h2 className={classes.sectionTitle}>
            Xu hướng thiết kế phòng bếp đẹp hiện đại được ưa chuộng hiện nay
          </h2>

          <div className={classes.designTrends}>
            {/* Open Kitchen Design */}
            <article className={classes.trendItem}>
              <div className={classes.trendContent}>
                <h3 className={classes.trendTitle}>
                  Thiết kế phòng khách liền bếp không gian mở
                </h3>
                <p className={classes.trendDescription}>
                  Trước đây, nhiều gia đình vẫn chọn kiểu bố trí nhà bếp ở những
                  khu vực kín đáo, thậm chí nằm khuất phía sau căn nhà. Tuy
                  nhiên, xu hướng thiết kế nội thất phòng khách và phòng bếp
                  hiện nay hướng đến không gian mở và đề cao tính thẩm mỹ. Phòng
                  khách liền bếp thu hút nguồn ánh sáng tự nhiên, tạo cảm giác
                  vô cùng rộng rãi và thông thoáng. Phong cách thiết kế phòng
                  bếp tối giản (phong cách minimalism) này sẽ giúp tổng thể căn
                  bếp trở nên khoáng đãng hơn, tránh tích tụ ẩm mốc cũng như mùi
                  hôi khó chịu gây ảnh hưởng đến sức khỏe. Ngoài ra, đây cũng là
                  ý tưởng thú vị để có thể quan sát căn bếp ở nhiều góc cạnh
                  khác nhau, càng làm tăng giá trị thẩm mỹ cho không gian sống.
                </p>
              </div>
              <div className={classes.trendImage}>
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2023/07/phong-khach-lien-bep-1-1.jpg.webp"
                  alt="Thiết kế phòng khách liền bếp không gian mở"
                  className={classes.kitchenImage}
                />
              </div>
            </article>

            {/* Kitchen Island Design */}
            <article className={`${classes.trendItem} ${classes.reverse}`}>
              <div className={classes.trendImage}>
                <img
                  src="https://www.lanha.vn/wp-content/uploads/2024/09/ban-dao-bep-24.jpg.webp"
                  alt="Thiết kế phòng bếp có bàn đảo hiện đại"
                  className={classes.kitchenImage}
                />
              </div>
              <div className={classes.trendContent}>
                <h3 className={classes.trendTitle}>
                  Thiết kế phòng bếp có bàn đảo hiện đại
                </h3>
                <p className={classes.trendDescription}>
                  Thiết kế phòng bếp có bàn đảo bếp được ưa chuộng bởi sự tiện
                  nghi và sang trọng. Theo kinh nghiệm của Là Nhà, gia chủ có
                  thể tận dụng làm nơi lưu trữ đồ đạc, đặt đồ ăn kết hợp làm bàn
                  ghế ăn cho gia đình hay quầy bar mini. Nhiều bàn đảo hiện đại
                  còn tích hợp bồn rửa bát đa năng hoặc cố định để không phải
                  chen chúc khi đông người cùng sử dụng. Đây được xem là phong
                  cách thiết kế nội thất hiện đại được yêu thích nhất hiện nay
                  cho những mẫu nhà bếp nhỏ đẹp đơn giản.
                </p>
              </div>
            </article>

            {/* Smart Kitchen Design */}
            <article className={`${classes.trendItem} ${classes.smartKitchen}`}>
              <div className={`${classes.trendContent} ${classes.fullWidth}`}>
                <h3 className={classes.trendTitle}>
                  Thiết kế phòng bếp có tủ bếp, bộ phụ kiện bếp thông minh
                </h3>
                <p className={classes.trendDescription}>
                  Trước đây, hầu hết các mẫu tủ bếp trên thị trường đều có kiểu
                  dáng tương tự nhau, với nhiều ngăn nhỏ để lưu trữ đồ dùng và
                  thiết bị nấu nướng. Ngày nay, thiết kế đã có thêm nhiều cải
                  tiến thông minh, giúp tận dụng tối đa không gian nhưng vẫn đảm
                  bảo tính thẩm mỹ.
                </p>

                <div className={classes.accessoriesGrid}>
                  <h4 className={classes.accessoriesTitle}>
                    Bộ phụ kiện bếp thông minh bao gồm:
                  </h4>
                  <div className={classes.accessoriesList}>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>🗑️</span>
                      <span>Thùng rác âm tủ</span>
                    </div>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>🍳</span>
                      <span>Kệ úp nồi</span>
                    </div>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>🧂</span>
                      <span>Kệ gia vị dao thớt chai lọ</span>
                    </div>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>🍽️</span>
                      <span>Kệ chén đĩa tủ dưới</span>
                    </div>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>🥄</span>
                      <span>Kệ chén đĩa tủ trên</span>
                    </div>
                    <div className={classes.accessoryItem}>
                      <span className={classes.accessoryIcon}>📐</span>
                      <span>Tủ bếp hình chữ L</span>
                    </div>
                  </div>
                </div>

                <p className={classes.brandInfo}>
                  Nội Thất Hoàng Gia đang cung cấp đầy đủ tất cả các phụ kiện kể
                  trên, thường tư vấn khách hàng sử dụng để tăng trải nghiệm
                  trong không gian phòng bếp.
                </p>
              </div>

              <div className={classes.smartKitchenGallery}>
                <div className={classes.galleryGrid}>
                  <img
                    src="https://s-housing.vn/wp-content/uploads/2017/07/tu-bep-thong-minh-3.png"
                    alt="Bộ phụ kiện bếp thông minh"
                    className={classes.galleryImage}
                  />
                  <img
                    src="https://s-housing.vn/wp-content/uploads/2017/07/tu-bep-thong-minh-35.jpeg"
                    alt="Bộ phụ kiện bếp thông minh"
                    className={classes.galleryImage}
                  />
                  <img
                    src="https://s-housing.vn/wp-content/uploads/2017/07/tu-bep-thong-minh-34.jpeg"
                    alt="Bộ phụ kiện bếp thông minh"
                    className={classes.galleryImage}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kitchen;
