import { fromEvent, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const button = document.getElementById("btn");

fromEvent(button, "click")
  .pipe(switchMap((event) => interval(1000))) // 将原本是event事件对象转换为了一个interval的可观察者对象。再次点击的时候会抛弃上一次的事件流，从0开始重新发送。
  .subscribe(console.log);
