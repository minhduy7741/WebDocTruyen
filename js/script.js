document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const listTruyen = document.querySelector(".list_truyen");
  const truyenItems = document.querySelectorAll(".truyen");
  let currentIndex = 0;
  const totalItems = truyenItems.length;
  const itemsToShow = 5;
  const itemWidth = 100 / itemsToShow;
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  function showItems(index) {
    const offset = -index * itemWidth;
    listTruyen.style.transform = `translateX(${offset}%)`;
  }

  function showNext() {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    showItems(currentIndex);
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - itemsToShow;
    }
    showItems(currentIndex);
  }

  nextButton.addEventListener("click", showNext);
  prevButton.addEventListener("click", showPrev);

  // Tự động chuyển mục truyện
  setInterval(showNext, 3000);

  document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const listTruyen = document.querySelector(".list_truyen");
    const truyenItems = document.querySelectorAll(".truyen");
    const xemThemButton = document.querySelector(".xem_them");
    const itemsPerPage = 20; // Số lượng truyện mỗi trang
    let currentPage = 1; // Trang hiện tại
    const totalItems = truyenItems.length;

    function showItems(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      truyenItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    function showNext() {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        showItems(currentPage);
        updatePaginationButtons();
      }
    }

    function showPrev() {
      if (currentPage > 1) {
        currentPage--;
        showItems(currentPage);
        updatePaginationButtons();
      }
    }

    function updatePaginationButtons() {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      if (currentPage === 1) {
        prevButton.style.display = "none";
      } else {
        prevButton.style.display = "block";
      }
      if (currentPage === totalPages) {
        nextButton.style.display = "none";
      } else {
        nextButton.style.display = "block";
      }
    }

    function handleXemThem() {
      showNext();
    }

    nextButton.addEventListener("click", showNext);
    prevButton.addEventListener("click", showPrev);
    xemThemButton.addEventListener("click", handleXemThem);

    // Hiển thị trang đầu tiên ban đầu
    showItems(currentPage);
    updatePaginationButtons();
  });

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("menu-open");
  });
});
