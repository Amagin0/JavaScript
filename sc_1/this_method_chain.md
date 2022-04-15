## オブジェクトにメソッドや値を組み込む(this)
- JavaScript はcamelCaseが多い
- HTML/CSS は大文字小文字を区別しないので snake_caseが使われる
- 英語 動詞 + 名詞 が好ましい
- thisを使うことでメソッドチェーンが使える
```js
const postal = {

  postalCode:'123-4567',

  checkPostalCode(){
    // 省略：checkPostalCode: function(){}
    const replaced = this.postalCode.replace('-','').length;
      // this.postalCode オブジェクトの中の値を使う
      /* 
      .lengthを最後に着けることによって
      const length = replaced.length;
      を省略している(メソッドチェーン)
      */
  
    if(replaced === 7){
      return true
    }
    return false;   
  }
};
```

## メソッドチェーン

```js
console.log(postal.checkPostalCode());

const person = {
  name: 'honda',
  age: 30,

  getName(){
    console.log( this.name );
    return this;
  },
  getAge(){
    console.log( this.age );
    return this;
  }
};

person.getName().getAge();
```