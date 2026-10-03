import type { FilmProps } from '../interfaces/FilmProps'

function Film({ name, director, year, studio, revenue }: FilmProps) {
  return (
    <div className="flex justify-center gap-1 bg-gray-800 text-white rounded-xl p-6 shadow-lg w-80 hover:scale-105 transition-transform">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{name}</h2>

      <div className="space-y-2 text-gray-300">
        <p>
          <span className="font-semibold text-white">Director:</span> {director}
        </p>

        <p>
          <span className="font-semibold text-white">Year:</span> {year}
        </p>

        <p>
          <span className="font-semibold text-white">Studio:</span> {studio}
        </p>

        <p>
          <span className="font-semibold text-white">Revenue:</span> ${revenue.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Film
