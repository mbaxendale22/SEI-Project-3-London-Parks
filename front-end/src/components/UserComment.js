import React, { useState } from "react"
import axios from 'axios'
import { getTokenFromLocalStorage, getPayload } from "../helpers/auth"
import { Rating, Comment, Header, Form, Button } from "semantic-ui-react"


export const UserComment = ({ id, park }) => {

  const [newComment, setNewComment] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [comment, setComment] = useState({
    text: '',
    rating: 0,
    owner: ''
  })

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
    const newComment = {
      ...comment, [event.target.name]: event.target.value, owner: getSub()
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
        // history.push(`/${park._id}`)
      } catch (err) {
        console.log(err)
      }

    }

    document.querySelector('textarea').value = ''
  }




  return (
    <>
      <Comment.Group>
        <Header as='h3' color='green' dividing>Comments</Header>
        <Comment>
          <Comment.Content>
            {park.comments.length &&
              park.comments.map(comment => {
                return (
                  <>
                    <Comment.Avatar as='a' src={comment.owner.profilePicture} />
                    <Comment.Author as='a'>{comment.owner.username}</Comment.Author>
                    <Comment.Metadata>
                      <div>{comment.createdAt.slice(0, 10)}</div>
                    </Comment.Metadata>
                    {comment.owner._id === getSub() &&
                      <Button value={comment._id} onClick={deleteComment}>Delete</Button>
                    }

                    < Comment.Text>{comment.text}</Comment.Text>
                    <p>Rating: {comment.rating}</p>
                  </>
                )
              })

            }

            <Form reply>
              <Form.TextArea onChange={handleChange} name='text' placeholder='Your comment...' />
              <Rating onClick={handleStars} icon='star' maxRating={5} name='rating' />
              {
                toggle ?
                  <>
                    <p style={{ color: 'red' }}>Please add a rating to submit your comment</p>
                    <Button autoFocus onClick={handleSubmit} content='Add Comment' labelPosition='left' />
                  </>

                  :
                  <Button onClick={handleSubmit} content='Add Comment' labelPosition='left' />

              }

            </Form>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  )




}
