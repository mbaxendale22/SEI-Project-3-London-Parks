import react from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Divider, Grid, GridColumn, Icon, Header, Image, Reveal, RevealContent, Segment } from 'semantic-ui-react'
import { motion } from 'framer-motion'
const ParkCard = ({ _id, title, images, postcode, activities, url }) => {
  const history = useHistory()

const activeUpper = activities.map(x => `${x.charAt(0).toUpperCase()}${x.slice(1, x.length)} ` )
const activityList = activeUpper.join(' ')
console.log(activityList)


  return (
    <motion.div 
    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
    initial={{x: '-100vw'}}
    animate={{x:0}}
    >
      <Container textAlign='center' key={_id} >
        <Segment piled raised>
          <Grid columns={2} divided onClick={() => history.push(`/parks/${_id}`)}>
            <GridColumn>
              <Reveal animated='move' instant>
                <RevealContent visible>
                  <Image src={images[0]} alt={title} fluid rounded size='big'></Image>
                </RevealContent>
                <RevealContent hidden>
                  <Image src={images[1]} alt={title} fluid rounded size='big'></Image>
                </RevealContent>
              </Reveal>
            </GridColumn>
            <GridColumn>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Header as='h3' icon textAlign='center' inverted color='red'>
                  <Icon name='hand point down outline' />
                  <Header.Content>{title}</Header.Content>
                </Header>
              </motion.div>
              <Divider />
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Header as='h3' icon textAlign='center' inverted color='blue'>
                  <Icon name='home' />
                  <Header.Content>{postcode}</Header.Content>
                </Header>
              </motion.div>
              <Divider />
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Header as='h3' icon textAlign='center' color='teal'>
                  <Icon name='futbol' />
                  <Header.Content>{activityList}</Header.Content>
                </Header>
              </motion.div>
              {/* <h5>{url}</h5> */}
            </GridColumn>
          </Grid>
        </Segment>
        <Divider />
      </Container>
    </motion.div>
  )
}
export default ParkCard