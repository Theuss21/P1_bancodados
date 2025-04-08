import React, { useState } from 'react'
import { createUser } from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUser({ nome, email })
    navigate('/')
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
