import { range } from "rxjs";
import { map } from "rxjs/operators";

// 数据流：从可观察者对象内部输出的数据就是数据流，可观察者对象内部可以源源不断地向外部输出数据。
// 操作符：用于操作数据流，可以对数据流进行转换、过滤等等操作。

range(1, 5)
  .pipe(map((n) => n * 10)) // map：对数据流进行转换
  .subscribe((value) => console.log(value)); // 默认是调用next方法
