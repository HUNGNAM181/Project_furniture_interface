import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Header.module.css";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./SignupForm.jsx";

function Header() {
  const [showSubmenu, setShowSubMenu] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [signupForm, setSignupForm] = useState(false);

  const searchInputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchInputRef.current.value.trim();
    if (keyword !== "") {
      navigate(`/search?query=${encodeURIComponent(keyword)}`);
      searchInputRef.current.value = "";
    }
  };

  const handleShowLogin = () => {
    setSignupForm(false); // Tắt form đăng ký nếu đang mở
    setLoginForm(true); // Mở form đăng nhập
  };

  const handleShowRegister = () => {
    setLoginForm(false); // Tắt form đăng nhập nếu đang mở
    setSignupForm(true); // Mở form đăng ký
  };

  const handleCloseLogin = () => setLoginForm(false);
  const handleCloseRegister = () => setSignupForm(false);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" />
        </Link>
      </div>

      <nav className={classes.navbar}>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Link className={classes.link} to="/">
              Trang chủ
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link className={classes.link} to="/gioi-thieu">
              Giới thiệu
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link className={classes.link} to="/tin-tuc">
              Tin tức
            </Link>
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
                  <Link className={classes.submenuLink} to="/livingRoom">
                    Nội thất phòng khách
                  </Link>
                </li>
                <li className={classes.submenuItem}>
                  <Link className={classes.submenuLink} to="/bedroom">
                    Nội thất phòng ngủ
                  </Link>
                </li>
                <li className={classes.submenuItem}>
                  <Link className={classes.submenuLink} to="/kitchen">
                    Nội thất phòng bếp
                  </Link>
                </li>
                <li className={classes.submenuItem}>
                  <Link className={classes.submenuLink} to="/childrenBedRoom">
                    Nội thất phòng trẻ em
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={classes.menuItem}>
            <Link className={classes.link} to="/lien-he">
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>

      <div className={classes.headerActions}>
        <form className={classes.searchBox} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className={classes.searchInput}
            ref={searchInputRef}
          />
          <button type="submit" className={classes.searchButton}>
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
        </form>

        <div className={classes.authButtons}>
          <button
            className={`${classes.btn} ${classes.btnRegister}`}
            onClick={handleShowRegister}
          >
            Đăng ký
          </button>
          <button
            className={`${classes.btn} ${classes.btnLogin}`}
            onClick={handleShowLogin}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {signupForm && (
        <RegisterForm
          onClose={handleCloseRegister}
          onSwitchToLogin={() => {
            setSignupForm(false);
            setLoginForm(true);
          }}
        />
      )}

      {loginForm && (
        <LoginForm
          onClose={handleCloseLogin}
          onSwitchToRegister={() => {
            setLoginForm(false);
            setSignupForm(true);
          }}
        />
      )}
    </header>
  );
}

export default Header;
