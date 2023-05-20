import React from 'react'
import Searchres from './Searchres'
import './Searchresults.css'

const Searchlist = ({results}) => {
  return (
    <div className='result-list'>
      {
        results.map((result, id)=> {
            return <Searchres result={result} key= {id}/>
        })
      }
    </div>
  )
}

export default Searchlist
