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

const Maps = () => {
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

  return (
    <Wrapper>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={KALIMANTAN}
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
  )
}

export default Maps
