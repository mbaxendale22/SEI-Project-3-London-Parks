import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Divider, Grid, GridColumn, Icon, Header, Image, Reveal, RevealContent, Segment } from 'semantic-ui-react'
import { motion } from 'framer-motion'
import axios from 'axios'



const ParkCard = ({ _id, title, images, postcode, activities, url }) => {


  const history = useHistory()
  const location = useLocation()
  const [ park, setPark ] = useState(null)

const activeUpper = activities.map(x => `${x.charAt(0).toUpperCase()}${x.slice(1, x.length)} ` )
const activityList = activeUpper.join(' ')

useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(`/api/london-parks-api/${_id}`)
    setPark(data)
  }
  getData()
}, [_id])

const getAverage = () => {
  const ratings = park.comments.map(c => c.rating)
    const aveRating = ratings.reduce((a, b) => a + b, 0)
    return aveRating/ratings.length
}


useEffect(() => {
}, [location.pathname, _id])

  return (
    <>
    { park && 
      <motion.div 
      whileHover={{ scale: 1.1 }} 
      initial={{x: '-100vw'}}
      animate={{x:0}}
      >
        <Container textAlign='center' key={_id} >
          <Segment piled raised>
            <Grid columns={2} divided>
              <GridColumn onClick={() => history.push(`/parks/${_id}`)}>
                <Reveal animated='move' instant>
                  <RevealContent visible>
                    <Image src={images[0]} alt={title} rounded fluid size='big'></Image>
                  </RevealContent>
                  <RevealContent hidden>
                    <Image src={images[1]} alt={title} rounded fluid size='big'></Image>
                  </RevealContent>
                </Reveal>
              </GridColumn>
              <GridColumn>
                <motion.div whileHover={{ scale: 1.5 }} >
                  <Header as='h3' icon textAlign='center' inverted color='red'>
                    <Icon name='hand point down outline' />
                    <Header.Content>{title}</Header.Content>
                    </Header>
                </motion.div>
                <Divider hidden/>
                <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                  <Header as='h3' icon textAlign='center' inverted color='blue'>
                    <Icon name='home' />
                    <Header.Content>{postcode}</Header.Content>
                  </Header>
                </motion.div>
                <Divider hidden/>
              {
                isNaN(getAverage()) ? 
                <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                  <Header as='h3' icon textAlign='center' color='yellow'>
                    <Icon name='star outline' />
                    <Header.Content>Be the first to rate this park!</Header.Content>
                  </Header>
                </motion.div>
                :
                <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                  <Header as='h3' icon textAlign='center' color='yellow'>
                    <Icon name='star outline' />
                    <Header.Content>Average Rating</Header.Content>
                    <Header.Content>{getAverage()}</Header.Content>
                  </Header>
                </motion.div>
              }
              </GridColumn>
            </Grid>
          </Segment>
          <Divider hidden/>
        </Container>
      </motion.div>

    }
    
    
    
    
    </>
  )
}
export default ParkCard