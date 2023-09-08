import './index.css'

const ImageItems = props => {
  const {imagesList, getThumbId} = props

  const {thumbnailUrl, id} = imagesList

  const sendThumbId = () => {
    getThumbId(id)
  }

  return (
    <li>
      <button onClick={sendThumbId} className="match-thumb-btn" type="button">
        <img className="image-li" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItems
