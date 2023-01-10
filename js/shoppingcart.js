let tblmenu = [
    {idmenu:1,idkategori:1,menu:"Apel Malang",gambar:"apel.jpg",harga:3000},
    {idmenu:2,idkategori:2,menu:"Nasi Goreng",gambar:"nasigoreng.jpg",harga:10000},
    {idmenu:3,idkategori:2,menu:"Rendang",gambar:"rendang.jpg",harga:15000},
    {idmenu:4,idkategori:3,menu:"Es Teh",gambar:"esteh.jpg",harga:2000},
    {idmenu:5,idkategori:4,menu:"Es Buah",gambar:"esbuah.jpg",harga:7000},
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
      <img src="img/${kolom.gambar}" alt="" />
    </div>
    <div class="titel">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
      <h2>${kolom.harga}</h2>
    </div>
  </div>`;
})

let isi = document.querySelector(".produk");
isi.innerHTML=tampil;

console.log(tampil);