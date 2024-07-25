import React, { useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./TravelPlanner.css";
import Userguider from "../Userguider/Userguider";
import Footer from "../Footer/Footer"
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

function TravelPlanner() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAXfuVtoGqbhZQHv_ScRCGlRlw0WFJHukk", 
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef = useRef();
  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <>
    <Navigation/>
    <div className="navback">
    <div className="travelheader">
        <p className="travelheaderp" >Plan your trip with us</p>
    </div>
    <img src={`${process.env.PUBLIC_URL}/images/navback.png`} alt='image'  className='navbackimg' />
    </div>
      <div className="searchbox">
        <div className="row">
          <div className="col-lg-4">
            <Autocomplete
              options={{
                componentRestrictions: { country: "LK" }, 
              }}
            >
              <input
                id="inputbox"
                type="text"
                name="Origin"
                className="form-control"
                placeholder="Origin"
                ref={originRef}
              />
            </Autocomplete>
          </div>
          <div className="col-lg-4">
            <Autocomplete
              options={{
                componentRestrictions: { country: "LK" }, 
              }}
            >
              <input
                id="inputbox"
                type="text"
                name="Destination"
                className="form-control"
                placeholder="Destination"
                ref={destinationRef}
              />
            </Autocomplete>
          </div>
          <div className="col-lg-2">
            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              onClick={calculateRoute}
            >
              Search
            </button>
          </div>
          <div className="col-lg-2">
            <button
              id="clearbtn"
              type="submit"
              name="clear"
              className="btn btn-danger"
            onClick={clearRoute}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="mapcontainer">
      <GoogleMap
        center={center}
        zoom={7}
        mapContainerStyle={{ 
          width: "100%", 
          height: "100vh", 
          marginTop: "-100px"
        }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
      </div>
      <div className="renttext">
        <p className="renttextp">You can rent a vehicle or hire a guider for above searched trip</p>
      </div>
    <Userguider/>
    <Footer/>

    </>
  ) : (
    <div>Loading...</div>
  );
}

export default TravelPlanner;
