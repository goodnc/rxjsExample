import { fromEvent } from "rxjs";
import { debounceTime, throttleTime } from "rxjs/operators";

// 节流，可观察者对象高频次向外部发出数据流，通过throttleTime来限制在规定的时间内只向订阅者传递一次数据流
// fromEvent(document, "click").pipe(throttleTime(2000)).subscribe(console.log);

// 防抖，触发高频事件，只响应最后一次
fromEvent(document, "click").pipe(debounceTime(2000)).subscribe(console.log);
