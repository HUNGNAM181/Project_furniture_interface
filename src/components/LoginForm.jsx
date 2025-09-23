import React, { useState } from "react";
import classes from "./LoginForm.module.css";

import RegisterForm from "./SignupForm";

const LoginForm = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    console.log("Redirect to forgot password");
  };

  const handleSocialLogin = (platform) => {
    console.log(`Login with ${platform}`);
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContainer}>
        {/* Header */}
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>Đăng nhập</h2>
          <button onClick={onClose} className={classes.closeButton}>
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

        {/* Subtitle */}
        <div className={classes.modalSubtitle}>
          <p>Đăng nhập để trải nghiệm dịch vụ của Nội thất Hoàng Gia</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={classes.loginForm}>
          {/* Email Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ email của bạn"
              className={classes.formInput}
              required
            />
          </div>

          {/* Password Field */}
          <div className={classes.formGroup}>
            <label className={classes.formLabel}>Mật khẩu</label>
            <div className={classes.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu của bạn"
                className={`${classes.formInput} ${classes.passwordInput}`}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={classes.passwordToggle}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className={classes.formOptions}>
            <label className={classes.checkboxContainer}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={classes.checkboxInput}
              />
              <span className={classes.checkboxText}>Ghi nhớ đăng nhập</span>
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className={classes.forgotPassword}
            >
              Quên mật khẩu?
            </button>
          </div>

          {/* Login Button */}
          <button type="submit" className={classes.loginButton}>
            Đăng nhập
          </button>
        </form>

        {/* Register Link */}
        <div className={classes.modalFooter}>
          <p className={classes.registerText}>
            Bạn chưa có tài khoản?{" "}
            <button
              onClick={onSwitchToRegister}
              className={classes.registerLink}
            >
              Đăng ký ngay
            </button>
          </p>

          {/* Social Login */}
          <div className={classes.socialLogin}>
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className={`${classes.socialButton} ${classes.facebook}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button
              onClick={() => handleSocialLogin("Google")}
              className={`${classes.socialButton} ${classes.google}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>
            <button
              onClick={() => handleSocialLogin("Microsoft")}
              className={`${classes.socialButton} ${classes.microsoft}`}
            >
              <div className={classes.microsoftIcon}>M</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
