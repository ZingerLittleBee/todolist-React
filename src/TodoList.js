/**
 * @author  Ye
 * @date  2021/1/5 11:08 上午
 * @describe
 */
import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
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
            onChange={this.handlerInputChange.bind(this)}
          />
          <button onClick={this.handlerButtonClick.bind(this)}>提交</button>
        </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <TodoItem
                    item={item}
                    index={index}
                    handlerItemDelete={this.handlerItemDelete.bind(this)}
                    key={index}
                  />
                )
              })
            }
          </ul>
      </Fragment>
    )
  }

  handlerInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handlerButtonClick() {
    if (!this.state.inputValue) { return }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handlerItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
