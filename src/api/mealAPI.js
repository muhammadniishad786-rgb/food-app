import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getMeal = async(mealname) => {
    const response = await axios.get(`${BASE_URL}/search.php?s=${mealname}`)

    return response.data.meals || [];
}
