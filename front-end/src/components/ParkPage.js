import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header, Image, Divider, Grid, Segment, Container, Icon, Comment , Popup} from 'semantic-ui-react'
import { getTokenFromLocalStorage } from '../helpers/auth.js'

const ParkPage = () => {

const { id } = useParams()
const [park, setPark] = useState(null)
const [ toggle, setToggle ] = useState(null)
const [ favData, setFavData ] = useState(null)
const [ clicked, setClicked ] = useState(false)
const [ userData, setUserData ] = useState(null)
const [ favourite, setFavourite ] = useState(null)



//event handlers to toggle between an outline and full heart favourite icon
// also set state to be sent when the click event (handleclick) is triggered 
const handleMouseEnter = () => {
  const newFavData = { ...favData, targetPark: id }
  setFavData(newFavData)
  setToggle(true)
}
const handleMouseExit = () => {
  console.log(clicked)
  clicked ? setToggle(true) : setToggle(false)
}

//make the request to add or remove this park from the user's favourite parks key in the db
const handleClick = async () => {
  try {
    setToggle(true)
    setClicked(!clicked)
    if (!clicked) {
      await axios.post('/api/favourite-parks', favData, 
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
    } else {
      await axios.delete('/api/favourite-parks', 
      {
        data: { favData },
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
    }
} catch {
console.log('error')
} 
}

// get the park to display
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(`/api/london-parks-api/${id}`)
    setPark(data)
  }
  getData()
}, [id])


//get the userData of the current user, will be used to check if this park is in their 
// favourite parks key in the useEffect directly below
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get('/api/profile', 
    {
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
    }
    )
    setUserData(data)
  }
  getData()
}, [])

// function to check if this park is already in the users FavouriteParks key, check to see if the 
// userData request has returned yet. 
useEffect(()=> {
  const checkFavourite = () => {
    if (userData === null ) {
      return console.log('use effect running on initial render')
    }
    else {
      const checkPark = userData.favouriteParks.filter(x => x._id === park._id)
      checkPark.length ? setFavourite(true): console.log('not a fav park')
    }  
  }
  checkFavourite()
}, [userData, park._id])

//onclick handler to remove favourite set by useEffect directly above && send
// a delete request to the db for the current user

const removeFav = async () => {
  setFavourite(false)
  try {
    await axios.delete('/api/favourite-parks', 
      {
        data: { targetPark: id },
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
  } catch (err) {
  console.log(err)
}
}
  

return (
  <>
      {park && 
      <Container >
        <Container>
          <Segment>
            <Header as='h1' textAlign='center'>{park.title}</Header>
          </Segment>
          <Image src={park.images[Math.floor(Math.random()* park.images.length)]} alt={park.title} class='ui image'/>
        </Container>
        <Header>
          <b>Description</b>
        </Header>
        <Segment>
          <Container >{park.description}</Container>
        </Segment>
        <Grid columns={3}>
          <Grid.Column>
            <Segment >
            <Grid.Row columns={2}>
              <Grid.Column>
                <Icon name='home' size='large'/>
              </Grid.Column>
              <Grid.Column>
              <Header as='h5' textAlign='left'>{park.postcode}</Header>
            </Grid.Column>
            </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised class='parkPageColumns'>
              <div> 
                <Header as='h5' textAlign='centered'>Activities</Header>
                <Segment>
                  <Image src={'https://www.pngfind.com/pngs/m/210-2102885_png-file-svg-activities-icon-transparent-png.png'} alt={park.title} size='mini' left />
                  <Icon name='bicycle' size='large'/>
                  <Icon name='football ball' size='large'/>
                  <Icon name='volleyball ball' size='large'/>
                  <Image src={'https://static.thenounproject.com/png/14830-200.png'} size='mini' left />
                  <Image src={'https://cdn-icons-png.flaticon.com/512/1291/1291043.png'} size='mini' left />  
                </Segment>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised class='parkPageColumns'>
              <div> 
                <Image src={'http://cdn.onlinewebfonts.com/svg/img_249555.png'} size='mini' left/>
                <p textAlign='centered'>{park.url}</p>
              </div>
            </Segment>
            {
              favourite ? 
            <Segment raised class='parkPageColumns'>
            <Header as='h3'icon textAlign='center' inverted color='red' >
              <Popup trigger ={<Icon onClick={removeFav} name = 'heart'/>}>
                <Popup.Content>
                  <p>Click to <strong>REMOVE</strong> this park from your favourites</p>
                </Popup.Content>
              </Popup>     
            <Header.Content>Favourite</Header.Content>
            </Header>
            </Segment>

            : 

            <Segment raised class='parkPageColumns'>
            <Header as='h3'icon textAlign='center' inverted color='red' >
              <Popup 
                trigger ={
                  !toggle ? 
                  <Icon onMouseEnter ={handleMouseEnter} onClick={handleClick}  name ='heart outline'/> 
                  : <Icon onClick={handleClick} onMouseLeave={handleMouseExit} name ='heart'/>
                }>
                <Popup.Content>
                  {
                    clicked ? 
                    <p>Click to <strong>REMOVE</strong> this park from your favourites</p> 
                    : <p>Click to <strong>ADD</strong> this to your favourites</p>
                  }
                  </Popup.Content>
                </Popup>
                  <Header.Content>Favourite</Header.Content>
                </Header>
            </Segment>

            }


          </Grid.Column>
        </Grid>
        <Container>
          <Comment.Group>
            <Header as='h3' dividing>Comments</Header>
            <Comment>
              <Comment.Content>
                <Comment.Author as='a'>Mariana</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                < Comment.Text>Amazing nature!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Container>
        <Divider />
      </Container>
      }
      </>
  )
}

export default ParkPage