import {makeStyles} from '@material-ui/core';

export const useStyles=makeStyles((theme)=>{
    return{
        footerContainer:{
            background:"#282928",
            color:"white",
            height:"100px",
            alignItems:"center"
        },
        copyRight:{
            fontSize:"15px",
            marginRight:"12px"
        },
        morpho:{
            fontSize:"15px",
            display:"flex",
            justifyContent:"flex-end",
            paddingRight:"100px"
        },
        autolux:{
            display:"flex",
            paddingLeft:"100px",
            [theme.breakpoints.down("xs")]:{
               paddingLeft:"25px"
            }
        }
    }
})