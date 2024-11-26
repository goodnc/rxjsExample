import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const button = document.getElementById("btn");

fromEvent(button, "click")
  // .pipe(map((event) => event.target))
  .pipe(pluck("target")) // pluck将在V8中被弃用，使用map代替
  .subscribe(console.log);
