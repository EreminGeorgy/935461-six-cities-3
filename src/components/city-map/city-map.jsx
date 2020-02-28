import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

const MAP_CONFIG = {
  center: [52.38333, 4.9],
  zoom: 12,
  zoomControl: false,
  marker: true
};

const ICON_CONFIG = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 40]
};

export const CityMap = (props) => {

  const mapRef = useRef(null);
  const {offers} = props;

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = leaflet.map(mapRef.current, MAP_CONFIG);

    map.setView(MAP_CONFIG.center, MAP_CONFIG.zoom);

    const handleAddPinOnMap = (offerCords) => {
      let icon = leaflet.icon(ICON_CONFIG);

      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    };

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        detectRetina: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(map);

    for (let i = 0; i < offers.length; i++) {
      handleAddPinOnMap(offers[i].location);
    }

    // return () => {
    //   map = null;
    // };
  }, [offers]);

  return (
    <section className="cities__map">
      <div id="map" ref={mapRef} style={{height: `800px`}}></div>
    </section>
  );
};

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.array.isRequired,
  })).isRequired,
};
