import { useState } from "react"
import { useQuery } from "react-query"
// Components
import Item from './Item/Item'
import { Drawer } from "@mui/material"
import { LinearProgress } from "@mui/material"
import { Grid } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
// Styles
import { Wrapper } from "./App.styles"
// Types
export type CartItemType = {
   id: number;
   category: string;
   description: string;
   image: string;
   price: number;
   title: string;
   amount: number
}

const getProducts = async(): Promise<CartItemType[]> =>
    await( await fetch('https://fakestoreapi.com/products')).json()

const App = () => {

  const {data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
     getProducts
    )
   console.log(data)

   const getTotalItems = () => null
   const handleAddToCart = (clickedItem: CartItemType) => null
   const handleRemoveFromCart = () => null

   if (isLoading) return <LinearProgress />
   if (error) return <div>Something probably went wrong...</div>

  return <div className="App">The app has started</div>
}

export default App
