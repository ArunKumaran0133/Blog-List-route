import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem

  return (
    <li>
      <div className="title-date-container">
        <h1 className="title-text">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description-text">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
