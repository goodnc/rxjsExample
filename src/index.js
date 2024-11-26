import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

// of：将参数列表作为数据流返回
of("a", 2, true, [], {}).subscribe((v) => console.log(v));

// distinctUntilChanged：检测数据源当前发出的数据流是否和上次发出的相同，相同则跳过，不同则发出。
of(1, 1, 2, 3, 3, 3, 4, 4, 5, 6)
  .pipe(distinctUntilChanged())
  .subscribe((v) => console.log(v));
