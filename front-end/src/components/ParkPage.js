import React, { useState, useEffect } from 'react'
import { useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import { Header, Image, Divider, Grid, Segment, Container, Icon, Comment, Form, Button, Rating, List, Popup } from 'semantic-ui-react'
import { getTokenFromLocalStorage, getPayload } from "../helpers/auth"
import Favourite from './Favourite.js'
import { UserComment } from './UserComment'

const ParkPage = () => {

  const { id } = useParams()
  const [park, setPark] = useState(null)
  const history = useHistory()
  const [newComment, setNewComment] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [comment, setComment] = useState({
      text: '',
      rating: 0,
      owner: ''
    })
    
    useEffect(() => {
      const getData = async () => {
        const { data: park } = await axios.get(`/api/london-parks-api/${id}`)
        setPark(park)
      }
      getData()
    }, [id, newComment])


// get the payload for the current user, use this to conditionally render a delete button next to comments 
// depending on whether the payload matches that of the owner of the comment
const getSub = () => {
  const payload = getPayload()
  if (!payload) return
  return payload.sub
}

// getTokenFromLocalStorage()

      // get the value of the radio button representing the stars and pass it to the 'comment' state 
      const handleStars = e => {
        const rating = e.target.attributes.getNamedItem('aria-posinset').value
        const newComment = { ...comment, rating }
        setComment(newComment)
        
      }

  const deleteComment = async e => {
    console.log(e.target.value)
    await axios.delete(`/api/london-parks-api/${id}/comments/${e.target.value}`, 
    {
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
    }
    )
    setNewComment(!newComment)
  }

  const handleChange = (event) => {
    const newComment = { ...comment, [event.target.name]:event.target.value, owner: getSub()
    }
    setComment(newComment)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
   if (comment.rating === 0) {
     setToggle(!toggle) 
     return
   } else {
     try {
       await axios.post(`/api/london-parks-api/${park._id}/comments`, comment, 
       {
         headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }, // need to send the token on the headers object
       })
       setNewComment(!newComment)
       setToggle(!toggle)
     } catch (err) {
       console.log(err)
     }

   }

    document.querySelector('textarea').value = ''
    }

  




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
            <Image src={park.images[Math.floor(Math.random()* park.images.length)]} alt={park.title} class='ui fluid image' centered/>
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
            <Favourite park={park} id={id} />
          </Grid.Column>
        </Grid>
        <Container>
        <Comment.Group>
  <Header as='h3'color='green' dividing>Comments</Header>
  <Comment>
    <Comment.Content>
      { park.comments.length &&
      park.comments.map(comment => {
        return (
          <>
            <Comment.Avatar as='a' src={comment.owner.profilePicture} />
            <Comment.Author as='a'>{comment.owner.username}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.createdAt.slice(0, 10)}</div>
            </Comment.Metadata>
             { comment.owner._id === getSub() && 
            <Button value={comment._id} onClick={deleteComment}>Delete</Button>
             }
            
            < Comment.Text>{comment.text}</Comment.Text>
            <p>Rating: {comment.rating}</p>
          </>
        )
      })
           
    }
    
      <Form reply>
        <Form.TextArea onChange={handleChange} name='text' placeholder='Your comment...'/>
        <Rating onClick={handleStars} icon='star' maxRating={5} name='rating'/>
      {
      toggle ? 
          <>
        <p style={{color: 'red'}}>Please add a rating to submit your comment</p>
        <Button autoFocus onClick={handleSubmit} content='Add Comment' labelPosition='left' />
        </>

      :
      <Button onClick={handleSubmit} content='Add Comment' labelPosition='left' />
   
    }
    
    </Form>      
    </Comment.Content>
    </Comment>
    </Comment.Group>        
        </Container>
        <Divider/>
        </Container>
            }
    </>
  )
}

export default ParkPage