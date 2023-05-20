import React from 'react'
import Searchres from './Searchres'
import './Searchresults.css'

const Searchlistdest = ({risultati}) => {
  return (
    <div className='result-list'>
      {
        risultati.map((risultato, id)=> {
            return <Searchres result={risultato} key= {id}/>
        })
      }
    </div>
  )
}

export default Searchlistdest
