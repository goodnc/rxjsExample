import { from } from "rxjs";

from(["a", "b", "c", "d"]).subscribe(console.log);

// 定义一个promise方法，返回一个promise对象
function p() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ a: 1, b: 2, c: 3 });
    }, 2000);
  });
}

// 将promise对象转换为observable对象并订阅
from(p()).subscribe(console.log);
