import React from 'react'

function TasksFilter({ statusFilter = 'All', desButton = 'default', setFilter = () => {} }) {
  return (
    <li>
      <button type="button" className={statusFilter} onClick={setFilter}>
        {desButton}
      </button>
    </li>
  )
}

export default TasksFilter
