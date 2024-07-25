/* // TravelPlanner.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function TravelPlanner() {
    const [destinations, setDestinations] = useState([]);
    const [route, setRoute] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const newDestination = {
                        name: location,
                        lat: parseFloat(data[0].lat),
                        lon: parseFloat(data[0].lon)
                    };
                    setDestinations([...destinations, newDestination]);
                    setRoute([...route, [data[0].lat, data[0].lon]]);
                }
            });
        e.target.reset();
    };

    return (
        <div className="travel-planner">
            <form onSubmit={handleSearch}>
                <input type="text" name="location" placeholder="Enter a destination" required />
                <button type="submit">Add Destination</button>
            </form>
            <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {destinations.map((dest, index) => (
                    <Marker
                        key={index}
                        position={[dest.lat, dest.lon]}
                        icon={L.icon({
                            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
                            shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                            iconSize: [38, 95],
                            shadowSize: [50, 64],
                            iconAnchor: [22, 94],
                            shadowAnchor: [4, 62],
                            popupAnchor: [-3, -76]
                        })}
                    >
                        <Popup>{dest.name}</Popup>
                    </Marker>
                ))}
                <Polyline positions={route} color="blue" />
            </MapContainer>
        </div>
    );
}

export default TravelPlanner;
 */