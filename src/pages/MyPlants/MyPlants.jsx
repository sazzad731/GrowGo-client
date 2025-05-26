import { use, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPlants = () => {
  const {user} = use(AuthContext)
  const [ myPlants, setMyPlants ] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/my-plants/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data));
  }, [ user?.email ])

  const handleDeletePlant = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-plant/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount === 1){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
    
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-greenPrimary dark:text-lightGreen mb-8 text-center">
        🌱 My Plants
      </h2>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full bg-white dark:glass">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Plant Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Watering Frequency</th>
              <th className="py-3 px-6 text-left">Care Level</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-lightGreen">
            {myPlants.map((plant) => (
              <tr key={plant._id} className="border-t">
                <td className="py-3 px-6">
                  <img
                    src={plant.imageURL}
                    alt={plant.plantName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-6 font-medium">{plant.plantName}</td>
                <td className="py-3 px-6 capitalize">{plant.category}</td>
                <td className="py-3 px-6">{plant.wateringFreq}</td>
                <td className="py-3 px-6 capitalize">{plant.careLevel}</td>
                <td className="py-3 px-6 md:space-x-2">
                  <Link
                    to={`/update-plant/${plant._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer"
                  >
                    Update
                  </Link>
                  <button
                    onClick={()=>handleDeletePlant(plant._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm cursor-pointer mt-2 md:mt-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {myPlants.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            You haven’t added any plants yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlants;
