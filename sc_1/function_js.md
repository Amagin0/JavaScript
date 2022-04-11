## ユーザー定義関数
```js
function test(引数){
  // 処理

  // 戻り値
  return 戻り値;
}
```

## 引数なし 戻り値なし
```js
function test() {
  console.log('テスト');
}

test();
```

## 引数あり 戻り値なし
```js
const comment = 'コメント'

function getComment(string) {
  console.log(string);
}

getComment(comment);
```

## 引数なし 戻り値あり
```js
function getNumberOfComment() {
  return 5;
}

/* 表示されない */
getNumberOfComment();

/* 表示される */
console.log(getNumberOfComment());

const NumberOfComment = getNumberOfComment();
console.log(NumberOfComment);
```

## 引数２つ  戻り値あり
```js
function sumPrice(int1, int2) {
  let int3 = int1 + int2;
  return int3;
}

const total = sumPrice(3, 5);
console.log(total);
```

## 組み込み関数 
```js
const test_2 = 'テスト';
const test_3 = 'です';
console.log(test_2.length);

console.log(test_2.concat(test_3));
```

## string.trim()...両端から空白などを取り除く
```js
const greeting = '  Hello world!   ';
console.log(greeting);
// expected output: "  Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```

## string.substring()...〇文字目から〇文字だけ取り出す
```js
const str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
// 3 は含まない

console.log(str.substring(2));
// expected output: "zilla"
```

## string.replace()...置き換え
```js
const test_4 = 'テストです';
console.log(test_4.replace('テスト', 'ファイト'));
```