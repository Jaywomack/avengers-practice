import React from 'react'

import avengers from '..//avengersData'

const AvengerPage = (props) => {
  const id = props.match.params.id
  const avenger = avengers.find(avenger => `${avenger.id}` === id)
  return (
    <div>
      <img className='character-img' src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
        <p>{CharacterData.description}</p>
      </div>
    </div>
  )
}

export default AvengerPage