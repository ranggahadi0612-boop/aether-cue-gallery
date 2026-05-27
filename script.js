function tambahKeranjang(nama, harga, gambar){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let produkAda = cart.find(item => item.nama === nama);

    if(produkAda){
        produkAda.jumlah += 1;
    }else{
        cart.push({
            nama: nama,
            harga: harga,
            gambar: gambar,
            jumlah: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produk berhasil masuk ke keranjang");
}