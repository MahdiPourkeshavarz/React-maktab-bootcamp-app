import { httpRequest } from "../config/axios.config";

export async function fetchBootcamps({ queryKey }) {
  const [, page, location, title] = queryKey;
  const response = await httpRequest.get(
    title ? `/bootcamps?title_like=${title}&_page=${page}&_limit=6` : `/bootcamps?_page=${page}&_limit=6${
      location ? `&location=${location}` : ""
    }
    `
  );
  const totalItems = response.headers["x-total-count"];

  return { bootcamps: response.data, totalItems };
}

export async function fetchLocations() {
  const response = await httpRequest.get("/locations");

  return response.data;
}