const firebaseConfig = {
    apiKey: "ISI_API_KEY",
    authDomain: "ISI_AUTH_DOMAIN",
    projectId: "ISI_PROJECT_ID",
    storageBucket: "ISI_STORAGE_BUCKET",
    messagingSenderId: "ISI_MESSAGING_ID",
    appId: "ISI_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
<script>
function simpanProduk(){
    let id = document.getElementById("produkId").value;

    let nama = document.getElementById("namaProduk").value;
    let harga = Number(document.getElementById("hargaProduk").value);
    let gambar = document.getElementById("gambarProduk").value;
    let kategori = document.getElementById("kategoriProduk").value;
    let spek = document.getElementById("spekProduk").value;

    let spesifikasi = spek.split(",").map(item => item.trim());

    let dataProduk = {
        nama: nama,
        harga: harga,
        gambar: gambar,
        kategori: kategori,
        spesifikasi: spesifikasi
    };

    if(id){
        db.collection("produk").doc(id).update(dataProduk);
        alert("Produk berhasil diedit");
    }else{
        db.collection("produk").add(dataProduk);
        alert("Produk berhasil ditambahkan");
    }

    document.getElementById("produkId").value = "";
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("gambarProduk").value = "";
    document.getElementById("spekProduk").value = "";
}

function tampilProdukOwner(){
    db.collection("produk").onSnapshot(snapshot => {
        let container = document.getElementById("daftarProdukOwner");
        container.innerHTML = "";

        snapshot.forEach(doc => {
            let item = doc.data();

            container.innerHTML += `
                <div class="owner-product">
                    <img src="${item.gambar}">

                    <div>
                        <h3>${item.nama}</h3>
                        <p>Rp ${item.harga.toLocaleString("id-ID")}</p>
                        <p>Kategori: ${item.kategori}</p>

                        <button onclick="editProduk(
                            '${doc.id}',
                            '${item.nama}',
                            ${item.harga},
                            '${item.gambar}',
                            '${item.kategori}',
                            '${item.spesifikasi.join(", ")}'
                        )">Edit</button>

                        <button onclick="hapusProduk('${doc.id}')">Hapus</button>
                    </div>
                </div>
            `;
        });
    });
}

function editProduk(id, nama, harga, gambar, kategori, spesifikasi){
    document.getElementById("produkId").value = id;
    document.getElementById("namaProduk").value = nama;
    document.getElementById("hargaProduk").value = harga;
    document.getElementById("gambarProduk").value = gambar;
    document.getElementById("kategoriProduk").value = kategori;
    document.getElementById("spekProduk").value = spesifikasi;
}

function hapusProduk(id){
    if(confirm("Yakin ingin hapus produk ini?")){
        db.collection("produk").doc(id).delete();
    }
}

tampilProdukOwner();
</script>