import React, {
    useState, useCallback, 
} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

/* Styles */
import './MapComponent.scss';

export function MapComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, [])
    
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])
    
    return (isLoaded ? (
        <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            onLoad={onLoad}
            zoom={18}
            onUnmount={onUnmount}
            options={{
                zoom: 18,
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
        >
            <Marker position={markerPosition} />
        </GoogleMap>
    ) : <></>)
}

const center = {
    lat: -12.00310680848632,
    lng: -77.06652579674194
};

const markerPosition = {
    lat: -12.00310680848632,
    lng: -77.06652579674194
};