// searchService.js - Dịch vụ tìm kiếm với dữ liệu chi tiết

// Dữ liệu chi tiết cho tìm kiếm
export const searchData = [
  {
    id: "home",
    title: "Trang chủ",
    path: "/",
    description:
      "Trang chủ của website thiết kế nội thất - Khám phá các dịch vụ thiết kế nội thất chuyên nghiệp",
    content:
      "trang chủ thiết kế nội thất dịch vụ chuyên nghiệp tư vấn miễn phí",
    keywords: [
      "trang chủ",
      "home",
      "thiết kế",
      "nội thật",
      "chuyên nghiệp",
      "tư vấn",
    ],
    category: "Trang chính",
  },
  {
    id: "about",
    title: "Giới thiệu",
    path: "/gioi-thieu",
    description:
      "Thông tin về công ty và dịch vụ thiết kế nội thất chuyên nghiệp",
    content:
      "giới thiệu công ty thiết kế nội thất kinh nghiệm chuyên nghiệp đội ngũ tư vấn",
    keywords: [
      "giới thiệu",
      "about",
      "công ty",
      "dịch vụ",
      "kinh nghiệm",
      "đội ngũ",
    ],
    category: "Thông tin",
  },
  {
    id: "blog",
    title: "Tin tức",
    path: "/tin-tuc",
    description: "Các bài viết và tin tức mới nhất về thiết kế nội thất",
    content: "tin tức blog bài viết thiết kế nội thất xu hướng mới nhất",
    keywords: ["tin tức", "blog", "bài viết", "news", "xu hướng", "mới nhất"],
    category: "Blog",
  },
  {
    id: "blog-4-style",
    title: "4 Phong cách thiết kế nội thất phổ biến",
    path: "/tin-tuc/4phongcach",
    description:
      "Tìm hiểu về 4 phong cách thiết kế nội thất phổ biến nhất hiện nay",
    content:
      "4 phong cách thiết kế nội thất phổ biến modern classic minimalist scandinavian",
    keywords: [
      "4 phong cách",
      "phong cách thiết kế",
      "modern",
      "classic",
      "minimalist",
      "scandinavian",
      "phổ biến",
    ],
    category: "Blog",
  },
  {
    id: "blog-tv-cabinet",
    title: "Kích thước kệ tủ TV chuẩn",
    path: "/tin-tuc/kichthuocketuTV",
    description:
      "Hướng dẫn chọn kích thước kệ tủ TV phù hợp với không gian phòng khách",
    content:
      "kích thước kệ tủ tv chuẩn hướng dẫn chọn phù hợp không gian phòng khách",
    keywords: [
      "kệ tủ tv",
      "kích thước",
      "tủ tv",
      "phòng khách",
      "hướng dẫn",
      "chuẩn",
    ],
    category: "Blog",
  },
  {
    id: "blog-romanticism",
    title: "Phong cách Romanticism trong thiết kế nội thất",
    path: "/tin-tuc/phongcachRomanticism",
    description: "Khám phá phong cách thiết kế Romanticism lãng mạn và tinh tế",
    content:
      "phong cách romanticism thiết kế nội thất lãng mạn tinh tế cổ điển",
    keywords: [
      "romanticism",
      "phong cách romantic",
      "lãng mạn",
      "tinh tế",
      "cổ điển",
    ],
    category: "Blog",
  },
  {
    id: "living-room",
    title: "Nội thất phòng khách",
    path: "/livingRoom",
    description:
      "Thiết kế và trang trí nội thất phòng khách hiện đại, sang trọng",
    content:
      "nội thất phòng khách thiết kế trang trí hiện đại sang trọng sofa bàn trà kệ tv",
    keywords: [
      "phòng khách",
      "living room",
      "sofa",
      "bàn trà",
      "kệ tv",
      "hiện đại",
      "sang trọng",
    ],
    category: "Nội thất",
  },
  {
    id: "bedroom",
    title: "Nội thất phòng ngủ",
    path: "/bedroom",
    description: "Thiết kế nội thất phòng ngủ ấm cúng và thư giãn",
    content:
      "nội thất phòng ngủ thiết kế ấm cúng thư giãn giường tủ quần áo bàn trang điểm",
    keywords: [
      "phòng ngủ",
      "bedroom",
      "giường",
      "tủ quần áo",
      "bàn trang điểm",
      "ấm cúng",
      "thư giãn",
    ],
    category: "Nội thất",
  },
  {
    id: "kitchen",
    title: "Nội thất phòng bếp",
    path: "/kitchen",
    description: "Thiết kế nội thất phòng bếp hiện đại và tiện nghi",
    content:
      "nội thất phòng bếp thiết kế hiện đại tiện nghi tủ bếp bếp từ máy hút mùi",
    keywords: [
      "phòng bếp",
      "kitchen",
      "tủ bếp",
      "bếp từ",
      "máy hút mùi",
      "hiện đại",
      "tiện nghi",
    ],
    category: "Nội thất",
  },
  {
    id: "children-room",
    title: "Nội thất phòng trẻ em",
    path: "/childrenBedRoom",
    description: "Thiết kế nội thất phòng trẻ em an toàn và sáng tạo",
    content:
      "nội thất phòng trẻ em thiết kế an toàn sáng tạo giường trẻ em bàn học tủ đồ chơi",
    keywords: [
      "phòng trẻ em",
      "children room",
      "giường trẻ em",
      "bàn học",
      "tủ đồ chơi",
      "an toàn",
      "sáng tạo",
    ],
    category: "Nội thất",
  },
  {
    id: "contact",
    title: "Liên hệ",
    path: "/lien-he",
    description: "Thông tin liên hệ và form gửi yêu cầu tư vấn thiết kế",
    content: "liên hệ tư vấn thiết kế form gửi yêu cầu hotline email địa chỉ",
    keywords: [
      "liên hệ",
      "contact",
      "tư vấn",
      "form",
      "hotline",
      "email",
      "địa chỉ",
    ],
    category: "Liên hệ",
  },
];

// Hàm tìm kiếm nâng cao
export function performSearch(query) {
  if (!query || query.trim() === "") {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  searchData.forEach((item) => {
    let score = 0;
    let matchedParts = [];

    // Tính điểm cho title (trọng số cao nhất)
    if (item.title.toLowerCase().includes(searchTerm)) {
      score += 10;
      matchedParts.push("title");
    }

    // Tính điểm cho keywords (trọng số cao)
    const keywordMatches = item.keywords.filter((keyword) =>
      keyword.toLowerCase().includes(searchTerm)
    );
    if (keywordMatches.length > 0) {
      score += keywordMatches.length * 7;
      matchedParts.push("keywords");
    }

    // Tính điểm cho description (trọng số trung bình)
    if (item.description.toLowerCase().includes(searchTerm)) {
      score += 5;
      matchedParts.push("description");
    }

    // Tính điểm cho content (trọng số thấp)
    if (item.content.toLowerCase().includes(searchTerm)) {
      score += 3;
      matchedParts.push("content");
    }

    // Tìm kiếm mờ (fuzzy search) cho các từ tương tự
    const fuzzyMatches = getFuzzyMatches(searchTerm, item);
    if (fuzzyMatches.length > 0) {
      score += fuzzyMatches.length * 2;
      matchedParts.push("fuzzy");
    }

    // Nếu có điểm số thì thêm vào kết quả
    if (score > 0) {
      results.push({
        ...item,
        score,
        matchedParts,
        relevance: getRelevanceLabel(score),
      });
    }
  });

  // Sắp xếp theo điểm số giảm dần
  return results.sort((a, b) => b.score - a.score);
}

// Tìm kiếm mờ cho các từ tương tự
function getFuzzyMatches(searchTerm, item) {
  const fuzzyKeywords = {
    "noi that": ["nội thất", "thiết kế"],
    "phong khach": ["phòng khách", "living room"],
    "phong ngu": ["phòng ngủ", "bedroom"],
    "phong bep": ["phòng bếp", "kitchen"],
    "tre em": ["trẻ em", "children"],
    "lien he": ["liên hệ", "contact"],
    "tin tuc": ["tin tức", "blog", "news"],
    "gioi thieu": ["giới thiệu", "about"],
  };

  const matches = [];
  for (const [key, values] of Object.entries(fuzzyKeywords)) {
    if (searchTerm.includes(key)) {
      values.forEach((value) => {
        if (
          item.content.toLowerCase().includes(value) ||
          item.title.toLowerCase().includes(value)
        ) {
          matches.push(value);
        }
      });
    }
  }
  return matches;
}

// Xác định mức độ liên quan
function getRelevanceLabel(score) {
  if (score >= 15) return "Rất liên quan";
  if (score >= 10) return "Liên quan";
  if (score >= 5) return "Có thể liên quan";
  return "Ít liên quan";
}

// Hàm gợi ý tìm kiếm
export function getSearchSuggestions(query) {
  const suggestions = [
    "nội thất phòng khách",
    "thiết kế phòng ngủ",
    "tủ bếp hiện đại",
    "phong cách minimalist",
    "kệ tủ tv",
    "giường trẻ em",
    "bàn trang điểm",
    "sofa phòng khách",
    "tủ quần áo",
    "phong cách romantic",
  ];

  if (!query) return suggestions.slice(0, 5);

  const filtered = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.length > 0 ? filtered : suggestions.slice(0, 5);
}
