import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getMealBySeach = async(mealname) => {
    const response = await axios.get(
        `${BASE_URL}/search.php?s=${mealname}`
    );

    return response.data.meals || [];
}

export const getMealsByCategory = async (category) => {
  const response = await axios.get(
    `${BASE_URL}/filter.php?c=${category}`
  );

  return response.data.meals || [];
};