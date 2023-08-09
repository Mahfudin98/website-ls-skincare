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
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const token =
    "pk.eyJ1IjoibWFoZnVkaW45OCIsImEiOiJjbGRiYzRjcmowcmdqM29wa2ZleTJ5MGszIn0.3wHN_upxK3GoRLZhtriNvA";
  const handleSearch = () => {
    if (search !== "") {
      setSearchValue(search);
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
                setCity(city ? city : county ? county : town ? town : state);
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
    }
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      if (search === "") {
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
                setCity(city ? city : county ? county : town ? town : state);
                setSearchValue(
                  city ? city : county ? county : town ? town : state
                );
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
  return (
    <section className="container p-2 mx-auto mt-5">
      <div className="relative flex flex-wrap mb-8 overflow-hidden border rounded-md shadow-lg border-pic-100">
        <div className="relative w-full overflow-hidden lg:w-1/2">
          <div className="flex items-center justify-center w-full h-full text-5xl font-bold text-center bg-pic-900">
            <MapView token={token} location={location} />
          </div>
        </div>
        <div className="w-full px-1 py-2 md:py-8 lg:px-8 lg:py-8 lg:w-1/2">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center justify-center w-full mb-3">
              <h3 className="inline-flex items-center mb-3 text-xl font-bold text-center uppercase duration-150 ease-in-out delay-75 cursor-pointer text-brown-900 group hover:text-pic-800">
                Temukan Agen dan Reseller LS Skincare
                <MagnifyingGlassIcon className="h-6 w-6 text-brown-800 group-hover:ml-1.5 group-hover:text-pic-800 ml-0.5 ease-in delay-75 duration-150" />
              </h3>
            </div>
            <div className="px-4 mb-5">
              <label className="mb-2 text-sm font-medium sr-only text-brown-900 dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon className="w-5 h-5 text-brown-500 dark:text-brown-400" />
                </div>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm border rounded-lg text-brown-900 border-brown-300 bg-brown-50 focus:ring-pic-500 focus:border-pic-500 dark:bg-brown-700 dark:border-brown-600 dark:placeholder-brown-400 dark:text-white dark:focus:ring-pic-500 dark:focus:border-pic-500"
                  placeholder="Cari nama kota/kabupaten"
                  required
                />
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="text-white absolute right-2.5 bottom-2.5 bg-pic-700 hover:bg-pic-800 focus:ring-4 focus:outline-none focus:ring-pic-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pic-600 dark:hover:bg-pic-700 dark:focus:ring-pic-800"
                >
                  Search
                </button>
              </div>
            </div>
            <MemberList search={searchValue !== "" ? searchValue : city} />
          </div>
        </div>
      </div>
    </section>
  );
}
