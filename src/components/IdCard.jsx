function IdCard({ name, role, department, avatar, id }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 text-center border">

      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-xl font-bold">{name}</h2>

      <p className="text-gray-600">{role}</p>

      <p className="text-gray-500 text-sm">{department}</p>

      <p className="mt-3 font-semibold text-blue-600">
        ID: {id}
      </p>

    </div>
  )
}

export default IdCard