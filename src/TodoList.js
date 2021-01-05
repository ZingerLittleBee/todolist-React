/**
 * @author  Ye
 * @date  2021/1/5 11:08 上午
 * @describe
 */
import React, { Component, Fragment } from 'react'
import TodoItem from "./TodoItem";
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerButtonClick = this.handlerButtonClick.bind(this)
    this.handlerItemDelete = this.handlerItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handlerInputChange}
          />
          <button onClick={this.handlerButtonClick}>提交</button>
        </div>
          <ul>
            {this.getTodoItem()}
          </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          item={item}
          index={index}
          handlerItemDelete={this.handlerItemDelete}
          key={index}
        />
      )
    })
  }

  handlerInputChange(e) {
    const value = e.target.value
    this.setState(() => ({ inputValue: value }))
  }
  handlerButtonClick() {
    if (!this.state.inputValue) { return }
    this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
    }))
  }

  handlerItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList
