import React, { useEffect, useState } from 'react'
import { getUsers } from '../api/api'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nome} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
