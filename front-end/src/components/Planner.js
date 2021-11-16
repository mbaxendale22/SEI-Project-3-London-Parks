import React, { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const Planner = ({ park }) => {

  const [postcode, setPostcode] = useState(null)
  
  const handleChange = (e) => {
    const newPostcode = e.target.value
    setPostcode(newPostcode)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    window.open(`https://tfl.gov.uk/plan-a-journey/results?InputFrom=${postcode}&FromId=&InputTo=${park.postcode}&ToId=`, '_blank')
  }

return (

  <Segment style={{width: '25vw'}} raised textAlign='center'>
  <Form style={{padding: '15px'}} onSubmit={handleSubmit}>
    <Header size='medium'>How can I get there?</Header>
    <Form.Field>
      <label>Enter your postcode</label>
      <input id='planner-input' fluid='false' size='small' onChange={handleChange} placeholder='SW19 1AA...' />
    </Form.Field>
    <Button color='green' type='submit'>Take me there!</Button>
  </Form>
  </Segment>
)
}

export default Planner