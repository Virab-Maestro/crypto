"use client"

import styled from '@emotion/styled';
import Button1 from '../Button1/Button1';

import { Card, CardContent, CardMedia, Typography, Rating, Box } from '@mui/material';
import { AttachMoney } from '@mui/icons-material';
//Other components
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// Favorite Component

interface ProductCardProps{
    title:string;
    price: number;
    rating: number;
    img:string;
}

export default function ProductCard({title, price, rating, img}:ProductCardProps) {

    const RatingComponent = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#e8c010',
        },  
        '& .MuiRating-iconEmpty':{
            color: '#5c5c5b',
            
        }
        
    })

    return (
        <>
            <Card sx={{
                position: 'relative',
                width: '300px',
                padding: '12px 12px 0 12px',
                margin: '0 auto',
                backgroundColor: '#101636',
                borderRadius: '16px',
                cursor: 'pointer',
                height: '376px',
                overflowY: 'hidden',
                transition: 'height .15s',
                '&:hover .MuiCardMedia-img':{
                    height: '160px',
                    transitionDelay: '.23s'
                },
                '@media(pointer: coarse)':{
                    '.MuiCardMedia-img':{
                        height: '200px',
                        transitionDelay: '.23s'
                    }
                },
                '@media(min-width: 1280px)':{
                    width: '370px',
                    height: '460px',
                    padding: '18px 18px 0 18px',
                    '.MuiCardMedia-img':{
                        height: '345px',
                        transitionDelay: '.23s'
                    },
                    '&:hover .MuiCardMedia-img':{
                        height: '270px',
                        transitionDelay: '.23s'
                    }
                },
            }}>
                <CardMedia
                component="img"
                alt="Product Image"
                image={img}
                sx={{borderRadius: '8px', height: '270px', transition: 'all .2s ease-in-out'}} //230
                />
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
                sx={{
                    position: 'absolute', 
                    top: '30px', 
                    right: '30px', 
                    borderRadius: '8px', 
                    backgroundColor: 'rgba(199, 199, 199, .17)', 
                    "& .MuiSvgIcon-root":{color:'white'},
                    '& [data-testid="FavoriteIcon"]':{
                        color:'#fa6814'
                    },
                    "&:hover":{backgroundColor: 'rgba(199, 199, 199, .17)', 
                }}} />
                <CardContent style={{ padding: '16px 0 0 0'}}>
                    <Box 
                    display='flex' 
                    sx={{
                        justifyContent: 'space-between', 
                        gap: '35px',
                    }}>
                        <Typography variant="h6" component="div" color="white"
                        sx={{
                            whiteSpace: 'nowrap',
                            width: '185px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            '@media(min-width:1280px)':{
                                maxWidth: '225px',
                                maxHeight: '32px',
                                overflow: 'hidden'
                            },
                        }}>
                        {title}
                        </Typography>
                        <Box>
                        <Typography className="flex items-start" variant="h6" color="white">
                            <img className=' w-7' src='/images/eth-icon.svg'></img>
                            {price}
                        </Typography>
                        </Box>
                    </Box>
                    <Box sx={{margin: '10px 0 25px 0'}}>
                        <Box display="flex" alignItems="center">
                            {/* <Rating 
                            name="read-only" value={3} readOnly /> */}
                            <RatingComponent defaultValue={rating} readOnly></RatingComponent>
                        </Box>
                    </Box>
                    <Box sx={{margin: '0 auto', textAlign: 'center'}}>
                        <Button1 title="but it" width={true}></Button1>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
