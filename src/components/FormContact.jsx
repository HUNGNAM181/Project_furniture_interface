import classes from "./FormContact.module.css";

function FormContact() {
  return (
    <section id="contact-form" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.cta}>
          <div className={classes.formWrapper}>
            <h2 className={classes.heading}>
              Nội Thất Hoàng Gia – Hiện thực hóa mọi giấc mơ
            </h2>
            <p className={classes.subheading}>
              Liên hệ với chúng tôi để thực hiện dự án của bạn!
            </p>
            <form className={classes.form} action="">
              <div className={classes.formGroup}>
                <label htmlFor="full-name">Họ và tên</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  name="full-name"
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="phone-number">Số điện thoại</label>
                <input
                  id="phone-number"
                  type="number"
                  placeholder="Nhập số điện thoại của bạn"
                  name="phone-number"
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Nhập email của bạn"
                  name="email"
                  required
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="selected-service">Dịch vụ quan tâm</label>
                <select required name="selected-service" id="selected-service">
                  <option value="">--Chọn dịch vụ--</option>
                  <option value="phong_khach">Nội thất phòng khách</option>
                  <option value="phong_ngu">Nội thất phòng ngủ</option>
                  <option value="phong_bep">Nội thất phòng bếp</option>
                  <option value="phong_tre_em">Nội thất phòng trẻ em</option>
                </select>
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="note">Ghi chú</label>
                <input
                  id="note"
                  type="text"
                  placeholder="Nội dung cần ghi chú của bạn"
                  name="note"
                  required
                />
              </div>
              <button className={classes.submitButton}>Gửi liên hệ</button>
            </form>
          </div>
          <div className={classes.imageWrapper}>
            <img
              src="/phong_khach/7.jpg"
              alt="Ảnh nội thất"
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormContact;
