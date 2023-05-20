import React from 'react'

const Searchres = ({result}) => {
  return (
    <div className='search-result'>
      <button type='button' >{result.name}</button>
    </div>
  )
}

export default Searchres
