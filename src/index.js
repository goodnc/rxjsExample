// console.log('hello world');
import { Observable } from "rxjs";

// 创建可观察者对象
// 可观察者对象是惰性的，只有被订阅了才可以被执行
const observable = new Observable(() => {
    console.log('Hello RxJS');
});

// 订阅
observable.subscribe()
// 可观察者对象可以被多次订阅，每被订阅一次，就会执行一次
observable.subscribe()
observable.subscribe()
observable.subscribe()