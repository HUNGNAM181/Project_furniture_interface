import React from "react";
import classes from "./Bedroom.module.css";

function BedRoom() {
  return (
    <section className={classes.bedroomSection}>
      <div className={classes.container}>
        <header className={classes.heroSection}>
          <h1 className={classes.mainTitle}>
            Mẫu thiết kế nội thất phòng ngủ đẹp, hiện đại xu hướng 2025
          </h1>
          <p className={classes.introText}>
            Xu hướng thiết kế nội thất phòng ngủ năm 2025 đã có nhiều thay đổi
            mới, phá bỏ các giới hạn cũ, hướng những phong cách thiết kế nội
            thất mới, không gian sống sang trọng và hiện đại hơn. Giữa hàng loạt
            lựa chọn hấp dẫn, Là Nhà sẽ giúp bạn tìm kiếm được mẫu thiết kế
            phòng ngủ chung cư ưng ý nhất. Cùng tham khảo ngay những gợi ý lý
            tưởng sau để làm mới không gian sống của mình nhé!
          </p>
        </header>

        <div className={classes.contentSection}>
          {/* Phòng ngủ cho vợ chồng */}
          <article className={classes.categorySection}>
            <div className={classes.categoryHeader}>
              <h2 className={classes.categoryTitle}>
                Mẫu thiết kế phòng ngủ cho vợ chồng
              </h2>
              <p className={classes.categoryDescription}>
                Phòng ngủ cho vợ chồng là không gian quan trọng để họ thể hiện
                tình cảm và sự ăn ý. Khi thiết kế phòng ngủ cho vợ chồng, bạn
                cần chú ý đến các yếu tố sau:
              </p>
              <div className={classes.tipsList}>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🎨</span>
                  <span>
                    Gam màu trang trí nên chọn những màu trung tính, nhẹ nhàng,
                    không quá sặc sỡ hoặc quá tối.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🛏️</span>
                  <span>
                    Giường ngủ nên đơn giản để tạo cảm giác rộng rãi, thoải mái.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🚪</span>
                  <span>
                    Tủ quần áo nên cánh lùa, 2 bên giường là 2 tab gỗ được đặt
                    song song, liền kề bàn trang điểm, để tạo không gian sang
                    trọng và tiện nghi.
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.imageGallery}>
              <div className={classes.galleryGrid}>
                <div className={classes.imageItem}>
                  <img
                    src="https://noithatmanhhe.vn/media/26188/21-vach-op-nem-gon-song.jpg"
                    alt="Mẫu thiết kế phòng ngủ cho vợ chồng"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://noithatmanhhe.vn/media/26183/16-tham-trang-tri-phong-ngu.jpg"
                    alt="Mẫu thiết kế phòng ngủ cho vợ chồng"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://noithatlacgia.com/wp-content/uploads/2022/01/thiet-ke-noi-that-biet-thu-times-garden-vinh-yen-co-thi-10.jpg"
                    alt="Mẫu thiết kế phòng ngủ cho vợ chồng"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://kdesign.vn/wp-content/uploads/2023/03/mau-thiet-ke-phong-ngu-dep-cho-vo-chong-3.jpg"
                    alt="Mẫu thiết kế phòng ngủ cho vợ chồng"
                    className={classes.bedroomImage}
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Phòng ngủ cho nam */}
          <article
            className={`${classes.categorySection} ${classes.alternateLayout}`}
          >
            <div className={classes.imageGallery}>
              <div className={classes.galleryGrid}>
                <div className={classes.imageItem}>
                  <img
                    src="https://noithatmanhhe.vn/media/26193/26-tu-quan-ao-ket-hop-ke-trang-tri.jpg?width=700&height=427.65625&rmode=boxpad"
                    alt="Mẫu thiết kế phòng ngủ cho nam"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://www.lanha.vn/wp-content/uploads/2023/08/decor-phong-ngu-nam-2-1.jpg.webp"
                    alt="Mẫu thiết kế phòng ngủ cho nam"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://hoaphatgiasi.vn/wp-content/uploads/2021/10/phong-ngu-cho-nam-1-e1634464609143.png"
                    alt="Mẫu thiết kế phòng ngủ cho nam"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://anviethouse.vn/wp-content/uploads/2023/03/Thiet-ke-noi-that-phong-ngu-dep-1-1.jpg"
                    alt="Mẫu thiết kế phòng ngủ cho nam"
                    className={classes.bedroomImage}
                  />
                </div>
              </div>
            </div>
            <div className={classes.categoryHeader}>
              <h2 className={classes.categoryTitle}>
                Mẫu thiết kế nội thất phòng ngủ cho nam
              </h2>
              <p className={classes.categoryDescription}>
                Phòng ngủ cho nam giới là không gian quan trọng để họ thể hiện
                cá tính và sở thích. Khi thiết kế phòng ngủ cho nam giới, bạn
                cần chú ý đến các yếu tố sau:
              </p>
              <div className={classes.tipsList}>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🪑</span>
                  <span>
                    Đồ nội thất nên tối giản, bao gồm giường, tủ quần áo và tab
                    đầu giường.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🎨</span>
                  <span>
                    Gam màu trang trí nên chọn những màu trung tính hoặc đơn sắc
                    để mang lại cảm giác rộng rãi, thoáng đãng cho phòng ngủ.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>📚</span>
                  <span>
                    Kệ âm tường nên được bố trí để đồ trên cao để tiết kiệm diện
                    tích phòng ngủ.
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Phòng ngủ cho nữ */}
          <article className={classes.categorySection}>
            <div className={classes.categoryHeader}>
              <h2 className={classes.categoryTitle}>
                Mẫu nội thất phòng ngủ đẹp và nữ tính cho nữ
              </h2>
              <p className={classes.categoryDescription}>
                Không gian phòng ngủ là nơi thể hiện cá tính và sở thích của chủ
                nhân. Đối với phòng ngủ dành cho nữ, những gam màu pastel, màu
                sáng, hoặc những màu trung tính trang nhã là lựa chọn phổ biến.
                Những màu sắc này không chỉ tạo nên một bầu không khí dịu dàng,
                thanh lịch, mà còn giúp phòng ngủ trở nên rộng rãi và sáng sủa
                hơn.
              </p>
            </div>
            <div className={classes.imageGallery}>
              <div className={classes.galleryGrid}>
                <div className={classes.imageItem}>
                  <img
                    src="https://www.lanha.vn/wp-content/uploads/2023/07/phong-ngu-dep-cho-nu-20.jpg.webp"
                    alt="Mẫu nội thất phòng ngủ đẹp và nữ tính cho nữ"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://phongthinhdoor.com/wp-content/uploads/2023/04/Nguyen-tac-khi-thiet-ke-phong-ngu-cho-nu.jpg"
                    alt="Mẫu nội thất phòng ngủ đẹp và nữ tính cho nữ"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://thietkenhadepaau.com/wp-content/uploads/2022/05/phong-ngu-dep-cho-nu-1.jpg"
                    alt="Mẫu nội thất phòng ngủ đẹp và nữ tính cho nữ"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://xhomesg.com.vn/wp-content/uploads/2024/08/Thiet-ke-phong-ngu-phong-cach-co-dien-1.jpg"
                    alt="Mẫu nội thất phòng ngủ đẹp và nữ tính cho nữ"
                    className={classes.bedroomImage}
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Phòng ngủ cho ông bà */}
          <article
            className={`${classes.categorySection} ${classes.alternateLayout} ${classes.elderlySection}`}
          >
            <div className={classes.imageGallery}>
              <div className={classes.galleryGrid}>
                <div className={classes.imageItem}>
                  <img
                    src="https://decordi.vn/wp-content/uploads/2021/06/9.5-Phong-ngu-dep-moc-mac-dem-lai-giac-ngu-ngon-cho-gia-chu-noi-that-Decordi.jpg"
                    alt="Mẫu thiết kế nội thất phòng ngủ cho ông bà"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://decordi.vn/wp-content/uploads/2021/07/noi-that-phong-ngu-ong-ba-1.jpg"
                    alt="Mẫu thiết kế nội thất phòng ngủ cho ông bà"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://decordi.vn/wp-content/uploads/2021/07/giuong-ngu-cho-ong-ba-1.jpg"
                    alt="Mẫu thiết kế nội thất phòng ngủ cho ông bà"
                    className={classes.bedroomImage}
                  />
                </div>
                <div className={classes.imageItem}>
                  <img
                    src="https://menoithat.vn/wp-content/uploads/2023/11/phong-ngu-ong-ba-3.jpg"
                    alt="Mẫu thiết kế nội thất phòng ngủ cho ông bà"
                    className={classes.bedroomImage}
                  />
                </div>
              </div>
            </div>
            <div className={classes.categoryHeader}>
              <h2 className={classes.categoryTitle}>
                Mẫu thiết kế nội thất phòng ngủ cho ông bà
              </h2>
              <p className={classes.categoryDescription}>
                Phòng ngủ cho người lớn tuổi là không gian quan trọng để họ nghỉ
                ngơi và chăm sóc sức khỏe. Khi thiết kế phòng ngủ cho người lớn
                tuổi, bạn cần chú ý đến các yếu tố sau:
              </p>
              <div className={classes.tipsList}>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🪵</span>
                  <span>
                    Giường ngủ nên làm từ chất liệu gỗ tự nhiên, có tính năng ấm
                    áp, thoải mái và thấm hút tốt.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🎨</span>
                  <span>
                    Gam màu trang trí nên chọn những màu trung tính như xám, be,
                    nâu nhạt,… để mang lại cảm giác nhẹ nhàng và yên tĩnh.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>☀️</span>
                  <span>
                    Ánh sáng tự nhiên nên được tận dụng phù hợp để giúp người
                    lớn tuổi ngăn ngừa những bệnh thoái hóa.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🏠</span>
                  <span>
                    Phòng ngủ của người lớn tuổi nên đặt ở vị trí yên tĩnh, sạch
                    sẽ, thoáng mát, thường là tầng 1 để tránh phải leo cầu thang
                    và té ngã.
                  </span>
                </div>
                <div className={classes.tipItem}>
                  <span className={classes.tipIcon}>🏢</span>
                  <span>
                    Sàn phòng ngủ nên bằng phẳng, lát bằng vật liệu gỗ mềm, có
                    độ dẻo cao để tạo cảm giác nhẹ nhàng và ít ma sát.
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BedRoom;
