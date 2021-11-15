import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Container, Grid, GridColumn, Header, Image, Segment } from 'semantic-ui-react'

const UserProfile = ({ setUserData }) => {

 const [userInfo, setUserInfo] = useState([])

useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      console.log(data.favouriteParks)
      setUserInfo(data)
    }
    getData()
  },[])
  
  setUserData(userInfo)
  return (
    <Container>
      <Segment>
        <Grid columns={1}>
        <GridColumn >
          <Image src={userInfo.profilePicture}  circular/>
          <Header as='h1'textAlign='center'>User: {userInfo.username}</Header></GridColumn>
        </Grid>
      </Segment>
      <Segment>
        <Header textAlign='center' as='h1'>Here will go favourite parks</Header>
      </Segment>
    </Container>

  )
}

export default UserProfile