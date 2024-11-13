/**
 Bài 1: Quản lý tuyển sinh
 Trong kỳ thi tuyển, 1 thí sinh sẽ trúng tuyển:
 => Nếu "điểm tổng kết" >= "điểm chuẩn" & "không có môn nào điểm 0"
   - Điểm chuẩn max = 30 
 => "Điểm tổng kết" = tổng điểm của 3 môn thi và điểm ưu tiên.
- Điểm ưu tiên theo:
=> "khu vực" & "đối tượng".   
Input: 
- Nhập điểm chuẩn,
- Nhập điểm 3 môn thi
- Chọn khu vực 
- Chọn đối tượng (nhập 0 nếu không thuộc đối tượng ưu tiên). \
Progressing:
- Kiểm tra khi nhập điểm chuẩn, điểm thi của từng môn
- Xử lí điểm ưu tiên của khu vực, đối tượng
- Tính điểm tổng kết
- Kiểm tra điều kiện đậu/rớt
Output:
- Show ra màn hình: thí sinh đó đậu hay rớt & tổng số điểm đạt được.

 💡Gợi ý:
- Điểm chuẩn của hội đồng các bạn tự nhập thêm. (Không được phép nhập số Âm)
- Điểm chuẩn của 3 môn thường tối đa 30đ. (Không được phép nhập số Âm)
Nên có thể lấy các điểm chuẩn như sau: 30,25,29
Ô nhập khu vực, đối tượng có thể tạo bằng input, dropdown hoặc radio.
Nếu không thuộc khu vực hoặc đối tượng trong danh sách thì điểm khu vực và điểm đối tượng sẽ là 0
Nếu có 1 trong 3 môn bị điểm 0 thì lập tức cho rớt không cần kiểm tra tổng điểm có lớn hơn hoặc bằng điểm chuẩn hay không
 */

/**___________________________________________________ */
function TinhDiemThi() {
  // Lấy dữ liệu từ các input
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value;

  //Điều kiện kiểm tra input được nhập vào
  //Kiểm tra khi nhập điểm chuẩn
  if (isNaN(diemChuan) || diemChuan < 0 || diemChuan > 30) {
    alert("Điểm chuẩn không hợp lệ. Vui lòng nhập điểm chuẩn từ 0 đến 30.");
    return;
  }
  //Kiểm tra khi nhập điểm thi của từng môn
  if (isNaN(diemMon1) || diemMon1 < 0 || diemMon1 > 10 ||
    isNaN(diemMon2) || diemMon2 < 0 || diemMon2 > 10 ||
    isNaN(diemMon3) || diemMon3 < 0 || diemMon3 > 10) {
    alert("Điểm các môn thi không hợp lệ. Vui lòng nhập điểm từ 0 đến 10 cho mỗi môn.");
    return;
  }

  //Xử lí điểm ưu tiên của khu vực
  let diemKhuVuc = 0;
  if (khuVuc === "A") diemKhuVuc = 2;
  else if (khuVuc === "B") diemKhuVuc = 1;
  else if (khuVuc === "C") diemKhuVuc = 0.5;

  //Xử lí điểm ưu tiên của đối tượng
  let diemDoiTuong = 0;
  if (doiTuong === "1") diemDoiTuong = 2.5;
  else if (doiTuong === "2") diemDoiTuong = 1.5;
  else if (doiTuong === "3") diemDoiTuong = 1;

  //Tính điểm tổng kết
  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

  //Kiểm tra điều kiện đậu/rớt
  let ketQua = "";
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    ketQua = "Rớt - Bạn có môn thi bị điểm 0.";
  } else if (tongDiem >= diemChuan) {
    ketQua = `Chúc mừng bạn Đậu Rồi - Tổng điểm đạt được: ${tongDiem}.`;
  } else {
    ketQua = `Bạn đã rớt! - Tổng điểm đạt được: ${tongDiem}.`;
  }

  // Hiển thị kết quả lên giao diện
  document.getElementById("result-diemthi").innerText = ketQua;
}