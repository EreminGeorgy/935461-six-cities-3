import React from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

export class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  _handleAddPinOnMap(offerCords) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });

    leaflet
      .marker(offerCords, {icon})
      .addTo(this.map);
  }

  componentDidMount() {
    if (!this.mapRef.current) {
      return;
    }
    const {offers} = this.props;

    const city = [52.38333, 4.9];
    const staticZoom = 12;

    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom: staticZoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, staticZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        detectRetina: true,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(this.map);

    for (let i = 0; i < offers.length; i++) {
      this._handleAddPinOnMap(offers[i].location);
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    return <section className="cities__map">
      <div id="map" ref={this.mapRef} style={{height: `800px`}}></div>
    </section>;
  }
}

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.array.isRequired,
  })).isRequired,
};
