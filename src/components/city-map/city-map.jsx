import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

const MAP_CONFIG = {
  zoom: 12,
  zoomControl: false,
  marker: true
};

const ICON_CONFIG = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 40]
};

export const CityMap = (props) => {

  const {offers, city} = props;
  console.log('offers',offers, city)

  const mapConfig = Object.assign({}, MAP_CONFIG, {center: city.location})

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current = leaflet.map('map', mapConfig);

    mapRef.current.setView(mapConfig.center, mapConfig.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      detectRetina: true,
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(mapRef.current);
  }),[];


  useEffect(() => {
    const handleAddPinOnMap = (offerCords) => {
      const icon = leaflet.icon(ICON_CONFIG);

      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);
    };

    for (let i = 0; i < offers.length; i++) {
      handleAddPinOnMap(offers[i].location[i]);
    }
  }, [offers]);

  return (
    <section className="cities__map">
      <div id="map"  style={{height: `800px`}}></div>
    </section>
  );
};

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.array.isRequired,
  })).isRequired,
};
