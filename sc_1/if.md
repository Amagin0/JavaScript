## if文
### ・構文
```js
if(条件){
  条件が真なら実行
 }
```
```js
const height = 90;

if (height === 90) {
  console.log('身長は' + height + 'cmです');
}

// == 一致
// === 型も一致
```
  ### ・構文
```js
if(条件){
  条件が真なら実行
} else {
  条件が偽なら実行
}
```
```js
const height_2 = 91;

if (height_2 === 90) {
  console.log('身長は' + height + 'cmです');
} else {
  console.log('身長は90cmではありません');
}

if (height_2 !== 90) {
  console.log('身長は' + height + 'cmになっています');
}

// != 否定
// !== 型も判定
```
```js
const signal_l = 'red';
if (signal_l === 'red') {
  console.log('止まれ');
} else if (signal_l === 'yellow') {
  console.log('一旦停止');
} else {
  console.log('進む');
}

const signal_2 = 'blue';
const speed = 60;

if (signal_2 === 'blue') {
  if (speed >= 60) { //ネスト
    console.log('スピード違反');
  }
}

if (signal_l === 'red' && signal_2 === 'blue') {
  console.log('赤と青');
}
```
## 三項演算子
- 条件 ? 真 : 偽
```js
const score = 80;
const comment = score > 80 ? 'good' : 'not good';
console.log(comment);
```