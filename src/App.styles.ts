import styled from 'styled-components'
import { IconButton } from '@mui/material'

export const Wrapper = styled.div`
   margin: 40px;
   
   h1{
      font-family: monospace;
      display: flex;
      justify-content: space-between;
      font-size: 3.7rem;
   }
`

export const StyledButton = styled(IconButton)`  
   margin-right: 1.8rem;
   color: grey;
   position: fixed;
   z-index: 100;
   right: 20px;
   transform: scale(2.2);
`