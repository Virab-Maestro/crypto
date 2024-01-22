'use client'

import Button,{ButtonProps} from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

const ButtonReg = styled(Button)<ButtonProps>(({theme})=>({
    width: '180px',
    // height: '50px',
    background: 'linear-gradient(104deg, #DF1CFF -25.59%, #EA0070 138%)!important',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '30px',
    textAlign: 'center',
    padding: '5px 40px',
    borderRadius: '8px',
    textTransform: 'capitalize',
    color: 'white',
    '&:hover':{
        boxShadow: '0px 9px 65px 0px rgba(208, 17, 204, 0.35)'
    },
    '@media(min-width: 1024px)':{
      width: '220px',
      height: '50px',
      fontSize: '20px',
      padding: '20px 40px',
    }
}))

interface Props {
    title: string
}

export default function Button1({title}:Props) {
  return (
    <>
        {/* <div>Button1</div> */}
        <ButtonReg>{title}</ButtonReg>
    </>
  )
}
