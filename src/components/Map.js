import { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { useLocation, useNavigate } from 'react-router-dom'

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center = {
    lat: 3.745,
    lng: -70.523
};

const Map = ({ places }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCsTZUAPw_j2yO6gneOtE45cnVs0X7_9ho"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const location = useLocation();
    const navigate = useNavigate();

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                places.map((place, index) =>
                    <Marker
                        key={index}
                        onLoad={marker => {
                            console.log('marker: ', marker)
                        }}
                        position={{
                            lat: Number(place.lat),
                            lng: Number(place.lon)
                        }}
                        label={place.name}
                        onClick={() =>
                            navigate(`/place/${place._id}`, { state: { backgroundLocation: location } })
                        }
                    ></Marker>
                )
            }
        </GoogleMap>
    ) : <></>
}

export default Map;