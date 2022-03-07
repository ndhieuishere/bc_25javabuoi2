// bài 1
// * Đầu vào
//  *  - Tạo biến n = lương ngày làm
//  *    Tạo thẻ input bên index số ngày làm > dom thẻ input đó gọi đó là X
//  * Xử lý:
//   luong = x*n
//  *
//  * Đầu ra: hiển thị kq
//  */

document.getElementById("btnKetQuaBai1").onclick = function () {
  var soNgay = document.getElementById("txtNgaylam").value*1;
  var luongNgayLam = 100000;
  var ketQua = soNgay * luongNgayLam;
  var luongNhanDuoc = "Luong Nhan Duoc La" + ketQua;
  console.log(luongNhanDuoc);
  document.getElementById("ketQuaBai1").innerHTML= luongNhanDuoc;
};

// bài 2
// * Đầu vào
//  *  - Tạo biến a,b,c,d,e = giá trị số thực
// tạo input cho 5 số thực với id a b c d e > dom sang
//  *
//  * Xử lý:
//   giá trị trung bình = (a+b+c+d+e)/5
//  *
//  * Đầu ra: hiển thị kq
//  */

document.getElementById("btnKetQuaBai2").onclick = function () {
  var a = document.getElementById("NumA").value*1;
  var b = document.getElementById("NumB").value*1;
  var c = document.getElementById("NumC").value*1;
  var d = document.getElementById("NumD").value*1;
  var e = document.getElementById("NumE").value*1;
  var giaTriTrungBinh = (a + b + c + d + e) / 5;
  var ketQua = "Day La Ket Qua" + giaTriTrungBinh;
  console.log(ketQua);
  document.getElementById("ketQuaBai2").innerHTML= ketQua;
};

// bài 3
// * Đầu vào
//  *  1usd=23.500
//  *  a=usd,b=23.500;
//  tạo thẻ input để nhập vào usd = a > dom qua main js
//  * Xử lý:
//    quydoi=a*b
//  *
//  * Đầu ra: hiển thị kq
//  */

document.getElementById("btnKetQuaBai3").onclick = function () {
  var USD = document.getElementById("USDNumBer").value*1;
  var VND = 23.5;
  var ketQua = USD * VND;
  var quyDoi = "Day la ket qua" + ketQua;
  console.log(quyDoi);
  document.getElementById("ketQuaBai3").innerHTML= quyDoi;
};

// bài 4
// * Đầu vào
//  *  a=chieu dai hcn
//  *  b=chieu rong hcn
//  * Xử lý:
// tạo 2 input chiều dài và chiều rộng, 2 button S và P
// S và P đều sd chung 2 input chiều dài và chiều rộng chỉ khác biến S và P
//    S=a*b
//    P=(a+b)*2
//  *
//  * Đầu ra: hiển thị kq
//  */
document.getElementById("btnKetQuaBai4-S").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value*1;
  var chieuRong = document.getElementById("chieuRong").value*1;
  var ketQua = "S=" + chieuDai * chieuRong;
  console.log(ketQua);
  document.getElementById("S").innerHTML= ketQua;
};

document.getElementById("btnKetQuaBai4-P").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = "P="+(chieuDai + chieuRong) * 2;
  console.log(chuVi);
  document.getElementById("P").innerHTML= chuVi;
};

// bài 5
// * Đầu vào
//  * a=12
//  * Xử lý:
// tạo input nhập số bất kì 2 chữ số >dom
//   hang dv = 12%10
//   hang chuc = 12/10
//  *
//  * Đầu ra: hiển thị kq
//  */
 
document.getElementById("btnKetQuaBai5").onclick = function(){
    var so2ChuSo=document.getElementById("txtNumber").value*1;
    var Number1 = so2ChuSo%10;
    var Number2 = Math.floor (so2ChuSo % 100 / 10);
    var Tong2So = Number1+Number2;
    var ketQua = "day la ket qua" + Tong2So;
    console.log(ketQua);
    document.getElementById("ketQuaBai5").innerHTML= ketQua;
}