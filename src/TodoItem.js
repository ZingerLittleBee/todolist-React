/**
 * @author  Ye
 * @date  2021/1/5 3:32 下午
 * @describe
 */
import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
  }

  render() {
    const { item } = this.props
    return (
      <div onClick={this.handlerClick}>
        {item}
      </div>
    )
  }

  handlerClick() {
    const { index, handlerItemDelete } = this.props
    handlerItemDelete(index)
  }

}
export default TodoItem
