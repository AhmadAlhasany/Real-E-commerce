import { Box, Button, Stack } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import React from 'react'

type bannerProps = {
    url:string,
    children: React.ReactNode
    my?: string
    height?: string
    mdCon?: boolean
    jCen?: boolean
    tCen?: boolean
}

function Banner(props: bannerProps) {
    let {my = '0px', height = '300px', mdCon = false, jCen = false, tCen = false} = props
    let vari = mdCon ? '100% 100%' : '', justify = jCen ? 'center' : 'space-around', align = tCen ? 'auto' : 'center';
  
  return (
    <Box my={props.my} sx={{height: {height}, backgroundColor:'red', width:'100%',
     backgroundImage:`url(${props.url})`, backgroundRepeat:'no-repeat', backgroundSize:{md:'100% 101%', xs: vari}}}>
            <Stack direction='column'sx={{maxWidth:'1400px', marginLeft:'auto', marginRight:'auto', padding: '20px', textAlign:align ,alignItems: align , justifyContent: justify, height:'100%'}}>
                {props.children}
            </Stack>
    </Box>
  )
}

export default Banner