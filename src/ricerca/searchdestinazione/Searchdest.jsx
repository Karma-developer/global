
import './Searchbar.css'
import React, {useState} from "react";
import axios from "axios";
import {FaSearch} from "react-icons/fa";

export const SearchDest = ({setResults}) => {
const [input, setInput] = useState([])

const [search, setSearch] = useState("")

const headers = {
  'Content-Type' : 'application/json',
  'agency-code' : '1258',
  'agency-user-name' : 'WSV2GLOB',
  'agency-password' : 'WSV2GLOB',
  'agency-signature' : '456!53@3',
}

const BaseUrl ='https://devsrv.liknoss.com/cws/resources/web-services/v200/b2c/locations'

const fetchData = (value)=> {
fetch(BaseUrl, {headers}).then((response)=> response.json()).then((json)=> {
  const results =json.filter((user)=> { 
return user && user.name && user.name.toLowerCase().includes(value)
  });
  setResults(results);
})
}
const handleChange = (value) => {
setInput(value);
fetchData(value);
}


return (
    <div>
        <input placeholder='Cerca' value = {input} onChange={(e)=> handleChange(e.target.value)}/>
    </div>
) }
export default SearchDest;