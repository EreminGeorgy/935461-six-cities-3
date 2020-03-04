import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

const MAP_CONFIG = {
  zoom: 12,
  zoomControl: false,
  marker: true,
  layers: [
    leaflet.tileLayer(`http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      detectRetina: true,
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }),
  ]
};

const ICON_CONFIG = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 40]
};

export const CityMap = (props) => {

  const {offers, city} = props;
  let mapRef = useRef(null);

  const mapConfig = Object.assign({}, MAP_CONFIG, {center: city.location});

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet.map(`mapId`, mapConfig);
    }
    mapRef.current.setView(mapConfig.center, mapConfig.zoom);

  }, [mapConfig.center]);

  useEffect(() => {
    const handleAddPinOnMap = (offerCords) => {
      const icon = leaflet.icon(ICON_CONFIG);

      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);
    };

    for (let i = 0; i < offers.length; i++) {
      handleAddPinOnMap(offers[i].location);
    }
  }, [offers]);

  return <section className="cities__map">
    <div id="mapId" style={{height: `800px`}}></div>
  </section>;
};

CityMap.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.array.isRequired,
  }),
  offers: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.array.isRequired,
  })).isRequired,
};
