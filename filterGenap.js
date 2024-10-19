let arr = [3, 7, 8, 5, 9, 2, 10, 17, 18];
let hasil = [0];

for( let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0 ){
        hasil.push(arr[i])
    }
}
hasil.sort(function(a,b) {
    return a - b;
});
  

console.log("Angka genap adalah : " + hasil);
