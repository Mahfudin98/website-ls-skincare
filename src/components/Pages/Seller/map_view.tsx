import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function MapView(props: any) {
  const { token, location } = props;
  mapboxgl.accessToken = token;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [location.longitude, location.latitude],
      zoom: 12
    });

    const markerInstance = new mapboxgl.Marker()
      .setLngLat([location.longitude, location.latitude])
      .addTo(map);
    return () => {
      map.remove();
    };
  }, [location]);
  return <div id="map-container" style={{ width: "100%", height: "620px" }} />;
}
