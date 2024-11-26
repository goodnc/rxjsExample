// console.log('hello world');
import { Observable } from "rxjs";

// 创建可观察者对象
const observable = new Observable((subscriber) => {
  // 产生数据
  setTimeout(() => {
    subscriber.next({
      name: '张三',
    });
  }, 1000);
});

const observer = {
  next: (value) => {
    console.log(value);
  },
}

observable.subscribe(observer)