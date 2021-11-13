import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header, Image, Divider, Grid, Segment, Container, Icon, Comment , Popup} from 'semantic-ui-react'
import Favourite from './Favourite.js'

const ParkPage = () => {

const { id } = useParams()
const [park, setPark] = useState(null)



// get the park to display
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(`/api/london-parks-api/${id}`)
    setPark(data)
  }
  getData()
}, [id])
  

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
            <Favourite park={park} id={id} />
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