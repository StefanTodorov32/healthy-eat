import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({ description, fdcId, dataType, publishedDate, brandName }) {
    const navigation = useNavigate()
    const handleRedirect = () => navigation(`/recipe/${fdcId}`)
    return (
        <Card sx={{ width: 400, height: 250 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {dataType} : {brandName}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {publishedDate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="meduim" onClick={handleRedirect}>Learn More</Button>
            </CardActions>
        </Card>
    );
}