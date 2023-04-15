import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getRecipe } from '../services/recipeService'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Container, Grid } from '@mui/material'
import RecipeCard from './RecipeCard'
export const RecipeList = () => {
    const { searchInput } = useParams()
    const { data, errors, isLoading } = useQuery({ queryKey: ['recipes'], queryFn: () => getRecipe(searchInput) })
    return (
        <>
            {isLoading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
            </div>}
            {data && <Grid container spacing={2} >
                {data.foods.map((x, i) => (<Grid item xs={3}>
                    <RecipeCard key={i} {...x} />
                </Grid>))}
            </Grid>}

        </>
    )
}
