import { fromEvent, from } from "rxjs";
import { pluck, concatMap } from "rxjs/operators";
import axios from "axios";

const btn = document.getElementById("btn");

fromEvent(btn, "click")
  .pipe(
    concatMap((event) =>
      from(axios.get("http://localhost:3000/token")).pipe(
        pluck("data", "token")
      )
    ),
    concatMap((token) =>
      from(axios.get("http://localhost:3000/userInfo")).pipe(pluck("data"))
    )
  )
  .subscribe(console.log);
