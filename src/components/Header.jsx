import classes from "./Header.module.css";
import LoginForm from "./LoginForm.jsx";
import { useState } from "react";
import RegisterForm from "./SignupForm.jsx";

function Header() {
  const [showSubmenu, setShowSubMenu] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [signupForm, setSignupForm] = useState(false);

  const handlerShowlogin = () => {
    setLoginForm((prev) => !prev);
  };

  const handlerShowRegister = () => {
    setSignupForm((prev) => !prev);
  };

  // Function để scroll xuống form contact
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      // Lấy vị trí của element
      const elementPosition =
        contactForm.getBoundingClientRect().top + window.pageYOffset;
      // Trừ đi offset (ví dụ: 100px để không scroll quá)
      const offsetPosition = elementPosition - 90;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <img src="/logo.jpg" alt="Logo" />
        </a>
      </div>
      <nav className={classes.navbar}>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <a className={classes.link} href="#">
              Trang chủ
            </a>
          </li>
          <li className={classes.menuItem}>
            <a className={classes.link} href="#">
              Giới thiệu
            </a>
          </li>
          <li className={classes.menuItem}>
            <a className={classes.link} href="#">
              Tin tức
            </a>
          </li>

          <li
            className={`${classes.menuItem} ${classes.dropdown}`}
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <a className={`${classes.link} ${classes.dropdownToggle}`} href="#">
              Thiết kế nội thất
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={classes.dropdownIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>

            {showSubmenu && (
              <ul className={classes.submenu}>
                <li className={classes.submenuItem}>
                  <a className={classes.submenuLink} href="#">
                    Nội thất phòng khách
                  </a>
                </li>
                <li className={classes.submenuItem}>
                  <a className={classes.submenuLink} href="#">
                    Nội thất phòng ngủ
                  </a>
                </li>
                <li className={classes.submenuItem}>
                  <a className={classes.submenuLink} href="#">
                    Nội thất phòng bếp
                  </a>
                </li>
                <li className={classes.submenuItem}>
                  <a className={classes.submenuLink} href="#">
                    Nội thất phòng trẻ em
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className={classes.menuItem}>
            <a
              className={classes.link}
              href="#contact-form"
              onClick={handleContactClick}
            >
              Liên hệ
            </a>
          </li>
        </ul>
      </nav>

      {/* Header actions */}
      <div className={classes.headerActions}>
        {/* Search box */}
        <div className={classes.searchBox}>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className={classes.searchInput}
          />
          <button className={classes.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={classes.searchIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Auth buttons */}
        <div className={classes.authButtons}>
          <button
            className={`${classes.btn} ${classes.btnRegister}`}
            onClick={handlerShowRegister}
          >
            Đăng ký
          </button>
          <button
            className={`${classes.btn} ${classes.btnLogin}`}
            onClick={handlerShowlogin}
          >
            Đăng nhập
          </button>
        </div>
      </div>
      {signupForm && <RegisterForm />}
      {/* Hiển thị form đăng nhập */}
      {loginForm && <LoginForm />}
    </header>
  );
}

export default Header;
