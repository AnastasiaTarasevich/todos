import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

export default class NewTasksForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
  }

  onLabelState = (e) => {
    this.setState({ label: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { label } = this.state
    const { addItem } = this.props

    if (label.trim()) {
      addItem(label)
      this.setState({ label: '' })
    }
  }

  render() {
    const { label } = this.state

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelState}
            value={label}
          />
        </form>
      </header>
    )
  }
}

NewTasksForm.defaultProps = {
  addItem: () => {},
}

NewTasksForm.propTypes = {
  addItem: PropTypes.func,
}
