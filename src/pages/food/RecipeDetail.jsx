import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";

const RecipeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-[50px]">
      {error && <NotFound />}
      <div>
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-[550px] object-cover rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{data?.name}</h1>
          <p className="text-gray-700 mb-4">{data?.instructions}</p>
          <p className="text-yellow-500 mb-2 font-medium">
            ⭐ {data?.rating} / 5
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Tayyorlanish vaqti:{" "}
            <span className="text-black font-medium">
              {data?.prepTimeMinutes} daqiqa
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Pishirish vaqti:{" "}
            <span className="text-black font-medium">
              {data?.cookTimeMinutes} daqiqa
            </span>
          </p>
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition">
          Xarid qilish
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
