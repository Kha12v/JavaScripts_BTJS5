/**
 Tính thuế thu nhập cá nhân
- Tổng thu nhập năm các bạn tự nhập thêm. Giả sử 1 tháng thu nhập 10tr thì 1 năm sẽ là 10 x 12 = 120tr => các bạn sẽ nhập 120000000
- Demo hiện tại đang tính % thuế theo điều kiện mà thu nhập chịu thuế rơi vào. Vd: thu nhập chịu thuế là 110tr thì tính 10% của 110tr => 110tr * 0.1
- Do đề bài không ghi rõ yêu cầu tính thuế nên cũng có thể tính theo cách chia ra từng đoạn thuế giống bài tính tiền grab. Vd: 110tr => 60tr *0.05 + (110tr-60tr) * 0.1
- Sử dụng input có type number thì khi nhập 120000000, có thể nhập ngắn gọn thành 120e+6
- Đối với các con số hàng triệu có nhiều số 0, có thể viết ngắn gọn trong code như sau:
4tr => 4000000 => 4e+6
- Dùng NumberFormat để số tiền hiển thị đẹp hơn: NumberFormat

Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số
người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau:
❖ Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
Thu nhập chịu thuế(triệu) 
Đến 60 => Thuế suất (%) 5
Trên 60 đến 120 => Thuế suất (%) 10
Trên 120 đến 210 => Thuế suất (%) 15
Trên 210 đến 384 => Thuế suất (%) 20
Trên 384 đến 624 => Thuế suất (%) 25
Trên 624 đến 960 =>Thuế suất (%) 30
Trên 960 => Thuế suất (%) 35
Input:
- Họ Tên, Tổng thu nhập năm, Số người phụ thuộc
Progressing:
- Kiểm tra nếu nhập số không hợp lệ
- Xử lí tính thu nhập chịu thuế
- Kiểm tra nếu thu nhập chịu thuế <= 0 thì không phải đóng thuế
- Xác định thuế suất theo thu nhập chịu thuế
- Tính thuế thu nhập cá nhân phải trả
Output:
- Hiển thị kết quả ra màn hình: Họ Tên, Tiền thuế thu nhập cá nhân
 */

/**____________________________________________________ */
function TinhThue() {
    // Lấy thông tin từ input: Họ Tên, Tổng thu nhập năm, Số người phụ thuộc\
    const hoTenT = document.getElementById("ThemHoTen").value;
    const tongThuNhap = parseFloat(document.getElementById("TongThuNhap").value);
    const soNguoiPhuThuoc = parseInt(document.getElementById("NguoiPhuThuoc").value);

    // Kiểm tra nếu nhập số không hợp lệ
    if (isNaN(tongThuNhap) || tongThuNhap < 0) {
        document.getElementById("result-TinhThue").innerText = "Vui lòng nhập tổng thu nhập năm hợp lệ!";
        return;
    }
    if (isNaN(soNguoiPhuThuoc) || soNguoiPhuThuoc < 0) {
        document.getElementById("result-TinhThue").innerText = "Vui lòng nhập số người phụ thuộc hợp lệ!";
        return;
    }

    //Xử lí tính thu nhập chịu thuế
    const thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
    //Kiểm tra nếu thu nhập chịu thuế <= 0 thì không phải đóng thuế
    if (thuNhapChiuThue <= 0) {
        document.getElementById("result-TinhThue").innerText = `Họ & Tên: ${hoTenT}, không phải đóng thuế.`;
        return;
    }
    // Biến lưu trữ thuế suất
    let thueSuat;
    // Xác định thuế suất theo thu nhập chịu thuế
    if (thuNhapChiuThue <= 60e6) {
        thueSuat = 0.05;
    } else if (thuNhapChiuThue <= 120e6) {
        thueSuat = 0.10;
    } else if (thuNhapChiuThue <= 210e6) {
        thueSuat = 0.15;
    } else if (thuNhapChiuThue <= 384e6) {
        thueSuat = 0.20;
    } else if (thuNhapChiuThue <= 624e6) {
        thueSuat = 0.25;
    } else if (thuNhapChiuThue <= 960e6) {
        thueSuat = 0.30;
    } else {
        thueSuat = 0.35;
    }
    // Tính thuế thu nhập cá nhân phải trả
    const thuePhaiTra = thuNhapChiuThue * thueSuat;

    // Hiển thị kết quả
    document.getElementById("result-TinhThue").innerText = `Họ & Tên: ${hoTenT}, Tiền thuế thu nhập cá nhân: ${thuePhaiTra.toLocaleString()} VND`;
}