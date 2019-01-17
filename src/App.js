import React, { useState } from 'react'
import { AddUserForm } from './forms/AddUserForm_'
import { UserTable } from './tables/UserTable_'
import './App.css'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Max', username: 'maxfarseer' },
  ]

  const [users, setUsers] = useState(usersData)

  // функция добавления пользователя
  const addUser = user => {
    // создаем id значением на 1 больше (автоинкремент)
    user.id = users.length + 1
    // вызываем setUsers определенную выше в хуке useState
    // передаем туда все, что было в users + новый элемент user
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          {/* передаем addUser */}
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export { App }
