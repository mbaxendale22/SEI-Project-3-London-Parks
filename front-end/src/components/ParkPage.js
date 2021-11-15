import React, { useState, useEffect, useRef } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Header, Image, Divider, Grid, Segment, Container, Icon, Comment, Form, Button, Rating, List } from 'semantic-ui-react'
import { getTokenFromLocalStorage } from "../helpers/auth"

const ParkPage = () => {

  const { id } = useParams()
  const [park, setPark] = useState(null)
  const history = useHistory()
  const [newComment, setNewComment] = useState(false)
  const refreshPage = useRef(null)

  useEffect(() => {
    const getData = async () => {
      const { data: park } = await axios.get(`/api/london-parks-api/${id}`)
      setPark(park)
    }
    getData()
  }, [id, newComment])

  const [comment, setComment] = useState({
        text: '',
        rating: ''
      })

  const handleChange = (event) => {
    const newComment = { ...comment, [event.target.name]:event.target.value
    }
    setComment(newComment)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
      try {
        await axios.post(`/api/london-parks-api/${park._id}/comments`, comment, 
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }, // need to send the token on the headers object
          })
          setNewComment(!newComment)
        // history.push(`/${park._id}`)
      } catch (err) {
        console.log(err)
      }
    }

  const displayParkImages = () => {
    if (park === null) {
      return
    } else {
      refreshPage.current = park.images[Math.floor(Math.random()* park.images.length)]
      console.log(refreshPage.current)
    }
  }
  setInterval(displayParkImages, 5000)


  const cyclingFriendly = () => {
    if (park.cyclistFriendly === 'yes') {
      return (
        <Image src={'https://media.istockphoto.com/illustrations/green-bicycle-traffic-sign-vector-icon-illustration-id1162027328?k=20&m=1162027328&s=170667a&w=0&h=FRM8rA0O-oCFfVUND-eg1m8ICpUealQ8Rw0a8Sk98OU='} size='tiny' left id='greenBicycle'/>
      ) 
    } if (park.cyclistFriendly === 'no') {
      return (
        <Image src={'https://previews.123rf.com/images/almightyalex/almightyalex1810/almightyalex181001450/111051484-stop-or-ban-sign-with-cyclist-icon-isolated-on-white-background-cycling-is-prohibited-vector-illustr.jpg'} size='mini' left class='greenBicycle'/>
      )
    } else {
      return (
        <>
        <Segment.Inline>
          <Grid column={2}>
            <Image src={'https://media.istockphoto.com/illustrations/green-bicycle-traffic-sign-vector-icon-illustration-id1162027328?k=20&m=1162027328&s=170667a&w=0&h=FRM8rA0O-oCFfVUND-eg1m8ICpUealQ8Rw0a8Sk98OU='} size='tiny' left id='greenBicycle'/>
              <Header as='h5' textAlign='left'><a href={'https://www.royalparks.org.uk/managing-the-parks/cycling-in-the-royal-parks'}>with some restrictions</a></Header>
          </Grid>
        </Segment.Inline>
        </>
      )
    }
  }

  const dogsFriendly = () => {
    if (park.dogFriendly === 'yes'){
      return <Image src={'https://static.thenounproject.com/png/14830-200.png'} size='mini' left/>
    } if (park.dogFriendly === 'no') {
      return <Image src={'https://createsigns.co.nz/wp-content/uploads/2017/05/No-Pets-Service-Animals-Allowed-Sign-No-Dog-Icon-1.png'} size='mini' left/>
    } else {
      return(
        <>
        <Segment.Inline>
          <Grid column={2}>
            <Image src={'https://etc.usf.edu/clipart/70300/70382/70382_262_rg-110_s_md.gif'} size='tiny' left/>
              <Header as='h5' textAlign='left'><a href={'https://www.royalparks.org.uk/managing-the-parks/park-regulations-legislation-and-policies/dogs-in-the-royal-parks'}>with some restrictions</a></Header>
          </Grid>
        </Segment.Inline>
        </>
      )
    }
  }

  return (
    <>
      {park &&
      <Container >
        <Container>
          <Segment>
            <Header as='h1' color='green' textAlign='center'>{park.title}</Header>
          </Segment>
            <Image src={refreshPage.current} alt={park.title} class='ui fluid image' centered/>
        </Container>
        <Header as='h3' color='green'>
          <b>Description</b>
        </Header>
        <Segment color='green'>
          <Container >{park.description}</Container>
        </Segment>

        <Grid columns={2}>
          <Grid.Column>
            <Segment color='green'>
              <Segment.Inline basic >
                <Grid columns={2} textAlign='left'>
                  <Grid.Column>
                    <Header as='h5' textAlign='left'>
                      <Container><p>Postcode</p></Container>
                      <Image src={'http://www.clker.com/cliparts/U/M/C/p/x/C/google-maps-pin-green.svg'} alt={park.title} size='massive' left id='postCode'/>
                      <Container><p>{park.postcode}</p></Container>
                    </Header>
                  </Grid.Column>
                </Grid>
              </Segment.Inline>
              <Segment basic>
                <Grid columns={2}>
                  <Grid.Column>
                    <Segment basic>
                      {dogsFriendly()}
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>{cyclingFriendly()}</Grid.Column>
                </Grid>
              </Segment>
              <Divider />
              <Segment.Inline >
                <Grid column={2}>
                  <Image src={'https://thumbs.dreamstime.com/b/web-vector-icon-arrow-website-icon-cursor-move-web-vector-icon-arrow-website-icon-cursor-move-122726028.jpg'} size='tiny' right/>
                  <p textAlign='left'><a href={park.url}>{park.title}</a></p>
                </Grid>
              </Segment.Inline>
            </Segment> 
          </Grid.Column>
          <Grid.Column>
            <Segment color='green'>
              <div> 
                <Header as='h5' textAlign='left' color='green'>
                <Image src={'https://static.vecteezy.com/system/resources/previews/001/235/706/non_2x/group-of-masked-people-walking-in-the-park-vector.jpg'} alt={park.title} size='massive' left />Activities
                </Header>
                <List bulleted animated verticalAlign='middle'>
                  {
                    park.activites.map(activ => {
                      return <List.Item >{activ}</List.Item>
                    })
                  }
                </List>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Container>
          <Comment.Group>
            <Header as='h3'color='green' dividing>Comments</Header>
            <Comment>
              <Comment.Content>
                {park.comments.map(comment => {
                  return (
                    <>
                      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                      <Comment.Author as='a'>{comment.owner.username}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.createdAt.slice(0, 10)}</div>
                      </Comment.Metadata>
                      < Comment.Text>{comment.text}</Comment.Text>
                      <p>Rating: {comment.rating}</p>
                    </>
                  )
                })}
                <Form reply>
                  <Form.TextArea onChange={handleChange} name='text' placeholder='Your comment...'/>
                  <input onChange={handleChange} name='rating' placeholder='Rating from 1 to 5' />
                  <Rating onChange={handleChange} icon='star' maxRating={5} name='rating'/>
                  <Button onClick={handleSubmit} content='Reply' labelPosition='left' />
                </Form>      
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