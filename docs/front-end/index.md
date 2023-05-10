# 归档

[对于一个常见优化问题的思考](./对于一个常见优化问题的思考.md)

```js
let arr1 = [
  { id: 1234, code: 1, type: "TYPE1" }
];

let arr2 = [
  { code: 1, title: "title" }
];
//其中arr2是arr1的子集，且arr2里的code都会在arr1中出现
// let list = arr1.map(item => {
//   let title
//   arr2.forEach(i => {
//     if(i.code === item.code) title = i.title
//   })
//   return {
//     title: title,
//     type: item.type,
//     id: item.id
//   }
// })

let codeTitleMap = new Map(
  arr2.map(({ code, title }) => [code, title])
);

let list = arr1.map((code, ...args) => ({
  title: codeTitleMap.get(code),
  ...args
}));
```
