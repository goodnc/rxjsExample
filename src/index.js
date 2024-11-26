import { BehaviorSubject } from "rxjs";

// BehaviorSubject 拥有Subject的所有功能，但是在创建可观察者对象时可以传入一个默认值，观察者订阅后可以直接拿到默认值。
// Subject 被订阅后不是被立即执行，而BehaviorSubject 被订阅后会被立即执行。
const behaviorSubject = new BehaviorSubject('Default Behavior');

behaviorSubject.subscribe({
  next: (value) => {
    console.log(value)
  }
})

behaviorSubject.next('Hello Behavior');