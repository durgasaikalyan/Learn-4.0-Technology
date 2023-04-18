// Write your code here.
import './index.css'

const TechnologyCardItem = props => {
  const {bannerCard} = props
  const {title, description, imgUrl, className} = bannerCard
  return (
    <div>
      <li className={`bannerCardsList ${className}`}>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-img" />
      </li>
    </div>
  )
}

export default TechnologyCardItem
