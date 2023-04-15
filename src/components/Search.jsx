import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")
    const handleSubmit = () => {
        navigate(`/recipe/search/${searchInput}`)
    }
    return (
        <>
            <TextField id="outlined-basic" label="Recipe" variant="outlined" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <Button variant="outlined" size='large'onClick={handleSubmit} >Search</Button>
        </>
    )
}
