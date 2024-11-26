import { ReplaySubject } from "rxjs";

// 创建一个 ReplaySubject
// 功能类似Subject，但有新订阅者时两者处理方式不同，Subject不会广播历史结果，而ReplaySubject会广播所有历史结果
const replaySubject = new ReplaySubject();

replaySubject.subscribe((value) => {
    console.log(value);
});

replaySubject.next('Hello one');
replaySubject.next('Hello two');

setTimeout(() => {
    replaySubject.subscribe({
      next: (value) => {
        console.log(value);
      }
    });
}, 2000);