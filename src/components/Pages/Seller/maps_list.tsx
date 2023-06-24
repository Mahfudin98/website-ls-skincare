import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import dynamic from "next/dynamic";
import MemberList from "./member_list";
import { useEffect, useState } from "react";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";

const MapView = dynamic(() => import("./map_view"), {
  ssr: false
});

export default function MapsList() {
  const { t } = useTranslation("common");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [search, setSearch] = useState("");
  const token =
    "pk.eyJ1IjoibWFoZnVkaW45OCIsImEiOiJjbGRiYzRjcmowcmdqM29wa2ZleTJ5MGszIn0.3wHN_upxK3GoRLZhtriNvA";
  useEffect(() => {
    if (navigator.geolocation) {
      if (search !== "") {
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
              search ? search : city
            )}.json?access_token=${token}`
          )
          .then((response) => {
            const features = response.data.features;
            if (features.length > 0) {
              const coordinates = features[0].center;
              setLocation({
                latitude: coordinates[1],
                longitude: coordinates[0]
              });
              axios
                .get(
                  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`
                )
                .then((response) => {
                  const county = response.data.address.county;
                  const town = response.data.address.town;
                  const city = response.data.address.city;
                  const state = t(response.data.address.state);
                  setCity(city ? city : county ? county : town);
                  setProvince(state);
                })
                .catch((error) => {
                  console.error("Error getting city:", error);
                });
            } else {
              console.error("No coordinates found for the city");
            }
          })
          .catch((error) => {
            console.error("Error geocoding city:", error);
          });
      } else if (search === "") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            axios
              .get(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`
              )
              .then((response) => {
                const county = response.data.address.county;
                const town = response.data.address.town;
                const city = response.data.address.city;
                const state = t(response.data.address.state);
                setCity(city ? city : county ? county : town);
                setProvince(state);
              })
              .catch((error) => {
                console.error("Error getting city:", error);
              });
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      }
    } else {
      console.error("Geolocation is not supported");
    }
  }, [city, location.latitude, location.longitude, search, t]);
  const handleCityChange = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <section className="container p-2 mx-auto mt-5">
      <div className="flex flex-wrap border border-pic-100 rounded-md shadow-lg relative overflow-hidden mb-8">
        <div className="w-full lg:w-1/2">
          <div className="text-center h-full flex items-center justify-center w-full text-5xl font-bold bg-pic-900">
            <MapView token={token} location={location} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="grid grid-cols-1">
            <div className="flex flex-col justify-center items-center w-full mb-3">
              <h3 className="uppercase text-xl font-bold text-center text-brown-900 group hover:text-pic-800 inline-flex items-center cursor-pointer ease-in-out delay-75 duration-150 mb-3">
                Temukan Agen dan Reseller LS Skincare
                <MagnifyingGlassIcon className="h-6 w-6 text-brown-800 group-hover:ml-1.5 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
              </h3>
              {/* <div className="block">
                {`latitude: ${location.latitude}, longitude: ${
                  location.longitude
                } => ${city} - ${t(province)}`}
              </div> */}
            </div>
            <div className="mb-5 px-4">
              <label className="mb-2 text-sm font-medium text-brown-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon className="w-5 h-5 text-brown-500 dark:text-brown-400" />
                </div>
                <input
                  type="search"
                  value={search}
                  onChange={handleCityChange}
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-brown-900 border border-brown-300 rounded-lg bg-brown-50 focus:ring-pic-500 focus:border-pic-500 dark:bg-brown-700 dark:border-brown-600 dark:placeholder-brown-400 dark:text-white dark:focus:ring-pic-500 dark:focus:border-pic-500"
                  placeholder="Cari nama kota/kabupaten"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-pic-700 hover:bg-pic-800 focus:ring-4 focus:outline-none focus:ring-pic-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pic-600 dark:hover:bg-pic-700 dark:focus:ring-pic-800"
                >
                  Search
                </button>
              </div>
            </div>
            <MemberList search={city} />
          </div>
        </div>
      </div>
    </section>
  );
}
