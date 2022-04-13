## Array.filter
```js
const scores = [10,20,30,40];

const newScores = scores.filter((value) => {
  return value >= 30;
});

/* 簡略化して */
const newScores = scores.filter(value => value >= 30);

console.log(newScores);
```

## Array.find
```js
const members = ['Honda', 'Kagawa', 'Nagatomo'];

const member = members.find(value => value === 'Nagatomo');

console.log(member);
```

## Array.map  配列を元に新しい配列をつくる
```js
const userList = [10,20,30,40];
```
## テンプレート文字列 `${}` バッククォート
```js
const userIdList = userList.map(value => {
  return `user_${value}`;
});

/* 簡略化して */
const userIdList = userList.map(value => `user_${value}`);

console.log(userIdList);
console.table(userList); // テーブルで表示される
```