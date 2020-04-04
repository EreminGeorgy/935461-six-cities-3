import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

const MAP_CONFIG = {
  zoom: 12,
  zoomControl: false,
  marker: true,
};

const ICON_CONFIG = {
  iconSize: [30, 40],
};

const PIN_TYPE = {
  ACTIVE: `img/pin-active.svg`,
  DISABLED: `img/pin.svg`,
};

const NEIGHBOURS = 3;

export const CityMap = (props) => {

  const {offers, city, activeCard, path, currentOfferCoords} = props;
  let mapRef = useRef(null);

  const mapConfig = {
    ...MAP_CONFIG,
    center: city.locations,
    layers: [
      leaflet.tileLayer(`http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        detectRetina: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }),
    ]
  };

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet.map(`mapId`, mapConfig);
    }
    mapRef.current.setView(mapConfig.center, mapConfig.zoom);

  }, [city]);

  useEffect(() => {
    const handleAddPinOnMap = (offerCords, id) => {
      const icon = leaflet.icon({...ICON_CONFIG, iconUrl: `${!!path ? path : ``}${activeCard === id ? PIN_TYPE.ACTIVE : PIN_TYPE.DISABLED}`});
      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);
    };

    for (let i = 0; i < offers.length; i++) {
      handleAddPinOnMap(offers[i].locations, offers[i].id);
    }
  }, [offers, activeCard]);

  useEffect(() => {

  if (currentOfferCoords) {
    const iconCurrent = leaflet.icon({...ICON_CONFIG, iconUrl: `${path}${PIN_TYPE.ACTIVE}`});
    leaflet
      .marker(currentOfferCoords, {icon: iconCurrent})
      .addTo(mapRef.current);
  }
}, [currentOfferCoords]);

  return <section className={offers.length > NEIGHBOURS ? `cities__map` : `property__map`}>
    <div id="mapId" style={{height: `580px`}}></div>
  </section>;
};

CityMap.propTypes = {
  activeCard: PropTypes.number,
  path: PropTypes.string,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
  }),
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    locations: PropTypes.array.isRequired,
  })).isRequired,
  currentOfferCoords: PropTypes.array,
};
