// console.log('hello world');
import { Observable } from "rxjs";

// 创建可观察者对象
const observable = new Observable((subscriber) => {
  // 产生数据
  let index = 0;
  let timer = setInterval(() => {
    subscriber.next(index++);
    if (index === 5) {
      // subscriber.complete();
      subscriber.error("出错了");
    }
  }, 1000);
});

// 创建观察者
const observer = {
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("终止了");
  },
  error: (error) => {
    console.log(error);
  }
}

// 订阅
observable.subscribe(observer)