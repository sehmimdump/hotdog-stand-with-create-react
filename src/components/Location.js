import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import '../styles/menu.sass';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="location" style={{ height: '100vh', width: '100%', padding : '0 0 200px 0' }}>

        <div>
            <h1 className="menu-header">
                Locations
            </h1>
        </div>

        <GoogleMapReact
          bootstrapURLKeys={{ 
              key:'AIzaSyANCeyMw3Y82GWquW6R1wfRAXRqHK9s59g',
              language: 'en'

             }}
          defaultCenter={
            {
                lat: 43.653908,
                lng: -79.384293
              }
          }
          defaultZoom={ 12 }
        >
          <AnyReactComponent
            lat={43.653908}
            lng={ -79.3832}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;