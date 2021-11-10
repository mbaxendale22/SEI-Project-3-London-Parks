import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  
  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token',token)
  }

  const handleSubmit = async event =>{
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      setItemToLocalStorage(data.token)
      history.push('/parks')
    } catch (err) {
      setError(true)
    }
  }
  return (
    <section className="section">
    <div className="container">
      <div className="columns">
        <form className="box column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${error ? 'is-danger' : ''}`}
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className={`input ${error ? 'is-danger' : ''}`}
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>
            {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}
          </div>
          <div className="field">
            <button type="submit" className="button is-fullwidth is-success">Log Me In!</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Login