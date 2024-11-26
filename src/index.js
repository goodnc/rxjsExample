import { fromEvent, range } from "rxjs";
import { take, takeWhile, takeUntil } from "rxjs/operators";

// range(1, 10)
// .pipe(take(5)) // Take only the first 5 numbers

// .pipe(takeWhile((n) => n < 3))
// .subscribe(console.log);

const button = document.getElementById("btn");

// 在document区域里移动鼠标，会源源不断地发出数据流，当点击按钮后，数据流就会停止
fromEvent(document, "mousemove")
  .pipe(takeUntil(fromEvent(button, "click")))
  .subscribe(console.log);
