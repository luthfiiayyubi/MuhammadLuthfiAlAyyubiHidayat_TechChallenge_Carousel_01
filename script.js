// menyimpan posisi slide saat ini
let index = 0;
// mengambil container slides
const slides = $(".slides");
// menghitung jumlah total gambar
const total = $(".slides img").length;
// mengurangi 1 karena slide terakhir adalah clone
const realTotal = total - 1;

// tombol next
$("#next").click(function () {
  // setiap click next, index bertambah
  index++;
  // memberi animasi slide
  slides.css("transition", "0.5s");
  slides.css("transform", "translateX(-" + index * 100 + "%)");

  // kalo udah sampe clone
  if (index == realTotal) {
    //  tunggu animasi selesai dulu
    setTimeout(() => {
      // matikan animasi
      slides.css("transition", "none");
      index = 0;
      slides.css("transform", "translateX(0)");
    }, 600);
  }
});
// tombol prev
$("#prev").click(function () {
  // jika di slide pertama
  if (index == 0) {
    // lompat ke clone dulu
    slides.css("transition", "none");
    index = realTotal;
    slides.css("transform", "translateX(-" + index * 100 + "%)");
    // baru jalankan prev lagu biar keliatan natural
    setTimeout(() => {
      $("#prev").click();
    }, 10);
    return;
  }
  // jika bukan di slide pertama, index berkurang
  index--;
  // aktifkan animasi geser
  slides.css("transition", "0.5s");
  slides.css("transform", "translateX(-" + index * 100 + "%)");
});

// auto slide
setInterval(() => {
  $("#next").click();
}, 6000);
