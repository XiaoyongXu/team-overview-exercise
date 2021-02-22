import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
} from 'reactstrap'
import './card.scss'

const CardItem = ({ style, title, subTitle, index, onClick }) => {
  return (
    <button
      className="card-root"
      type="button"
      onClick={onClick}
      style={style}
      data-testid="card"
    >
      <Card>
        <CardImg top width="100%" src={`https://picsum.photos/id/${index}/260/216`} alt="Card image cap" />
        {(title || subTitle) && <CardBody>
          {title && <CardTitle tag="h5">{title}</CardTitle>}
          {subTitle && <CardSubtitle style={{ fontSize: 12, color: 'gray' }}>{subTitle}</CardSubtitle>}
        </CardBody> }
      </Card>
    </button>
  )
}

export default CardItem