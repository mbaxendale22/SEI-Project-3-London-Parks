import React, { useState } from 'react'
import { Form, Grid, Segment, GridColumn, Button, Modal } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const NewLogin = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const [error, setError] = useState(false)
   
  const handleChange = e => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
  }

  const setItemToLocalStorage = token => window.localStorage.setItem('token', token)


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      setItemToLocalStorage(data.token)
      history.push('/parks')
    } catch (err) {
      setError(true)
    }
  }


  return (
    <>
    <Grid centered>
    <GridColumn style ={{maxWidth: 550, marginTop: 100}}>
  <Segment>   
  <Form onSubmit={handleSubmit}>
  <Form.Field>
    <label>Email</label>
    <input 
    required={true}
    placeholder='Email' 
    name='email'
    type='email'
    onChange={handleChange}
    />
  </Form.Field>
  <Form.Field>
    <label>Password</label>
    <input 
      placeholder='Password' 
      type='password'
      name='password'
      onChange={handleChange}
    />
  </Form.Field>
  <Button positive fluid type='submit'>Submit</Button>
</Form>
  </Segment>
    </GridColumn>
  </Grid>
  </>
  )
}

export default NewLogin
