// menampilkan informasi
alert("Hello, ini adalah program JS eksternal");

// dialog promt -> prompt()
// mengambil data
var nama = prompt("Siapa nama kamu ?", "");
if (nama) {
    document.write("<p>Hello " + nama + " !!!</p>");
} else {
    document.write("<p>Hello Kawan !!!</p>");
}

// dialog confirm -> confirm()
// jawaban konfirmasi
var yakin = confirm("Apakah kamu yakin akan mengunjungi petanikode ?");
if (yakin) {
    window.location = "https://petanikode.com";
} else {
    document.write("<p>Baiklah, tetap disini saja ya :)</p>");
}

document.write("Ini menampilkan kode JS dari external", "<br>");
document.write("file ini berada pada folder lain");
