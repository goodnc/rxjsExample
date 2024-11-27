import { fromEvent, from } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  pluck,
  switchMap,
} from "rxjs/operators";
import axios from "axios";

const search = document.getElementById("search");

fromEvent(search, "keyup") // 监听到keyup事件转换为事件流
  .pipe(
    debounceTime(1000), // 防抖，1秒内输入的关键词不调用接口
    map((event) => event.target.value),
    distinctUntilChanged(), // 如果两次关键词一样相同，就不重新调用接口
    switchMap((keyword) =>
      from(
        axios.get(`https://jsonplaceholder.typicode.com/posts?q=${keyword}`)
      ).pipe(pluck("data"))
    )
  )
  .subscribe(console.log);
