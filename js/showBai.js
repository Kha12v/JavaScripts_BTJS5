function showBai(baiNumber) {
    // Ẩn tất cả các bài tập
    const baiTaps = document.querySelectorAll('.bai-tap');
    baiTaps.forEach(baiTap => {
        baiTap.classList.remove('active');
    });
    // Hiển thị bài tập được chọn
    document.getElementById("bai" + baiNumber).classList.add("active");

    // Reset tất cả các nút tab và icon về trạng thái mặc định
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button, index) => {
        button.classList.remove('active');
        document.getElementById(`icon${index + 1}`).className = 'closed-book';
    });

    // Làm nổi bật nút tab và icon của bài được chọn
    tabButtons[baiNumber - 1].classList.add('active');
    document.getElementById(`icon${baiNumber}`).className = 'open-book';
}

// Tự động chọn bài tập 1 khi trang tải lại
document.addEventListener("DOMContentLoaded", function () {
    showBai(1);
});