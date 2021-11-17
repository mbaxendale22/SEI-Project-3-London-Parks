import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Segment, Grid,  Divider } from 'semantic-ui-react'
import moment from 'moment'

const Weather = ({ park }) => {
  const [weather, setWeather] = useState([])
  const [weatherDescription, setWeatherDescription] = useState([])
  const [weatherTemp, setWeatherTemp] = useState([])
  const [hasError, setHasError] = useState(false)
  const [sunRise, setSunRise] = useState([])
  const [sunSet, setSunSet] = useState([])
  const [humidity, setHumidity] = useState([])
  const [tommorowDescription, setTommorowDescription] = useState([])
  const [tommorowTemp, setTommorowTemp] = useState([])
  const [tommorowHumidity, setTommorowHumidity] = useState([])
  const [tommorowSunRise, setTommorowSunRise] = useState([])
  const [tommorowSunSet, setTommorowSunSet] = useState([])
  const [afterTommorowDescription, setAfterTommorowDescription] = useState([])
  const [afterTommorowTemp, setAfterTommorowTemp] = useState([])
  const [afterTommorowHumidity, setAfterTommorowHumidity] = useState([])
  const [afterTommorowSunRise, setAfterTommorowSunRise] = useState([])
  const [afterTommorowSunSet, setAfterTommorowSunSet] = useState([])
// const APIkey = aac79f7437159960c7f5b86c296e60a3


useEffect(() => {
  if (!park) return 
  const getData = async() => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${park.latitude}&lon=${park.longitude}&units=metric&exclude=minutely,hourly&appid=aac79f7437159960c7f5b86c296e60a3`)
    setWeather(data)
    setWeatherDescription(data.current.weather[0].description.toUpperCase())
    setWeatherTemp(data.current.temp)
    setSunRise(data.current.sunrise)
    setSunSet(data.current.sunset)
    setHumidity(data.current.humidity)
    setTommorowDescription(data.daily[1].weather[0].description.toUpperCase())
    setTommorowTemp(data.daily[1].temp.day)
    setTommorowHumidity(data.daily[1].humidity)
    setTommorowSunRise(data.daily[1].sunrise)
    setTommorowSunSet(data.daily[1].sunset)
    setAfterTommorowDescription((data.daily[2].weather[0].description).toUpperCase())
    setAfterTommorowTemp(data.daily[2].temp.day)
    setAfterTommorowHumidity(data.daily[2].humidity)
    setAfterTommorowSunRise(data.daily[2].sunrise)
    setAfterTommorowSunSet(data.daily[2].sunset)

    // console.log('RESPONSERESPONSE', data)
    } catch(err) {
      setHasError(true)
    }
    
  }
    getData()
  }, [])
  
return (
  <>
    <Segment id='weather-main'>
      <Grid columns={3}>
        <Grid.Column>
          <Segment id='header-main' basic>Weather Forcast</Segment>
        </Grid.Column>
        
      </Grid>

      <Segment  id='blue-segment'>
        <Grid columns={3}>
          <Grid.Column id='weather-column'>
            <p id='day' >{moment().format('dddd')}</p>
            <p id='day'>{moment().format('LL')}</p>
            <Segment id='description' basic >{weatherDescription}</Segment>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Temperature: {Math.round(weatherTemp)} &deg;C</p>
            <p id='day'>Humidity: {humidity} %</p>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Sunrise: {new Date(sunRise * 1000).toLocaleTimeString('en-IN')}</p>
            <p id='day'>Sunset: {new Date(sunSet * 1000).toLocaleTimeString('en-IN')}</p>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid columns={3}>
          <Grid.Column id='weather-column'>
            <p id='day'>{moment().add(1,'days').format('dddd')}</p>
            <p id='day'>{moment().add(1,'days').format('LL')}</p>
            <Segment id='description'basic >{tommorowDescription}</Segment>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Temperature: {Math.round(tommorowTemp)} &deg;C</p>
            <p id='day'>Humidity: {tommorowHumidity} %</p>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Sunrise: {new Date(tommorowSunRise * 1000).toLocaleTimeString('en-IN')}</p>
            <p id='day'>Sunset: {new Date(tommorowSunSet * 1000).toLocaleTimeString('en-IN')}</p>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid columns={3}>
          <Grid.Column id='weather-column'>
            <p id='day'>{moment().add(2,'days').format('dddd')}</p>
            <p id='day'>{moment().add(2,'days').format('LL')}</p>
            <Segment id='description'basic >{afterTommorowDescription}</Segment>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Temperature: {Math.round(afterTommorowTemp)} &deg;C</p>
            <p id='day'>Humidity: {afterTommorowHumidity} %</p>
          </Grid.Column>
          <Grid.Column>
            <p id='day'>Sunrise: {new Date(afterTommorowSunRise * 1000).toLocaleTimeString('en-IN')}</p>
            <p id='day'>Sunset: {new Date(afterTommorowSunSet * 1000).toLocaleTimeString('en-IN')}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment>   
  </>
)
}
export default Weather