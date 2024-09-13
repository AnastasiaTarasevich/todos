import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: props.label,
    }
  }

  handleEditChange = (e) => {
    this.setState({ currentValue: e.target.value })
  }

  onSubmit = () => {
    const { currentValue } = this.state
    const { changeDes, onEditItem } = this.props

    if (currentValue.trim()) {
      changeDes(currentValue)
      onEditItem()
    }
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit()
    }
  }

  render() {
    const { label, created, isEditing, id, onToggleDone, completed, onEditItem, onDeleteItem } = this.props
    const { currentValue } = this.state
    const createdTime = formatDistanceToNow(new Date(created), { addSuffix: true })
    const classNames = `${completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            id={id}
            checked={completed}
            onChange={onToggleDone}
            aria-label="Toggle item"
          />
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">{`created ${createdTime}`}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditItem} type="button" aria-label="Edit item" />
          <button className="icon icon-destroy" onClick={onDeleteItem} type="button" aria-label="Delete item" />
        </div>
        {isEditing && (
          <input
            type="text"
            className="edit"
            value={currentValue}
            onChange={this.handleEditChange}
            onKeyDown={this.handleKeyDown}
            onBlur={this.onSubmit}
          />
        )}
      </li>
    )
  }
}

Task.defaultProps = {
  label: '',
  created: new Date(),
  isEditing: false,
  completed: false,
  onToggleDone: () => {},
  onEditItem: () => {},
  onDeleteItem: () => {},
  changeDes: () => {},
}

Task.propTypes = {
  label: PropTypes.string,
  created: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  isEditing: PropTypes.bool,
  completed: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onToggleDone: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  changeDes: PropTypes.func,
}
