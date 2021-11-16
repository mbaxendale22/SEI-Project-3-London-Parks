import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import { Header, Image, Button, Container, Card } from 'semantic-ui-react'




const Home = () => {
  return (
    <>

    <Header as='h1' color='green' textAlign='center' id='homeHeader'>
      Best London Parks
    </Header>
    <Container>
      <Card.Group>
        <Card color='green'>
          <Image src='https://www.parkgrandlancastergate.co.uk/blog/wp-content/uploads/2018/01/hyde-poark-2.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Link to={{ pathname: '/parks' }}>
                <Button fluid color='olive'>All Parks</Button>
              </Link>
            </Card.Header>
          </Card.Content>
        </Card>

        <Card color='green'>
          <Image src='https://cdn.shopify.com/s/files/1/0014/0633/7135/articles/primrose_hill_1200x.jpg?v=1532604924' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
            <Link to={{ pathname: '/parks/region', state: 'North%20London' }}>
              <Button  fluid color='olive'>North London</Button>
            </Link>
            </Card.Header>
          </Card.Content>
        </Card>

        <Card color='green'>
          <Image src='https://i0.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/12/shutterstock_156450068.jpg?fit=1000%2C667&ssl=1' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
            <Link to={{ pathname: '/parks/region', state: 'East%20London' }}>
              <Button fluid color='olive'>East London</Button>
            </Link>
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
      
    <Container>
      <Card.Group>
        <Card color='green'>
          <Image src='https://www.london-forever.com/wp-content/uploads/2020/09/hyde-park.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
            <Link to={{ pathname: '/parks/region', state: 'Central%20London' }}>
              <Button fluid color='olive'>Central London</Button>
            </Link>
            </Card.Header>
          </Card.Content>
        </Card>

        <Card color='green'>
          <Image fluid src='https://img.locationscout.net/images/2019-05/richmond-park-london-uk-united-kingdom_l.jpeg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
            <Link to={{ pathname: '/parks/region', state: 'South%20London' }}>
              <Button fluid color='olive'>South London</Button>
            </Link>
            </Card.Header>
          </Card.Content>
        </Card>

        <Card color='green'>
          <Image src='https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2018/02/18150424/22637281_1082893518480502_4132483769749733376_n-2.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>
            <Link to={{ pathname: '/parks/region', state: 'West%20London' }}>
              <Button  fluid color='olive'>West London</Button>
            </Link>
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
    </>
  )
}
export default Home