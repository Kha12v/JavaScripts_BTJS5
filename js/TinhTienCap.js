/**Sử dụng event onchange của dropdown để xử lý ẩn hiện cho ô nhập 
 số kết nối khi chọn loại khách hàng: Onchange <select onchange="myFunction()">
Đối với loại khách hàng Doanh Nghiệp, tổng 10 kết nối đầu là 75$
=> đây là giá trọn gói, nếu doanh nghiệp lắp đặt số kết nối nhỏ hơn 10
 thì vẫn phải đóng 75$.
Vd: 6 kết nối thì vẫn sẽ cộng 75$ vào tổng tiền.
=> Nếu lắp trên 10 kết nối thì kết nối thứ 11 trở đi 
sẽ tính 5$/kết nối. 
Viết chương trình tính hóa đơn khách hàng cho một công ty cáp. Có 2 loại khách hàng:
Nhà dân và doanh nghiệp. Có 2 mức giá tính tiền cáp:
1. Nhà dân:
• Phí xử lý hóa đơn: 4.5$
• Phí dịch vụ cơ bản: 20.5$
• Thuê kênh cao cấp: 7.5$ / kênh
2. Doanh nghiệp
• Phí xử lý hóa đơn: 15$
• Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối
• Thuê kênh cao cấp: 50$ / kênh
❖ Chương trình cho phép nhập vào Mã khách hàng, loại khách hàng, số kết nối, số kênh
cao cấp. Nếu chọn loại khách hàng là Doanh nghiệp ô nhập số kết nối sẽ hiện lên, nếu
chọn loại khách hàng là nhà dân thì ô nhập kết nối sẽ ẩn đi hoặc disabled
*/

/**___________________________________ */
// Hàm xử lý khi thay đổi loại khách hàng
function myFunction() {
    var loaiKH = document.getElementById("LoaiKH").value;
    var inputKetNoi = document.getElementById("inputKetNoi");

    // Nếu chọn loại khách hàng là "Doanh Nghiệp", hiển thị ô nhập số kết nối
    if (loaiKH === "B") {
        inputKetNoi.style.display = "block"; // Hiển thị ô nhập số kết nối
    } else {
        inputKetNoi.style.display = "none"; // Ẩn ô nhập số kết nối
    }
}

// Hàm tính tiền cáp
function TinhTienCap() {
    var loaiKH = document.getElementById("LoaiKH").value;
    var maKH = document.getElementById("MaKH").value;
    var kenhCaoCap = parseInt(document.getElementById("KenhCaoCap").value);
    var resultText = "";
    var total = 0;

    // Kiểm tra loại khách hàng và tính tiền tương ứng
    if (loaiKH === "A") {
        // Nhà Dân
        var phiXuLyHoaDon = 4.5;
        var phiDichVuCoBan = 20.5;
        var phiKenhCaoCap = kenhCaoCap * 7.5;

        total = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
        resultText = `Mã khách hàng: ${maKH} <br>Loại khách hàng: Nhà Dân <br>Tổng tiền: $${total.toFixed(2)}`;
    } else if (loaiKH === "B") {
        // Doanh Nghiệp
        var phiXuLyHoaDon = 15;
        var phiDichVuCoBan = 75; // Phí dịch vụ cơ bản cho 10 kết nối đầu
        var soKetNoi = parseInt(document.getElementById("SoKetNoi").value);
        
        // Kiểm tra số kết nối để tính tiền
        if (soKetNoi <= 10) {
            total = phiXuLyHoaDon + phiDichVuCoBan;
        } else {
            var ketNoiThem = soKetNoi - 10;
            total = phiXuLyHoaDon + phiDichVuCoBan + (ketNoiThem * 5); // Mỗi kết nối thêm tính 5$
        }

        var phiKenhCaoCap = kenhCaoCap * 50;

        total += phiKenhCaoCap;
        resultText = `Mã khách hàng: ${maKH} <br>Loại khách hàng: Doanh Nghiệp <br>Số kết nối: ${soKetNoi} <br>Tổng tiền: $${total.toFixed(2)}`;
    } else {
        resultText = "Vui lòng chọn loại khách hàng.";
    }

    // Hiển thị kết quả tính tiền
    document.getElementById("result-TinhTienCap").innerHTML = resultText;
}
