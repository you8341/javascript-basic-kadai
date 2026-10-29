const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() +1;
const day = today.getDate(); 

// 本日の日付を出力
console.log(year + '年' + month + '月' + day + '日');