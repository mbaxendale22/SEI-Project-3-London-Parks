import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Grid, GridColumn, Segment } from 'semantic-ui-react'
import { ImageUploadField } from './ImageUploadField'


const NewRegister = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
    passwordConfirmation: ""
  })

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    profilePicture: "",
    password: "",
    passwordConfirmation: ""
  })

  const handleChange = e => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('api/register', formData)
      history.push('/login')
    }
    catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  const handleImageUrl = url => {
    setFormData({ ...formData, profilePicture: url })
  }

  return (
    <Grid centered>
      <GridColumn style={{ maxWidth: 550, marginTop: 100 }}>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                required={true}
                placeholder='Username'
                name='username'
                type='text'
                onChange={handleChange}
              />
            </Form.Field>
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
            <Form.Field>
              <label>Confirm Password</label>
              <input
                placeholder='Confirm Password'
                type='password'
                name='passwordConfirmation'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <ImageUploadField 
              value={formData.profilePicture}
              name='profilePicture'
              handleImageUrl={handleImageUrl}/>
            </Form.Field>
            <Button positive fluid type='submit'>Submit</Button>
          </Form>
        </Segment>
      </GridColumn>
    </Grid>
  )
}

export default NewRegister 
