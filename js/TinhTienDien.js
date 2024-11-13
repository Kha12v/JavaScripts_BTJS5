/**
Viết chương trình nhập vào thông tin tiêu thụ điện (Tên + Số Kw)
Tính và xuất tiền trả theo quy tắc:
- 50Kw đầu: 500d/Kw
- 50Kw kế: 650d/Kw
- 100Kw kế: 850d/Kw
- 150Kw kế: 1100d/Kw
- Còn lại: 1300d/Kw
Input:
- Lấy thông tin từ input nhập vào: Họ tên + Sô kw
Progressing:
- Kiểm tra nếu không nhập số Kw hợp lệ
- Tính tiền điện dựa theo quy tắc
Output:
- Hiển thị kết uquả ra màn hình: Họ tên + Số tiền phải trả
 */
/**______________________________________ */
function TinhTienDien() {
    //Lấy thông tin từ input nhập vào: Họ tên + Sô kw
    const hoTen = document.getElementById("NhapHoTen").value;
    const soKw = parseFloat(document.getElementById("NhapSoKW").value);

    //Kiểm tra nếu không nhập số Kw hợp lệ
    if (isNaN(soKw) || soKw < 0) {
        document.getElementById("result-TienDien").innerText = "Vui lòng nhập số Kw hợp lệ!";
        return;
    }
    let tienDien = 0;
    let kwConLai = soKw;

    //Tính tiền điện dựa theo quy tắc
    if (kwConLai > 0) {
        let kw = Math.min(kwConLai, 50);
        tienDien += kw * 500;
        kwConLai -= kw;
    }

    if (kwConLai > 0) {
        let kw = Math.min(kwConLai, 50);
        tienDien += kw * 650;
        kwConLai -= kw;
    }

    if (kwConLai > 0) {
        let kw = Math.min(kwConLai, 100);
        tienDien += kw * 850;
        kwConLai -= kw;
    }

    if (kwConLai > 0) {
        let kw = Math.min(kwConLai, 150);
        tienDien += kw * 1100;
        kwConLai -= kw;
    }

    if (kwConLai > 0) {
        tienDien += kwConLai * 1300;
    }

     // Hiển thị kết quả
     document.getElementById("result-TienDien").innerText = `Họ & Tên: ${hoTen}, Tiền điện: ${tienDien.toLocaleString()} VNĐ`;
}