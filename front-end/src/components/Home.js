import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import { Header, Segment, Image, Divider, Button, Container } from 'semantic-ui-react'




const Home = () => {
  // toast.success('Welcome to London Parks!', {
  //   position: toast.POSITION.TOP_CENTER
  // })



  return (
    <><Header size='huge' textAlign='center' color='green'>
      Best London Parks
    </Header><Segment>
        <Image src={'https://img2.goodfon.com/wallpaper/nbig/4/be/richmon-park-london-angliia-osen-oleni.jpg'} fluid rounded>
        </Image>
      </Segment><Segment>
        <Button.Group basic color='green'>

          <Link to={{ pathname: '/parks' }}>

            <Button color='green'>All Parks</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'North%20London' }}>
            <Button>North London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'Central%20London' }}>
            <Button>Central London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'East%20London' }}>
            <Button>East London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'South%20London' }}>
            <Button
            >South London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'West%20London' }}>
            <Button
            >West London</Button>
          </Link>
        </Button.Group>
      </Segment><Divider /><Segment inverted color='green'></Segment><Divider /><Header size='huge' color='olive' textAlign='center'>
        Best London Parks
      </Header><Container>
        <Button.Group basic color='olive'>

          <Link to={{ pathname: '/parks' }}>

            <Button color='green'>All Parks</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'North%20London' }}>
            <Button>North London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'Central%20London' }}>
            <Button>Central London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'East%20London' }}>
            <Button>East London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'South%20London' }}>
            <Button
            >South London</Button>
          </Link>

          <Link to={{ pathname: '/parks/region', state: 'West%20London' }}>
            <Button
            >West London</Button>
          </Link>
        </Button.Group>
      </Container><Segment>
        <div>
          <Image.Group size='medium'>
            <Image src={'https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2018/01/hyde-poark-2.jpg'} id='homeImg' />
            <Image src={'https://www.uktourcenter.com/wp-content/uploads/2016/05/Regents-Park-London-UK-1024x576.jpeg'} id='homeImg' />
            <Image src={'https://img2.goodfon.com/wallpaper/nbig/4/be/richmon-park-london-angliia-osen-oleni.jpg'} id='homeImg' />
          </Image.Group>
          <Divider hidden />
          <Image.Group size='medium'>
            <Image src={'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2017/10/18164038/walthamstow-wetlands.jpg'} id='homeImg' />
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/5/5c/II_Chelsea_Physic_Garden%2C_London%2C_UK.jpg'} id='homeImg' />
            <Image src={'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2018/02/18150424/22637281_1082893518480502_4132483769749733376_n-2.jpg'} id='homeImg' />
          </Image.Group>
        </div>
      </Segment><Segment inverted color='olive'></Segment>

      {/* <Link to={{ pathname: '/parks' }}>
        <button>All Parks</button>
      </Link>

      <Link to={{ pathname: '/parks/region', state: 'North%20London' }}>
        <button>North London</button>
      </Link>

      <Link to={{ pathname: '/parks/region', state: 'Central%20London' }}>
        <button>Central London</button>
      </Link>

      <Link to={{ pathname: '/parks/region', state: 'East%20London' }}>
        <button>East London</button>
      </Link>

      <Link to={{ pathname: '/parks/region', state: 'South%20London' }}>
        <button>South London</button>
      </Link>
          
      <Link to={{ pathname: '/parks/region', state: 'West%20London' }}>
        <button>West London</button>
      </Link> */}
      </>
  )
}
export default Home