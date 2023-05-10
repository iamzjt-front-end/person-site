let arr1 = [
  { id: 1234, code: 1, type: "TYPE1" },
  { id: 1235, code: 2, type: "TYPE2" },
  { id: 1236, code: 3, type: "TYPE3" },
  { id: 1237, code: 4, type: "TYPE4" },
  { id: 1238, code: 5, type: "TYPE5" },
  { id: 1239, code: 6, type: "TYPE6" },
  { id: 1240, code: 7, type: "TYPE7" },
  { id: 1241, code: 8, type: "TYPE8" },
  { id: 1242, code: 9, type: "TYPE9" },
  { id: 1243, code: 10, type: "TYPE10" }
];

let arr2 = [
  { code: 1, title: "title" },
  { code: 2, title: "title" },
  { code: 3, title: "title" },
  { code: 4, title: "title" },
];
//其中arr2是arr1的子集，且arr2里的code都会在arr1中出现
console.time("优化前执行时间");
let list_1 = arr1.map(item => {
  let title;
  arr2.forEach(i => {
    if (i.code === item.code) title = i.title;
  });
  return {
    title: title,
    type: item.type,
    id: item.id
  };
});
console.timeEnd("优化前执行时间");

console.time("优化后执行时间");
let codeTitleMap = new Map(
  arr2.map(({ code, title }) => [code, title])
);

let list_2 = arr1.map((code, ...args) => ({
  title: codeTitleMap.get(code),
  ...args
}));
console.timeEnd("优化后执行时间");
