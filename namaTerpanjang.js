let nama1 = "SilviNazmaLiaGunawan"
let nama2 = "MuhamadRizkyFadilah"

let jumlah_nama1 = nama1.replace(/\s/g, '').length;
let jumlah_nama2 = nama2.replace(/\s/g, '').length;

if (jumlah_nama1 == jumlah_nama2){
    console.log("Kedua Nama Juamlahnya Sama");
} else if (jumlah_nama1 > jumlah_nama2){
    console.log(" Nama", nama1 + " Lebih panjang dari " + nama2);
} else if (jumlah_nama2 > jumlah_nama1){
    console.log(" Nama", nama2 + " Lebih panjang dari " + nama1);
}