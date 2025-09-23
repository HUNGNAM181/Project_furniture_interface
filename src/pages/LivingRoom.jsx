import React from "react";
import classes from "./LivingRoom.module.css";

function LivingRoom() {
  return (
    <section className={classes.livingRoomSection}>
      <div className={classes.container}>
        <header className={classes.heroSection}>
          <h1 className={classes.mainTitle}>
            Mẫu thiết kế nội thất phòng khách đẹp, hiện đại 2025
          </h1>
          <p className={classes.introText}>
            Phòng khách là nơi thể hiện rõ cá tính và phong cách thẩm mỹ riêng
            của gia chủ. Chính vì vậy, việc kiến tạo một không gian phòng khách
            không chỉ đáp ứng đầy đủ công năng mà còn phải đẹp và phong cách
            luôn là mục tiêu mà nhiều người hướng đến. Hiện nay có rất nhiều
            phong cách thiết kế nội thất, từ tối giản đến cổ điển, mộc mạc… Ý
            tưởng trang trí phòng khách là vô hạn. Tại đây hãy khám phá top các
            mẫu thiết kế nội thất phòng khách đẹp, hiện đại và sang trọng… để
            thể hiện nét tinh tế và "gu" thẩm mỹ của riêng bạn!
          </p>
        </header>

        <div className={classes.contentSection}>
          <article className={classes.principlesSection}>
            <h2 className={classes.sectionTitle}>
              Nguyên tắc thiết kế nội thất phòng khách đẹp, giá rẻ
            </h2>
            <p className={classes.sectionDescription}>
              Có nhiều phong cách thiết kế nội thất chung cư mini đẹp… theo các
              xu hướng hiện đại được ưa chuộng hiện nay. Tuy nhiên có một vài
              lưu ý khi lựa chọn các thiết kế mà Là Nhà muốn chia sẻ đến các bạn
              nhằm để không gian sống của bạn thêm hoàn hảo hơn.
            </p>
          </article>

          <div className={classes.guidelinesSection}>
            {/* Diện tích phòng khách */}
            <article className={classes.guidelineItem}>
              <div className={classes.guidelineContent}>
                <h3 className={classes.guidelineTitle}>
                  Diện tích của phòng khách nhỏ hay lớn
                </h3>
                <p className={classes.guidelineDescription}>
                  Nội thất phòng khách đòi hỏi sự thông thoáng, thoải mái nhưng
                  cần phải đảm bảo sự hài hòa, cân đối với diện tích ngôi nhà.
                  Chú ý tiết chế không gian quá lớn sẽ tạo cảm giác lạnh lẽo,
                  mất cân đối và rời rạc hoặc quá chật hẹp đồ nội thất. Diện
                  tích phòng khách hợp lý sẽ làm gia tăng công năng sử dụng và
                  đem lại một không gian thoải mái, thư giãn đầy năng lượng cho
                  chủ nhà.
                </p>
              </div>
              <div className={classes.guidelineImage}>
                <img
                  src="https://milihome.vn/wp-content/uploads/2024/12/Corona_Camera008.0000-1-1024x763.jpg"
                  alt="Hình ảnh phòng khách lớn"
                  className={classes.livingRoomImage}
                />
              </div>
            </article>

            {/* Trang trí nội thất */}
            <article className={classes.guidelineItem}>
              <div className={classes.guidelineImage}>
                <img
                  src="https://milihome.vn/wp-content/uploads/2024/10/Liv-01-1024x1024.jpg"
                  alt="Trang trí nội thất phòng khách hợp lý"
                  className={classes.livingRoomImage}
                />
              </div>
              <div className={classes.guidelineContent}>
                <h3 className={classes.guidelineTitle}>
                  Trang trí nội thất phòng khách hợp lý
                </h3>
                <p className={classes.guidelineDescription}>
                  Thiết kế nội thất phòng khách chắc chắn không thể bỏ qua các
                  món đồ nội thất. Dưới đây là các sản phẩm được xem là linh hồn
                  và tạo điểm nhấn nổi bật cho phòng khách. Đồng thời, còn giúp
                  căn nhà trở nên trang trọng và có sức hút hơn.
                </p>
                <div className={classes.furnitureList}>
                  <h4 className={classes.furnitureTitle}>
                    Các món nội thất cần thiết:
                  </h4>
                  <div className={classes.furnitureGrid}>
                    <div className={classes.furnitureItem}>
                      <span className={classes.furnitureIcon}>🛋️</span>
                      <span>Sofa</span>
                    </div>
                    <div className={classes.furnitureItem}>
                      <span className={classes.furnitureIcon}>🏺</span>
                      <span>Kệ tủ trang trí</span>
                    </div>
                    <div className={classes.furnitureItem}>
                      <span className={classes.furnitureIcon}>📺</span>
                      <span>Kệ tivi</span>
                    </div>
                    <div className={classes.furnitureItem}>
                      <span className={classes.furnitureIcon}>💡</span>
                      <span>Đèn trang trí</span>
                    </div>
                    <div className={classes.furnitureItem}>
                      <span className={classes.furnitureIcon}>☕</span>
                      <span>Bàn trà</span>
                    </div>
                  </div>
                </div>
                <p className={classes.additionalInfo}>
                  Việc bài trí nội thất cần hài hòa, cân đối và đảm bảo chức
                  năng sử dụng của nó theo từng khu vực. Đối với phòng khách có
                  diện tích nhỏ có thể cân nhắc chọn nội thất sofa đa năng vừa
                  đem lại tiện ích sử dụng vừa tiết kiệm diện tích phòng.
                </p>
              </div>
            </article>

            {/* Ánh sáng tự nhiên */}
            <article className={classes.guidelineItem}>
              <div className={classes.guidelineContent}>
                <h3 className={classes.guidelineTitle}>
                  Bố trí ánh sáng tự nhiên trong phòng khách
                </h3>
                <p className={classes.guidelineDescription}>
                  Ánh sáng tự nhiên vừa đủ sẽ đem lại sự thông thoáng, dễ chịu
                  và gần gũi với thiên nhiên hơn. Theo các kiến trúc sư của Là
                  Nhà, thiết kế cửa chính, cửa sổ, cửa thông gió sử dụng chất
                  liệu kính trong suốt là cách đem ánh sáng vào phòng tốt nhất.
                  Tuy nhiên để giảm bớt cường độ ánh sáng quá mạnh có thể sử
                  dụng màng che hoặc rèm vải với tông màu trung tính.
                </p>
              </div>
              <div className={classes.guidelineImage}>
                <img
                  src="https://vinhtuong.com/sites/default/files/inline-images/phong-khach-dep-100.jpg"
                  alt="Hình ảnh có ánh sáng tự nhiên"
                  className={classes.livingRoomImage}
                />
              </div>
            </article>
          </div>

          {/* Mẫu thiết kế */}
          <div className={classes.designSection}>
            <h2 className={classes.sectionTitle}>
              Mẫu thiết kế nội thất phòng khách đẹp đơn giản 2025
            </h2>
            <p className={classes.sectionDescription}>
              Thiết kế nội thất phòng khách tùy theo sở thích của mỗi nhà nhưng
              đảm bảo phải hài hòa, cân xứng với diện tích ngôi nhà. Dưới đây là
              một vài xu hướng thiết kế được rất nhiều khách hàng của Là Nhà ưa
              chuộng, đem lại không gian thoáng đãng nhưng hiện đại mà bạn có
              thể tham khảo:
            </p>

            <div className={classes.designSamples}>
              {/* Mẫu 1: Không gian mở */}
              <article className={classes.sampleItem}>
                <div className={classes.sampleContent}>
                  <h3 className={classes.sampleTitle}>
                    Mẫu 1: Nội thất phòng khách thiết kế theo không gian mở
                  </h3>
                  <p className={classes.sampleDescription}>
                    Không gian phòng khách rộng, thoáng đãng là điều mà mọi nhà
                    điều mong muốn có được khi thực hiện thiết kế. Một không
                    gian mở, thoáng và nhiều ánh sáng sẽ giúp bạn cảm thấy thư
                    giãn, thoải mái hơn từ đó sẽ tạo nguồn năng lượng sống tích
                    cực. Tạo không gian mở cho các thiết kế phòng khách đẹp được
                    ưa chuộng với loại hình nhà ở phổ biến tại Việt Nam hiện
                    nay.
                  </p>
                </div>
                <div className={classes.sampleImage}>
                  <img
                    src="https://kientrucmaigia.vn/wp-content/uploads/2025/02/thiet-ke-noi-that-phong-khach-lien-bep-khong-gian-mo-hien-dai.jpg"
                    alt="Nội thất phòng khách thiết kế theo không gian mở"
                    className={classes.livingRoomImage}
                  />
                </div>
              </article>

              {/* Mẫu 2: Đồ gỗ */}
              <article className={`${classes.sampleItem} ${classes.reverse}`}>
                <div className={classes.sampleImage}>
                  <img
                    src="https://anviethouse.vn/wp-content/uploads/2021/04/Thiet-ke-noi-that-biet-thu-go-oc-cho-3-3.jpg"
                    alt="Thiết kế nội thất phòng khách bằng đồ gỗ"
                    className={classes.livingRoomImage}
                  />
                </div>
                <div className={classes.sampleContent}>
                  <h3 className={classes.sampleTitle}>
                    Mẫu 2: Thiết kế nội thất phòng khách bằng đồ gỗ
                  </h3>
                  <p className={classes.sampleDescription}>
                    Gỗ là chất liệu có độ bền tốt với thời gian và giúp cho nội
                    thất của bạn thêm sang trọng hơn. Đây được xem là chất liệu
                    truyền thống tạo ra những thiết kế nội thất phòng khách đơn
                    giản nhưng cực kỳ sang trọng và ấm áp. Các gam màu gỗ nhẹ
                    thường là chọn tối ưu đem đến sự thanh lịch và sang trọng
                    cho các nội thất phòng khách.
                  </p>
                </div>
              </article>

              {/* Mẫu 3: Màu trung tính */}
              <article className={classes.sampleItem}>
                <div className={classes.sampleContent}>
                  <h3 className={classes.sampleTitle}>
                    Mẫu 3: Thiết kế nội thất phòng khách đơn giản với gam màu
                    trung tính
                  </h3>
                  <p className={classes.sampleDescription}>
                    Để tạo cảm giác yên bình, không gian thanh lịch không quá
                    phô trương thì nội thất phòng khách với gam màu trung tính
                    là lựa chọn được ưu tiên. Các gam màu như trắng, xám, ghi,
                    be… sẽ làm nổi bật các sản phẩm nội thất và tạo điểm nhấn
                    cho phòng khách. Màu trung tính cũng là màu giúp các thiết
                    kế nội thất phòng khách sang trọng và thể hiện gu thẩm mỹ
                    của chủ nhà.
                  </p>
                </div>
                <div className={classes.sampleImage}>
                  <img
                    src="https://www.lanha.vn/wp-content/uploads/2023/08/thiet-ke-noi-that-phong-khach-65.jpeg.webp"
                    alt="Thiết kế nội thất phòng khách đơn giản với gam màu trung tính"
                    className={classes.livingRoomImage}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LivingRoom;
