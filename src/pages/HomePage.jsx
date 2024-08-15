import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <p className="p-8 text-2xl font-bold">
        Welcome to <span className="text-blue-600">Coursera</span>
      </p>
      <div className="flex justify-center pt-16 md:pl-8">
        <div className="link flex flex-col items-center space-y-3">
          <p className="font-bold text-2xl">Take Your Dream Course</p>
          <p className="text-3xl font-bold">Right Now!</p>
          <button className="bg-blue-500 px-4 py-2 font-semibold text-xl rounded-lg text-white hover:bg-blue-600">
            <NavLink to="/bootcamps">Bootcamps</NavLink>
          </button>
        </div>
        <div>
          <img className="object-cover w-[630px]" src="hero.png" alt="_" />
        </div>
      </div>
    </>
  );
}
