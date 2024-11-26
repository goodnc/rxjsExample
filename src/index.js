import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const box = document.getElementById("box");

box.onmousedown = (event) => {
  let distanceX = event.clientX - event.target.offsetLeft;
  let distanceY = event.clientY - event.target.offsetTop;
  document.onmousemove = (event) => {
    let left = event.clientX - distanceX;
    let top = event.clientY - distanceY;
    box.style.left = left + "px";
    box.style.top = top + "px";
  };
  box.onmouseup = () => {
    document.onmousemove = null;
  };
};
