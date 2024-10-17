let arr = [3, 7, 8, 5, 9, 2];
let hasil = [0];

for( let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0 ){
        hasil.push(arr[i])
    }
}
console.log("Angka genap adalah : " + hasil);
