import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from './tasks-filter'
import './footer.css'

function Footer({ doneCount = 0, deleteDoneItem, setFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <ul className="filters">
        <TasksFilter desButton="All" setFilter={() => setFilter('All')} />
        <TasksFilter desButton="Active" setFilter={() => setFilter('Active')} />
        <TasksFilter desButton="Completed" setFilter={() => setFilter('Completed')} />
      </ul>
      <button className="clear-completed" onClick={deleteDoneItem} type="button">
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  deleteDoneItem: PropTypes.func.isRequired,
}

export default Footer
