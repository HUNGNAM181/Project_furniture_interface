import { useState } from "react";
import classes from "./SignupForm.module.css";

import LoginForm from "./LoginForm";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isVisible, setIsVisible] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
    // Xử lý đăng ký ở đây
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleLogin = () => {
    // Chuyển sang form đăng nhập
    setShowLogin(true);
  };

  if (!isVisible) return null;

  // 👉 Nếu bấm chuyển sang đăng nhập thì render LoginForm
  if (showLogin) {
    return <LoginForm />;
  }

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContainer}>
        {/* Header */}
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>Đăng ký</h2>
          <button onClick={handleClose} className={classes.closeButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={classes.registerForm}>
          {/* Full Name Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Họ và tên</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Email Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ email của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Phone Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Password Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Xác nhận mật khẩu của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className={classes.registerButton}>
            Đăng ký
          </button>
        </form>

        {/* Login Link */}
        <div className={classes.modalFooter}>
          <p className={classes.loginText}>
            Bạn đã có tài khoản?{" "}
            <button onClick={handleLogin} className={classes.loginLink}>
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
