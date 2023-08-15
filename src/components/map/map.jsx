import React from 'react';
import style from './map.module.css';
import { useMediaQuery } from '@mui/material';

const Map = () => {
  const mobile=useMediaQuery('(max-width:600px)')
  return (
    <div className={style.main}>
      {/* <img className={style.responsive} src={image} alt="image"/> */}
      <iframe className={style.responsive} style={mobile?{height:'50vh'}:{}}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.47372900468!2d77.3838880738775!3d28.615560784854104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cdbab48dd%3A0x9cd4698c53f1b69c!2s171%2C%20C%20Block%20Road%2C%20C%20Block%2C%20Sector%2063%2C%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1691043756953!5m2!1sen!2sin"/>
      </div>
  )
}
export default Map


// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }


