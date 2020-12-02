// Page with cat's details and button "Make an appointment to adopt"
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import "./CatDetailsPage.css";
import API from "../../api/apiCats.js";
import Popup from "../../components/popup/Popup.js";
import Illu from '../../assets/cat.png';
  
function CatDetailsPage(props) {
  const { catId } = useParams();
  const [showPopup, togglePopup] = useState(false);
  const history = useHistory();
  let [appointmentDate, getDatasDate] = useState(null);
  let [appointmentHour, getHourDate] = useState(null);
  const cat = props.catsDatas.find(catObj => catObj.id === catId);

  // Take appointment and recup date from API
  function reservation() {
    API.makeAppoint(catId).then(data => {
      getDatasDate(appointmentDate = getDate(data.appointment))
      getHourDate(appointmentHour = getHour(data.appointment))
      togglePopup(!showPopup);
    })
    .catch(error => { console.log(error)})
  }

  // Convert date to correct format dd/MM/YY
  function getDate(dateISO){ 
    let appointmentDate = new Date(dateISO);
    const date = appointmentDate.getDate() +'/' + appointmentDate.getMonth() + '/'+ appointmentDate.getFullYear();
    return date;
  }

  // Convert hour to correct format
  function getHour(dateISO){ 
    let appointmentHour = new Date(dateISO);
    return appointmentHour.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  }
  
  // Go to cats' gallery
  const goGallery = () => {
    history.push("/");
  }

  return (
    <div className="details">
      <Icon id="homeIcon" name='home' size='big' color='teal' onClick={goGallery}/>
      <img id="illustration" src={Illu}  alt="illustration chat" />
      <img id="catPhoto" src={cat.picturePath} alt={cat.name} />
      <div className="left">
        <div className="infos">
          <h2 id="nameCat">{cat.name}</h2>
          <p className="catSpec">{cat.birthdate}</p>
          <p className="catSpec">{cat.gender}</p>
          <p className="catSpec">{cat.breed}</p>
        </div>
        <button onClick={reservation} type="button" id="buttonReservation"> Make an appointment to adopt </button>
        {showPopup ? <Popup dateReserved={appointmentDate} hourReserved={appointmentHour} catReserved={cat} closePopup={() => togglePopup(!showPopup)}/> : null }
      </div>
    </div>
  );
}
  
export default CatDetailsPage;