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
    return <div onClick={this.handlerClick}>{this.props.item}</div>
  }

  handlerClick() {
    this.props.handlerItemDelete(this.props.index)
  }

}
export default TodoItem
