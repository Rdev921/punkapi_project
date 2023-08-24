import React from 'react'

const DataCard = ({ name, tagline, description, image_url, abv, ibu, ph }) => {
  return (
    <div className="card">
      <img src={image_url} alt="image" className='card-img' />
      <h2>Name: {name}</h2>
      <h3>TagLine: {tagline}</h3>
      <p>Description: {description}</p>
      <p>Abv :{abv}</p>
      <p>Ibu :{ibu}</p>
      <p>Ph: {ph}</p>
    </div>

  )
}

export default DataCard