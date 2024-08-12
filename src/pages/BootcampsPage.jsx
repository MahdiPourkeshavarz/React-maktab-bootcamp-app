import { BootcampCard } from "../components/bootcampCard";
import { SearchBar } from "../components/searchBar";
import { httpRequest } from "../config/axios.config";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchBootcamps, fetchLocations } from "../services/bootcamps-services";



export function BootcampsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const selectedLocation = searchParams.get("location") || "";
  const searchKey = searchParams.get("title") || "";

  const { data } = useQuery({
    queryKey: ["bootcamps", currentPage, selectedLocation, searchKey],
    queryFn: fetchBootcamps,
  });

  const itemsPerPage = 6;

  const totalPages = Math.ceil(data?.totalItems / itemsPerPage);

  function handlePageChange(page) {
    setSearchParams({ location: selectedLocation, page });
  }

  function handleLocationChange(location) {
    setSearchParams({ location, page: 1 });
  }

  function handleSearchChange(searchKey) {
    setSearchParams({title: searchKey})
  }

  const { data: locations } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });

  function displayLocation() {
    return locations?.map((location) => (
      <option className="h-8 py-1" key={location.id} value={location.name}>
        {location.name}
      </option>
    ));
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Bootcamps</h1>
      <div className="flex mb-6 justify-between px-8">
        <div className="w-2/4 border border-blue-200 px-3 py-1 rounded-xl">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filter by Location
          </label>
          <select
            className="block w-full mt-1 h-8 border-gray-300 rounded-md shadow-sm bg-blue-300 text-white px-2"
            value={selectedLocation}
            onChange={(e) =>
              handleLocationChange(
                e.target.value === "all" ? "" : e.target.value
              )
            }
          >
            <option value="all">All Locations</option>
            {displayLocation()}
          </select>
        </div>
        <SearchBar onSearch={handleSearchChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data &&
          data?.bootcamps?.map((bootcamp) => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
      </div>
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } rounded-full border border-blue-600`}
            onClick={() => {
              handlePageChange(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const response = await httpRequest.get("/bootcamps");

  return response.data;
}
