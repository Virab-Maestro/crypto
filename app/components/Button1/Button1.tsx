'use client'

import Button,{ButtonProps} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ButtonRegProps extends ButtonProps{
  width?: boolean;
}
// full, auto
const ButtonReg = styled(Button, {
  shouldForwardProp: (prop)=> prop!=="width"
})<ButtonRegProps>(({width,theme})=>({
    width: width ? '100%' : '180px',
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
    ...(width && {
      '@media(min-width: 1024px)':{
        width: '100%',
        // height: '50px',
        fontSize: '16px',
        padding: '8px 40px',
    }}),
    ...(!width && {
      '@media(min-width: 1024px)':{
        width: '220px',
        height: '50px',
        fontSize: '20px',
        padding: '20px 40px',
    }}) 
}))

interface Props {
    title: string,
    width?: boolean,
    classes?: string;
}

export default function Button1({title, width, classes}:Props) {
  return (
    <>
        {/* <div>Button1</div> */}
        <ButtonReg width={width} className={classes}>{title}</ButtonReg>
    </>
  )
}
