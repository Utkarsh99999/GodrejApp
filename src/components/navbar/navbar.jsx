import React, { useState } from 'react';
import style from './navbar.module.css';
import Burger from '../burger/burger.jsx';
import { useMediaQuery } from '@mui/material';
const Navbar = () => {
    const mobile = useMediaQuery('(max-width:520px)');
    const [open,setOpen] =useState(false);
  return (
    <div className={style.main} >
    <Burger/>
    <p className={style.text} style={mobile?{fontSize:'x-small'}:{}}>Godrej Tropical Isle RERA No.: UPRERAPRJ303390</p>
    
    </div>
  )
}

export default Navbar
