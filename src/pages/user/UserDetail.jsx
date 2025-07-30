import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <NotFound />;

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-[50px]">
      <div>
        <img
          src={user?.image}
          alt={user?.firstName}
          className="w-full h-[550px] object-cover rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-700 mb-2">📧 {user?.email}</p>
          <p className="text-gray-700 mb-2">📱 {user?.phone}</p>
          <p className="text-gray-700 mb-2">👤 Username: {user?.username}</p>
          <p className="text-gray-700 mb-2">🎂 Age: {user?.age}</p>
          <p className="text-gray-700 mb-2">📍 Address: {user?.address?.address}, {user?.address?.city}</p>
          <p className="text-gray-700">💼 Job: {user?.company?.title}</p>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition">
          Boglanish
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
