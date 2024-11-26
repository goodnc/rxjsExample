import { Subject } from "rxjs";

// Subject 用于创建一个空的可观察者对象，在订阅后不会立即执行，next方法可以在可观察者对象外部调用。
const subject = new Subject();

subject.subscribe({
  next: (value) => console.log(value),
});

subject.subscribe({
  next: (value) => console.log(value),
});

setTimeout(
  () => subject.next('Hello Subject')
, 1000);