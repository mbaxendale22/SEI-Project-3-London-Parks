import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'


const UserProfile = () => {

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      setUserInfo(data)
    }
    getData()
  }, [])

  return (
    <>
      <h1>User Name: {userInfo.username}</h1>
      <h1>User email: {userInfo.email}</h1>
      <h1>User id: {userInfo._id}</h1>
    </>

  )
}

export default UserProfile