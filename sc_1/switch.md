## switch文
- if文のほうが見やすい

```js
const data = 1;

switch (data) {
  case 1:
    console.log('1です')
    break;
  case 2:
    console.log('2です')
    break;
  case 3:
    console.log('3です')
    break;
  default:
    console.log('1-3ではありません')
    break;
}
```
```js
if (data === 1) {
  console.log('1です')
}
if (data === 2) {
  console.log('2です')
}
if (data === 3) {
  console.log('3です')
}
```