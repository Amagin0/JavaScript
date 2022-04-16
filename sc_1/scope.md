## 変数/定数のスコープ

```js
'use strict';
// 厳しめにエラーを取るようになる

const globalVariable = 'グローバル'

function checkScope(){
  const localVariable = 'ローカル';

  localVariable_2 = 'ローカル？' 
  // グローバルとして認識されるが、バグの原因となるので使用しない
  // use strict を付けることでエラーが吐かれるようになる
  
  console.log(localVariable);
  console.log(globalVariable);
}

checkScope();

console.log(localVariable);
// 使えない

console.log(localVariable_2);
// 使える
```