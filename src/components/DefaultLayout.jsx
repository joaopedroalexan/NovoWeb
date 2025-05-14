import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

const DefaultLayout = ({children}) => {
    return(
        <Box sx={{display:"flex", flexDirection:"column", minHeight:"100px"}}>
            <Header  />
            {/* Aqui vem o conteúdo da página: */}
            <Box sx={{
                display:"flex", 
                flex:"1", 
                justifyContent:"center", 
                alignItems:"center", 
                padding:"20px"}}
            >
                {children}
            </Box>
            <Footer/>
        </Box>
    )
}

export default DefaultLayout;