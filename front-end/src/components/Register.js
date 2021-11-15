import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    profilePicture:"",
    passwordConfirmation:""
  })

  const [errors, setErrors] = useState({
    username:"",
    email:"",
    profilePicture:"",
    password:"",
    passwordConfirmation:""
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }  
    setFormData(newFormData)}

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }
  return (
    <section className="section">
    <div className="container">
      <div className="columns">
        <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit} >
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input 
                className={`input ${errors.username ? 'is-danger' : ''}`} 
                placeholder="Username" 
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && <p className="help is-danger">username must be unique</p>}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                type="email"
                className={`input ${errors.email ? 'is-danger' : ''}`}  
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="help is-danger">email must be unique</p>}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
                type="password"
                className={`input ${errors.password ? 'is-danger' : ''}`}  
                placeholder="Password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="help is-danger">password does not match</p>}
          </div>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input
                type="password"
                className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}  
                placeholder="Password Confirmation" 
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
              />
            </div>
            {errors.passwordConfirmation && <p className="help is-danger">password does not match</p>}
          </div>
          <div className="field">
            <button type="submit" className="button is-fullwidth is-success">Register</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Register