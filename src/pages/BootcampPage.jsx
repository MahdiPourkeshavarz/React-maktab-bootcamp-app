/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import { httpRequest } from "../config/axios.config";

export function BootcampPage() {
  const bootcamp = useLoaderData();
  return (
    <div className="w-3/4 mx-auto mt-16 bg-white rounded-lg overflow-hidden">
      <div className="h-96 overflow-hidden">
        <img
          src={`../../public/${bootcamp.image}`}
          alt={bootcamp.title}
          className="w-full h-auto object-cover object-center"
        />
      </div>
      <div className="px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {bootcamp.title}
        </h1>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{bootcamp.ratings}</span>
          </div>
          <div>
            <span>{bootcamp.reviews} Buyers</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div>
            <span>Location:</span>
            <span className="font-medium">{bootcamp.location}</span>
          </div>
          <div>
            <span>Duration: </span>
            <span className="font-medium">{bootcamp.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div>
            <span>Price: </span>
            <span className="font-medium">${bootcamp.price}</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {bootcamp.description}
        </p>
        <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
          Register Me
        </button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const bootcampId = params.bootcampId;
  const response = await httpRequest.get(`/bootcamps/${bootcampId}`);
  return response.data;
}

// "id": 20,
//       "title": "UX Research Bootcamp",
//       "description": "Develop the skills to conduct user research, analyze data, and create actionable insights to improve user experience.",
//       "image": "bootcamp4.jpg",
//       "duration": "10 weeks",
//       "price": 11000,
//       "location": "Miami",
//       "ratings": 4.3,
//       "reviews": 200
