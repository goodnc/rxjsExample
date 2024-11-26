import { fromEvent } from "rxjs";
import { map, switchMap, takeUntil } from "rxjs/operators";

const box = document.getElementById("box");

// 1. 通过fromEvent添加鼠标按下事件
// 2. 当事件被触发时，可以拿到这个事件对象，从而拿到鼠标的位置信息
fromEvent(box, "mousedown")
  .pipe(
    map((event) => ({
      distanceX: event.clientX - event.target.offsetLeft,
      distanceY: event.clientY - event.target.offsetTop,
    })),
    // 3. 通过switchMap切换到鼠标移动事件
    // 解构获得distanceX，distanceY的信息
    switchMap(({ distanceX, distanceY }) =>
      // 4. 当鼠标移动时，通过map拿到鼠标的位置信息
      // 5. 当鼠标抬起时，通过takeUntil操作符取消订阅
      fromEvent(document, "mousemove").pipe(
        map((event) => ({
          left: event.clientX - distanceX,
          top: event.clientY - distanceY,
        })),
        takeUntil(fromEvent(box, "mouseup"))
      )
    )
  )
  // 6. 把位置信息给订阅者，从而实现拖拽效果
  .subscribe(({ left, top }) => {
    box.style.left = left + "px";
    box.style.top = top + "px";
  });

// box.onmousedown = (event) => {
//   let distanceX = event.clientX - event.target.offsetLeft;
//   let distanceY = event.clientY - event.target.offsetTop;
//   document.onmousemove = (event) => {
//     let left = event.clientX - distanceX;
//     let top = event.clientY - distanceY;
//     box.style.left = left + "px";
//     box.style.top = top + "px";
//   };
//   box.onmouseup = () => {
//     document.onmousemove = null;
//   };
// };
