# todolist React实现

## 基础知识要点
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

## 组件化思想

branch: `todolist-componentization`

### 父子组件传值

父 -> 子
- 在子组件标签中以属性的形式传递，例如`<TodoItem item={item} />`
- 子组件通过`this.props.item`接收父组件传递过来的值
---
子 -> 父

通过调用父组件传递过来的方法，来操作父组件的值

例如`<TodoItem handlerItemDelete={this.handlerItemDelete.bind(this)} />`

> 将`this`的指向绑定写进`constructor`之中会有性能的提升
>
> `constructor(props) { super(props); this.handlerClick = this.handlerClick.bind(this) }`


## 代码优化

branch: `todolist-optimize`

- `this`指向的绑定写在`constructor`中会有性能的优化
- `setState(Function)`传递函数使方法变成异步方法
    - 在异步函数中直接使用`e.target.value`会出现问题，需要先创建新的变量保存该值
- `setState((prevState) => ({ list: this.setState.list })`,`setState`之中可以接收一个为`prevState`的参数,`prevState`指的是修改数据之前的`state`(等价于`this.state`)
- `() => { return { list } } 等价于 () => ({ list })`
