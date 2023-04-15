import axios from "axios"

const baseUrl = `https://api.spoonacular.com`
const apiKey = `apiKey=6bf77b5dce454208b2df19f6838787e9&includeNutrition=true`

export const getRecipe = async(searchInput) => {
    const res = await axios.get(baseUrl + `/recipes/complexSearch?query=${searchInput}&` + apiKey)
    return res.data
}