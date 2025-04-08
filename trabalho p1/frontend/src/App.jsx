import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UserList from "./pages/UserList"
import CreateUser from "./pages/CreateUser"
import EditUser from "./pages/EditUser"

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
        <Link to="/">Usuários</Link> | <Link to="/create">Cadastrar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  )
}
