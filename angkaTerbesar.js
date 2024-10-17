let arr = [2, 7, 5, 3, 8];
let angka_terbesar = arr[0];

for ( let i = 1; i < arr.length; i++){
    if ( arr[i] > angka_terbesar){
        angka_terbesar = arr[i]
    }
}

console.log("Angka terbesarnya adalah : " + angka_terbesar);
