// import React, { useState, useEffect } from "react"
// import axios from 'axios'
// // import { getTokenFromLocalStorage } from "../helpers/auth"
// import { Container, Comment, Header, Grid, Form, Button } from "semantic-ui-react"




// const UserComment = ({ id }) => {

//   const [comment, setComment] = useState({
//     // name: '',
//     text: '',
//     rating: ''
//   })

//   useEffect(() => {
//     const getData = async () => {
//       const { commen } = await axios.get(`/api/london-parks-api/${id}`)
//       console.log('COMMENTS -->', comments)
//       setComment(comments)
//     }
//     getData()
// }, [])

  

  // const handleChange = (event) => {
  //   const newComment = { ...comment, [event.target.name]:event.target.value
  //   }
  //   setComment(newComment)
  //   }
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     await axios.post(`/api/london-parks-api/${_id}/comments`, comment, 
  //     {
  //       headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }, // need to send the token on the headers object
  //     }
  //     )
  //   } catch (err) {
  //     console.log(err)
    // }
  


//   return (
//     <>
//     <Container>
//       <Container>
//         <Comment.Group>
//           <Header as='h3' dividing>Comments</Header>
//           <Comment>
//             <Comment.Content>
//               <Comment.Author as='a'>Mariana</Comment.Author>
//               <Comment.Metadata>
//                 <div>Hard coded Today at 5:42PM</div>
//               </Comment.Metadata>
//               < Comment.Text>Hard coded comment!</Comment.Text>
//               <Grid.Row>
//                 <Comment.Actions>
//                   <Comment.Action>Reply</Comment.Action>
//                 </Comment.Actions>
//                 <Comment.Actions>
//                   <Comment.Action>Edit</Comment.Action>
//                 </Comment.Actions>
//                 <Comment.Actions>
//                   <Comment.Action>Delete</Comment.Action>
//                 </Comment.Actions>
//               </Grid.Row>
//             </Comment.Content>
//           </Comment>
//           <Form reply>
//             <Form.TextArea />
//             <Button content='Add Reply' labelPosition='left' icon='edit' />
//           </Form>
//         </Comment.Group>
//       </Container>
//     </Container>
//     </>
//   )
// }
// export default UserComment