import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header, Divider, Grid, Segment, Container, GridColumn } from 'semantic-ui-react'

import Favourite from './Favourite.js'
import Weather from './Weather.js'
import { ToastContainer, Flip } from 'react-toastify'
import ReactMapGl from 'react-map-gl'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Planner  from './Planner.js'
import ParkInfo from './ParkInfo'
import Activities from './Activities'
import { UserComment } from './UserComment'

const ParkPage = () => {

  const { id } = useParams()
  const [park, setPark] = useState(null)
  // const [imageURL, setImageURL] = useState('')
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [newComment, setNewComment] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data: park } = await axios.get(`/api/london-parks-api/${id}`)
      setPark(park)
      setLat(parseFloat(park.latitude))
      setLong(parseFloat(park.longitude))
    }
    getData()
  }, [id, newComment])

  
  return (
    <>
      {park &&
      <><Header as='h1' color='olive' textAlign='center' id='parkHeader'>
          <Header.Content>{park.title}</Header.Content>
        </Header>
        <Container>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2500}
            transitionTime={1000}
            autoFocus={true}
            swipeable={true}
          >{park.images.map(image => <img src={image} alt={park.title}></img>)}
          </Carousel>
        </Container>
        <Divider hidden/>
        <Container>
          <Header as='h3' color='olive'><b>Description</b></Header>
          <Container>{park.description}</Container>

          <Weather park={park}/>

            <Grid columns={3}>
              <Grid.Column>
                <ParkInfo park={park} />
                <Favourite park={park} id={id} />
              </Grid.Column>
              <GridColumn>
                <Planner park={park} />
              </GridColumn>
              <Grid.Column>
                <Activities park={park} />
              </Grid.Column>
            </Grid>
              
            <Segment raised color='olive'>
              <ReactMapGl
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                height='30em'
                width='100%'
                mapStyle='mapbox://styles/mapbox/streets-v11'
                zoom={13}
                latitude={lat}
                longitude={long}
              />
            </Segment>

            <Segment basic />


            <Container>
              <UserComment id={id}/>
            </Container>



          <Divider />
        </Container>
      </>
      }
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Flip}
      />
      <Segment size='massive' inverted color='olive'></Segment>
    </>
  )
}

export default ParkPage