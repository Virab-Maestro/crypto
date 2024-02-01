'use client'

import Button,{ButtonProps} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ButtonSpecProps extends ButtonProps{
  centered?: boolean
}
const ButtonSpec = styled(Button, {
  shouldForwardProp: (prop)=>prop !== 'centered'
})<ButtonSpecProps>(({centered, theme})=>({
    size: 'small',
    variant: 'outlined',
    borderRadius: '8px',
    background: 'linear-gradient(#04011C, #04011C) padding-box,linear-gradient(to right, #E50AA7, rgba(208, 17, 204, 0.15)) border-box !important',
    border: '1.3px solid transparent !important',
    padding: "7px 0",
    display: 'none', //none
    color: 'white',
    fontSize: '12px',
    textTransform: 'capitalize',
    fontWeight: '700',
    margin: centered? '30px auto 0': 'unset',
    '&:focus, &:hover':{
      boxShadow: '0px 16px 80px 0px rgba(208, 17, 204, 0.3)'
    },
    ...(centered &&{
    '@media(max-width: 640px)':{
      fontSize: '14px',
      fontWeight: '800',
      display: 'block',
      padding: '10px 20px',
      margin: '30px auto 0'
    },
    '@media(min-width: 640px)':{
      fontSize: '14px',
      fontWeight: '800',
      display: 'block',
      padding: '10px 20px',
      margin: '30px auto 0'
    },
    '@media(min-width: 1024px)':{
      fontSize: '16px',
      padding: '8px 25px'
    },
    '@media(min-width: 1280px)':{
      fontSize: '20px',
      padding: '8px 35px'
    }
  }),
  ...(!centered && {
    '@media(min-width: 640px)':{
      display: 'block',
      padding: '8px 10px'
    },
    '@media(min-width: 768px)':{
      fontSize: '14px',
    },
    '@media(min-width: 1024px)':{
      fontSize: '16px',
      padding: '8px 25px'
    },
    '@media(min-width: 1280px)':{
      fontSize: '20px',
      padding: '8px 35px'
    }
  }),
}))

interface Button2Props{
    children:string;
    centered?: boolean;
}
export default function Button2({children, centered}:Button2Props) {
  return (
    <ButtonSpec className='Button' centered={centered}>{children}</ButtonSpec>
  )
}
