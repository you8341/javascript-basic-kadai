// 変数numの値を入力する
let num = 15;

// 変数numが3と5の倍数であれば、「3と5の倍数です」を出力する
if (num % 3 === 0 && num % 5 ===0) {
    console.log('3と5の倍数です');
// 変数numが3の倍数であれば、「3の倍数です」を出力する
} else if (num % 3 === 0) {
    console.log('3の倍数です');
// 変数numが5の倍数であれば、「5の倍数です」を出力する  
} else if (num % 5 === 0) {
    console.log('5の倍数です');
// 変数numがそれ以外の数字であれば、「変数numの値」を出力する
} else {
    console.log(num);
}