// console.log('toNum', typeof Number('str')); // number

// console.log("Number(['1'])", Number(['1'])); // 1
// console.log("Number([''])", Number([''])); // 0
// console.log("Number(['1', '2'])", Number(['1', '2'])); // NaN
// console.log('Number([])', Number([])); // 0
// console.log('Number({})', Number({})); // NaN
// console.log('Number({})', Number({ 1: 1 })); // NaN

const numberSum = (...arg) =>
  arg.reduce((acc, item) => {
    if (typeof item === 'object') {
      return acc + numberSum(...Object.values(item));
    } else {
      return acc + (Number(item) || 0);
    }
  }, 0);

// console.log(numberSum());
// console.log(numberSum(1));
// console.log(numberSum(1, 1));
// console.log(numberSum('1', '1', '1'));
// console.log(numberSum('as', 5));
// console.log(numberSum('1', ['2', 2], 1));
// console.log(numberSum({ 1: 'q' }, ['4'], ['4', 'w'], 1));
// console.log(numberSum({ 1: 5, 2: 3 }, ['4'], 1));

const q = NaN == NaN; //false

console.log('q', !!-1);
