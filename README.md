# todolist React实现

## 知识要点
- `html`需要一个根标签包裹，如果不想使用额外的根标签，可以使用`<Fragment></Fragment>`作为根标签
- `render()`函数中`return`的`html`标签分多行写，需要使用`()`包裹
- `JSX` 中的 `JS` 表达式需要写在`{}`之中
- `JSX` 中的事件监听需要使用小驼峰的写法，例如`onChange`
- `JSX` 中的注释分为两种
    1. `{ /* xx */ }` 无需换行
    2. `{ // }` **需要换行写**
- `React`中的变量存放在`constructor`的`this.state={}`之中
- `React`中的`state`存放的变量必须使用`this.setState({ list: list })`来修改
- `React`中不推荐直接修改`state`之中的数值，推荐使用新的对象来取代，保持数据的不变性 immutable (不变性是函数式编程的核心原则)

> 不变性推荐阅读
>[[译]为什么对象不变性很重要？](https://zhuanlan.zhihu.com/p/130724120)
