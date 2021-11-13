import react from 'react'
import axios from 'axios'
import { Image, Input } from 'semantic-ui-react'

const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    // console.log(data)
    const response = await axios.post(uploadURL, data)
    // console.log(response)
    handleImageUrl(response.data.url)
  }
  return (
    <>
      <label>Profile Picture</label>
      {value ?
        <Image src={value} alt='Choosen image' />
        :
        <Input
          name='profilePicture'
          type='file'
          onChange={handleUpload} />
      }
    </>
  )
}
