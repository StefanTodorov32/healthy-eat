import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getRecipe } from '../services/recipeService'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Container } from '@mui/material'
import RecipeCard from './RecipeCard'
export const RecipeList = () => {
    const { searchInput } = useParams()
    const { data, errors, isLoading } = useQuery({ queryKey: ['recipes'], queryFn: () => getRecipe(searchInput) })
    console.log(data)
    return (
        <>
            {isLoading && <CircularProgress />}
            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: "row" }}>
                {data && data.results.map(x => <RecipeCard />)}
            </Container>
        </>
    )
}
