
import './Searchbar.css'
import React, {useState} from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import {Link} from 'react-router-dom';

import { Col, Form, FormGroup, Row } from "reactstrap";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';


import { format } from "date-fns";
import { useForm } from "react-hook-form";
import Searchlist from './Searchlist';


export const SearchBa = ({setResults}) => {

  const [show, setShow] = useState(false);
const [input, setInput] = useState([])

const [dataInizio, setDataInizio] = useState('');
const [dataFine, setDataFine] = useState('');
const [adulti, setAdulti] = useState(0);
const [bambini, setBambini] = useState(0);
const [inputa, setInputa] = useState([])

const [search, setSearch] = useState("")

const headers = {
  'Content-Type' : 'application/json',
  'agency-code' : '1258',
  'agency-user-name' : 'WSV2GLOB',
  'agency-password' : 'WSV2GLOB',
  'agency-signature' : '456!53@3',
}

const BaseUrl ='https://devsrv.liknoss.com/cws/resources/web-services/v200/b2c/locations'
const BaseUrla ='https://devsrv.liknoss.com/cws/resources/web-services/v200/b2c/booking'
//per partenza
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

//per destinazione
const fetchDest = (valore)=> {
  fetch(BaseUrl, {headers}).then((response)=> response.json()).then((json)=> {
    const risultati =json.filter((user)=> { 
  return user && user.name && user.name.toLowerCase().includes(valore)
    });
    setResults(risultati);
  })
  }
  const handleDest = (valore) => {
  setInputa(valore);
  fetchDest(valore);
  }
  const handleChangeb = event => {
    setDataInizio(event.target.value);

    console.log('giorno partenza', event.target.value);
  };
  function handleClick() {
    
    // Send data to the backend via POST
    fetch(BaseUrla, {headers}, {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(dataTobeSaved) // body data type must match "Content-Type" header

    }); alert('Hai prenotato con successo per il' +JSON.stringify(dataTobeSaved) + 'Questa è un api di test, quindi non verrà generato nessun biglietto nella sezione, anche se la chiamata è stata effetuata')
    
  }
  
  const handleChangec = event => {
    setDataFine(event.target.value);

    console.log('giorno ritorno', event.target.value);
  };
  const handleChanged = event => {
    setAdulti(event.target.value);

    console.log('numero adulti:', event.target.value);
  };
  const handleChangee = event => {
    setBambini(event.target.value);

    console.log('numero bambini:', event.target.value);
  };



  const dataTobeSaved = {
    agencycode : '1258',
    agencyusername : 'WSV2GLOB',
    agencypassword : 'WSV2GLOB',
    agencysignature : '456!53@3',
    partenza: {input},
    arrivo: {inputa},
    giornopartenza: {dataInizio},
    giornoritorno: {dataFine},
    adulti: {adulti},}
return (

<Col lg="12">
       
        
                  
      <form >
        
        <Form className="d-flex align-items-center gap-4">
       
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Partenza</h6>
              <input placeholder='Partenza' value = {input} onChange={(e)=> handleChange(e.target.value)}/>
              
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Destinazione</h6>
              <input placeholder='Destinazione' value = {inputa} onChange={(e)=> handleDest(e.target.value)}/>
               
             
              
            </div>
          </FormGroup>
          <div className="flex space-x-2">
                  {/* departure section */}
                  <div>
                    <div>
                      <div className="relative">
                        <h6 className="font-bold text-xl uppercase">
                          Data partenza
                        </h6>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={dataInizio}
                          onChange={handleChangeb}
                       
                          className={`w-full h-16 text-2xl rounded-lg 
                         `}
                          
                        />
                      </div>
                      <div>
                      
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="flex space-x-2">

                  {/* return section */}
                  <div>
                    <div>
                      <div className="relative">
                        <h6 className="font-bold text-xl uppercase">
                          Ritorno
                        </h6>
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full h-16 text-2xl rounded-lg `}
                          value={dataFine}
                          onChange={handleChangec}
                  
                        />
                      </div>
                      <div>
                    
                      </div>
                    </div>
                  </div>
                </div>
          <Col>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>N. Adulti</h6>
              <input
        type="number"
        id="message"
        name="message"
        value={adulti}
        onChange={handleChanged}
       
        min={0}
      />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>N. Bambini</h6>
              <input
        type="number"
        id="message"
        name="message"
        value={bambini}
        onChange={handleChangee}
        min={0}
      />
            </div>
          </FormGroup>
          </Col>

          <span className="search__icon" type="submit" >
         <i class="ri-search-line"></i><button  onClick={handleClick}>c</button>
          </span>
        </Form>
        </form>
        
      
    </Col>
) }
export default SearchBa;