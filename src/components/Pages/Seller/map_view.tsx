import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
export default function MapView(props: any) {
  const { token, location } = props;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.js";
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.mapboxgl.accessToken = token;

      // Inisialisasi peta
      const map = new window.mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // Ganti dengan style peta yang diinginkan
        center: [location.longitude, location.latitude], // Koordinat pusat peta [longitude, latitude]
        zoom: 10 // Tingkat zoom peta
      });

      // Tambahkan marker
      new window.mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);
    };
  }, [location.latitude, location.longitude, token]);
  return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
}
