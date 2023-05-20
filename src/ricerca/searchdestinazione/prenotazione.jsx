import React from 'react'
export default class Prenotazione extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
        }

    }
    render(){

  return (
    <div class="flight-card">
   <div class="flight-card-header">
     <div class="flight-data">
         <div class="passanger-details">
           <span class="title">{this.props.location.state.partenza}</span>
           <span class="detail">John Doe</span>
         </div>
         <div class="passanger-depart">
           <span class="title">Depart</span>
           <span class="detail">09:30 AM</span>
         </div>
         <div class="passanger-arrives">
           <span class="title">Arrives</span>
           <span class="detail">18:30 PM</span>
         </div>
       </div>
   </div>
  <div class="flight-card-content">
    <div class="flight-row">
      <div class="flight-from">
        <span class="from-code">TIA</span>
        <span class="from-city">Tirane, Albania</span>
      </div>
      <div class="flight-to">
        <span class="to-code">MUC</span>
        <span class="to-city">Munich, Germany</span>
      </div>
    </div>
    <div class="flight-details-row">
      <div class="flight-operator">
        <span class="title">OPERATOR</span>
        <span class="detail">Jetblue Airways</span>
      </div>
      <div class="flight-number">
        <span class="title">FLIGHT</span>
        <span class="detail">JT22554D</span>
      </div>
      <div class="flight-class">
        <span class="title">CLASS</span>
        <span class="detail">Economy</span>
      </div>
    </div>
  </div>
</div>
  )
}}


