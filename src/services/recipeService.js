import axios from "axios"

const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods`
const apiKey = `api_key=qSk83tDb5OKqxVsckrfkRIf8xlqFYb7Guo6UPr6K`

export const getRecipe = async(searchInput) => {
    const res = await axios.get(baseUrl + `/search?query=${searchInput}&` + apiKey)
    return res.data
}