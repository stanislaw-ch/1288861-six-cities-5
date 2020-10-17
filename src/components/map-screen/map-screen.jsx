import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class MapScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" ref={this._mapRef} style={{height: `100%`}} />
      </section>
    );
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    })
    .addTo(map);

    this.props.coordinates.forEach((item) => {
      leaflet
        .marker(item, {icon})
        .addTo(map);
    });
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

export default MapScreen;
