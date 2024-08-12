/* eslint-disable react/prop-types */
export function BootcampCard({ bootcamp }) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={bootcamp.image}
          alt={bootcamp.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-600">
            {bootcamp.title}
          </h2>
          <p className="text-gray-700 mt-2 line-clamp-3">
            {bootcamp.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm font-medium text-gray-600">
              {bootcamp.duration}
            </span>
            <span className="text-lg font-bold text-green-600">
              ${bootcamp.price}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-yellow-500">
              ⭐ {bootcamp.ratings}
            </span>
            <span className="text-sm text-gray-500">
              {bootcamp.reviews} reviews
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
