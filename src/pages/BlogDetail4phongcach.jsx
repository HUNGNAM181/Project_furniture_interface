import classes from "./BlogDetail4phongcach.module.css";

function BlogDetail4phongcach() {
  return (
    <div className={classes.blogDetail4phongcach}>
      <section>
        <div className={classes.introSection}>
          <h2 className={classes.mainTitle}>
            04 Phong cách Thiết kế Nội thất Phổ biến và được ưa chuộng nhất tại
            Việt Nam, bao gồm:
          </h2>
          <ol className={classes.styleList}>
            <li className={classes.styleItem}>Phong cách Hiện đại (Modern)</li>
            <li className={classes.styleItem}>
              Phong cách Đông Dương (Indochine)
            </li>
            <li className={classes.styleItem}>
              Phong cách Tối giản (Minimalism)
            </li>
            <li className={classes.styleItem}>
              Phong cách Tân Cổ điển (Neo Classical)
            </li>
          </ol>
        </div>

        <div className={`${classes.styleSection} ${classes.modernStyle}`}>
          <h2 className={classes.sectionTitle}>PHONG CÁCH HIỆN ĐẠI (MODERN)</h2>
          <p className={classes.sectionDescription}>
            Phong cách <strong>thiết kế nội thất</strong> hiện đại là phong cách
            gồm những đường thẳng và tập trung nhắm vào chức năng, hạn chế những
            phụ kiến quá mức và các yếu tố trang trí từ nhiều phong cách khác.
          </p>
          <p className={classes.sectionDescription}>
            Khuôn mẫu tạo dựng phong cách này chính là sự chính xác, không có
            những hậu cảnh phức tạp, không có sự kết hợp màu sắc cầu kì, khối
            hình học cơ bản được sử dụng đó là vuông, chữ nhật, trònvới bề mặt
            sắc nét, không trang trí, không khắc viền. Mỗi chi tiết đều được đơn
            giản hóa một cách tối đa để phù hợp với nhu cầu sử dụng
          </p>
          <div className={classes.characteristicsBox}>
            <p className={classes.characteristicsTitle}>Đặc điểm nhận dạng:</p>
            <ul className={classes.characteristicsList}>
              <li className={classes.characteristicItem}>
                Những đường thẳng sạch sẽ
              </li>
              <li className={classes.characteristicItem}>
                Màu sắc trung tính (Trắng, Be, Nâu, Đen) hoặc sử dụng màu theo
                Tone
              </li>
              <li className={classes.characteristicItem}>
                Đồ đạc được đánh bóng
              </li>
              <li className={classes.characteristicItem}>
                Chức năng trước hình thức
              </li>
              <li className={classes.characteristicItem}>
                Tránh những yếu tố trang trí rườm rà
              </li>
              <li className={classes.characteristicItem}>
                Tối thiểu việc sử dụng kết cấu
              </li>
              <li className={classes.characteristicItem}>
                Cân bằng không đối xứng trong nội thất và các bố trí.
              </li>
            </ul>
          </div>
          <img
            className={classes.styleImage}
            src="https://mediabcb.mediatech.vn/upload/image/202308/medium/108144_phong_khach_voi_thiet_ke_noi_that_hien_dai_sang_trong_09350517.jpg"
            alt="nội thất hiện đại"
          />
        </div>

        <div className={`${classes.styleSection} ${classes.indochineStyle}`}>
          <h2 className={classes.sectionTitle}>Phong cách Indochine là gì?</h2>
          <p className={classes.sectionDescription}>
            Indochine hay còn được biết đến với tên gọi phong cách Đông Dương.
            Phong cách Indochine là sự kết hợp từ kiến trúc Tân cổ của Pháp cùng
            nét văn hóa truyền thống đậm chất Việt Nam. Đúng như tên gọi, kiến
            trúc Indochine mang đậm dấu ấn Đông Dương xưa.
          </p>
          <p className={classes.sectionDescription}>
            Trong giai đoạn đầu, các kiến trúc sư Pháp đem kiến trúc Tân cổ đến
            Việt Nam. Nhưng qua quá trình phát triển, các kiến trúc sư đã "thuần
            Việt" phong cách này nhằm phù hợp với điều kiện khí hậu và tập quán
            của Việt Nam. Từ đây phong cách Đông Dương hay Indochine Style được
            ra đời. Hiện nay Việt Nam vẫn còn lưu giữ rất nhiều công trình lịch
            sử mang phong cách Indochine như Dinh Độc Lập, Nhà Hát Lớn Hà Nội…
          </p>
          <img
            className={classes.styleImage}
            src="https://atlanticdesign.vn/wp-content/uploads/2021/06/thiet-ke-chung-cu-ngoai-giao-doan-01.jpg"
            alt="Phong cách Indochine"
          />
        </div>

        <div className={`${classes.styleSection} ${classes.minimalismStyle}`}>
          <h2 className={classes.sectionTitle}>
            PHONG CÁCH TỐI GIẢN (MINIMALISM)
          </h2>
          <p className={classes.sectionDescription}>
            Phong cách Minimalism nghĩa là sử dụng những đường nét đơn giản,
            thật ít chi tiết, giảm thiểu đồ nội thất, mọi chi tiết đều có lý
            trong vị trí của mình.
          </p>
          <p className={classes.sectionDescription}>
            Việc <strong>thiết kế nội thất</strong> theo phong cách Minimalism
            hướng sự chú ý đến những đường nét và kết cấu được ẩn giấu bên dưới.
            Các mảng tường, sàn và hiệu quả ánh sáng trên các mặt phẳng này
            chính là những yếu tố quan trọng làm nên phong cách tối giản. Sử
            dụng những đường nét đơn giản và sự kết hợp có tính toán của các mặt
            phẳng, không gian nội thất theo phong cách này là một tổng thể thống
            nhất, chặt chẽ về bố cục và nhất là giữ lại được một không gian kiến
            trúc đẹp, thoáng đãng, rộng rãi.
          </p>
          <img
            className={classes.styleImage}
            src="https://mozax.com.vn/wp-content/uploads/2024/05/nha-phong-cach-hien-dai-toi-gian.png"
            alt="nội thất PHONG CÁCH TỐI GIẢN"
          />
          <div className={classes.characteristicsBox}>
            <p className={classes.characteristicsTitle}>Đặc điểm nhận dạng</p>
            <ul className={classes.characteristicsList}>
              <li className={classes.characteristicItem}>
                Sử dụng màu sắc hạn chế: Thông thường, có không quá ba màu trong
                không gian nội thất theo phong cách này: một màu nền, một màu
                chủ đạo và một màu nhấn.
              </li>
              <li className={classes.characteristicItem}>
                Các mảng tường trắng được sử dụng rất phổ biến như một phông nền
                trơn nhằm tăng giá trị các đồ đạc xung quanh, đồng thời mang lại
                hiệu quả thị giác về một không gian rộng rãi hơn, thoáng đãng
              </li>
              <li className={classes.characteristicItem}>
                Ánh sáng được xem như một thành phần trang trí quan trọng để tạo
                ra các hiệu ứng thị giác và thẩm mỹ
              </li>
              <li className={classes.characteristicItem}>
                Các thành phần trong <strong>thiết kế nội thất</strong> cũng như
                vật dụng, bàn ghế được sử dụng ở mức độ tối giản, vừa đáp ứng
                nhu cầu sử dụng, vừa phải có yếu tố thẩm mỹ.
              </li>
            </ul>
          </div>
          <div className={classes.suitableFor}>
            <p className={classes.characteristicsTitle}>Phù hợp với</p>
            <ul className={classes.characteristicsList}>
              <li className={classes.characteristicItem}>Thiết kế văn phòng</li>
              <li className={classes.characteristicItem}>
                Các căn hộ có diện tích nhỏ
              </li>
              <li className={classes.characteristicItem}>
                Những người thích ngăn nắp, tự do và phóng khoáng
              </li>
            </ul>
          </div>
        </div>

        <div className={`${classes.styleSection} ${classes.neoclassicalStyle}`}>
          <h2 className={classes.sectionTitle}>PHONG CÁCH TÂN CỔ ĐIỂN</h2>
          <p className={classes.sectionDescription}>
            Phong cách thiết kế tân cổ điển chính là sự kết hợp hài hòa giữa cổ
            điển mà hiện đại. Phong cách này chú trọng đến chi tiết trang trí
            cầu kỳ, những đường cong mềm mại, kết hợp với những đường phào chỉ
            của tường và trần nhà. Phong cách <strong>thiết kế nội thất</strong>{" "}
            Tân cổ điển rất được ưa chuộng bởi sự sang trọng, thời thượng của
            nó.
          </p>
          <div className={classes.characteristicsBox}>
            <p className={classes.characteristicsTitle}>Đặc điểm nhận dạng:</p>
            <ul className={classes.characteristicsList}>
              <li className={classes.characteristicItem}>
                Chất liệu cao cấp: Phong cách tân cổ điển rất chuộng chất liệu
                da, gỗ, đá hoa cương. Chúng được chế tác rất cầu kì để mang lại
                vẻ sáng bóng cho không gian, thể hiện đẳng cấp của chủ nhân ngôi
                nhà.
              </li>
              <li className={classes.characteristicItem}>
                Màu sắc sang trọng quý phái: Phổ biến nhất trong
                <strong>thiết kế nội thất</strong>
                phong cách này là tông màu tối như đen, đỏ booc-đô hay xám, rêu
              </li>
              <li className={classes.characteristicItem}>
                Hoa văn – họa tiết cầu kỳ chạm khắc tinh xảo
              </li>
              <li className={classes.characteristicItem}>
                Tập trung vào các mảng tường; dùng hệ thống phào chỉ tạo mảng
                miếng phân chia không gian
              </li>
            </ul>
          </div>
          <p className={classes.sectionDescription}>
            Phù hợp với: Các khu biệt thự hoặc chung cư cao cấp, có không gian
            rộng
          </p>
          <img
            className={classes.styleImage}
            src="https://anviethouse.vn/wp-content/uploads/2022/01/Thiet-ke-noi-that-tan-co-dien-1-1.jpg"
            alt="PHONG CÁCH TÂN CỔ ĐIỂN"
          />
        </div>
      </section>
    </div>
  );
}

export default BlogDetail4phongcach;
