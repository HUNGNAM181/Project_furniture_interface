import { useLocation, Link } from "react-router-dom";
import classes from "./SearchPage.module.css";
import { pages } from "../../pagesData";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("query")?.toLowerCase() || "";

  const filteredPages = pages.filter((page) => {
    if (!keyword) return false;

    return (
      page.title.toLowerCase().includes(keyword) ||
      page.description.toLowerCase().includes(keyword) ||
      page.keywords.some((kw) => kw.toLowerCase().includes(keyword))
    );
  });

  // Hàm xử lý lỗi ảnh
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
  };

  if (!keyword) {
    return (
      <div className={classes.searchContainer}>
        <div className={classes.searchHeader}>
          <h1 className={classes.searchTitle}>Tìm kiếm</h1>
          <p className={classes.searchSubtitle}>
            Vui lòng nhập từ khóa để tìm kiếm nội dung.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchHeader}>
        <h1 className={classes.searchTitle}>
          Kết quả tìm kiếm cho:
          <span className={classes.keyword}>"{keyword}"</span>
        </h1>
        <p className={classes.resultCount}>
          {filteredPages.length > 0
            ? `Tìm thấy ${filteredPages.length} kết quả`
            : "Không tìm thấy kết quả nào"}
        </p>
      </div>

      {filteredPages.length > 0 ? (
        <div className={classes.resultsList}>
          {filteredPages.map((page) => (
            <div key={page.path} className={classes.resultCard}>
              <Link to={page.path} className={classes.resultLink}>
                <div className={classes.resultImageContainer}>
                  <img
                    src={page.image}
                    alt={page.title}
                    className={classes.resultImage}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className={classes.imageOverlay}>
                    <span className={classes.viewMore}>Xem chi tiết</span>
                  </div>
                </div>

                <div className={classes.resultContent}>
                  <h3 className={classes.resultTitle}>{page.title}</h3>
                  <p className={classes.resultDescription}>
                    {page.description}
                  </p>
                  <span className={classes.resultPath}>{page.path}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.noResults}>
          <div className={classes.noResultsIcon}>🔍</div>
          <h2 className={classes.noResultsTitle}>
            Không tìm thấy kết quả phù hợp
          </h2>
          <p className={classes.noResultsDescription}>
            Không có nội dung nào khớp với từ khóa <strong>"{keyword}"</strong>
          </p>

          <div className={classes.searchSuggestions}>
            <h3 className={classes.suggestionsTitle}>Gợi ý tìm kiếm:</h3>
            <ul className={classes.suggestionsList}>
              <li>Kiểm tra lại chính tả của từ khóa</li>
              <li>Thử sử dụng từ khóa khác hoặc tổng quát hơn</li>
              <li>
                Tìm kiếm theo danh mục: "nội thất", "thiết kế", "phòng khách"...
              </li>
            </ul>

            <div className={classes.popularKeywords}>
              <span className={classes.popularTitle}>Từ khóa phổ biến:</span>
              <div className={classes.popularTags}>
                {[
                  "nội thất",
                  "thiết kế",
                  "phòng khách",
                  "phòng ngủ",
                  "modern",
                ].map((tag, index) => (
                  <Link
                    key={index}
                    to={`?query=${encodeURIComponent(tag)}`}
                    className={classes.popularTag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
