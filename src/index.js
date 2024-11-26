import axios from "axios";
import { from, forkJoin } from "rxjs";

// axios拦截器
axios.interceptors.response.use((res) => res.data);

// 使用forkJoin并发请求，rx版的promise.all
forkJoin({
  users: from(axios.get("https://jsonplaceholder.typicode.com/users")),
  posts: from(axios.get("https://jsonplaceholder.typicode.com/posts")),
}).subscribe(console.log);
