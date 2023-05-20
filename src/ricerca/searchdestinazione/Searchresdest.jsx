import React from 'react'

const Searchresdest = ({risultato}) => {
  return (
    <div className='search-result' onClick={(e) => alert('hai cliccato su ${result}')}>
      {risultato.name}
    </div>
  )
}

export default Searchresdest
