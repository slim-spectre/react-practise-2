import { type AnimalProps } from "../interfaces/AnimalProps";

function Animal ({name,type, age} : AnimalProps) {
  return(
    <div className="flex justify-center flex-col items-center gap-1 bg-gray-800 text-white rounded-xl p-6 shadow-lg w-80 hover:scale-105 transition-transform">
      <p className="font-semibold text-white">Name: {name}</p>
      <p className="font-semibold text-white">Type: {type}</p>
      <p className="font-semibold text-white">Age: {age}</p>
    </div>
  )
}

export default Animal;