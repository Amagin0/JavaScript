## Map オブジェクト
``` js
const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);

console.log(myMap.get('name'));

const valueList = myMap.values();

for (value of valueList) {
  console.log(value);
}
```

## Array オブジェクト
```js
const fruits = new Array();
const fruits = []; //シンタックスシュガー
```
```js
const fruits = [
  'apple', 'banana'
];

console.log(fruits);
```

## 配列の末尾に要素を追加
```js
fruits.push('orange');
console.log(fruits);
```

## コールバック関数
```js
fruits.forEach(function (input) {
  console.log(input);
});

```

一般的な関数の作り方
```js
function fruits() { }
```
### 名前がない関数を、**無名関数** や **匿名関数** と呼ぶ

## 関数の名前あり
```js
const getItem = () => {console.log('アロー')};
getItem();

/* さらに省略が可能 */
処理が1行なら{}を書かなくてもok

const getItem = () => console.log('アロー');

引数が１つなら()をかかなくてもok

const test = test => console.log('アロー)
```
## 関数の名前なし
```js
fruits.forEach(input => console.log(input));

/* アロー関数で書かない場合 */
fruits.forEach(function (input) {
  console.log(input);
});
```