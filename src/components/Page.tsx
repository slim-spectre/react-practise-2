import type { PageProps } from "../interfaces/PageProps";

function Page ({fullName, phone, email, location, experience, skills} : PageProps) {
  return (
    <div className="flex flex-col gal-4 bg-gray-400 text-amber-100 rounded-xl
    p-6 shadow-lg w-90 m-5 hover:scale-120 transition-transform">
      <p className="font-semibold text-white">FullName : {fullName}</p>
      <p className="font-semibold text-white">Phone : {phone}</p>
      <p className="font-semibold text-white">Email : {email}</p>
      <p className="font-semibold text-white">location : {location}</p>
      <p className="font-semibold text-white">experience : {experience}</p>
      <p className="font-semibold text-white">Skills <ul>{skills.map(skill => <li>{skill}</li>)}</ul></p>
    </div>
  )
}

export default Page;