// import React from "react";
// import Maps from '../Maps/maps';
 
// const Popup = props => {
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}></span>
//         {props.content}
//        <Maps></Maps>
//       </div>
//     </div>
//   );
// };
 
// export default Popup;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react'
// import 'google-map-react/dist/index.css'

import KALIMANTAN from './data';

import Marker from './marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Popup = props => {
  const [places, setPlaces] = useState([])

  const fetchPlaces = async () => {
    fetch('places.json')
    .then((response) => response.json())
    .then((data) => setPlaces(data.results))
  }

  useEffect(() => {
    fetchPlaces();
  }, [])

  if (!places || places.length === 0) {
    return null;
  }
  console.log('=============================')

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}></span>
        {props.content}
        
        <Wrapper>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={{KALIMANTAN
        }}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
      </div>
    </div>
  );
}

export default Popup
