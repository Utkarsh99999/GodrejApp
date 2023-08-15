import React from 'react';
import style from './contact.module.css';
import refresh from '../images/refresh.png';

const Contact = () => {
  return (
    <div className={style.main}>
      <input className={style.input} type="text" placeholder='Name'/>
      <input className={style.input} type="text" placeholder='Contact'/>
      <input  className={style.input} type="text" placeholder='Email'/>
      <input  className={style.input} type="text" placeholder='Message'/>
      <div style={{borderBottom:'1px solid white'}}>
      <span style={{alignItems:'center',gap:'10px',display:'flex'}}>
      <button style={{backgroundColor:'#148de3',padding:'10px 15px',border:'none',color:'white'}}>DmrK21</button>
      <img src={refresh} alt="" height={25} width={25}/>
      </span>
      <input  className={style.captcha} type="text" placeholder='Captcha' style={{border:'none'}}/>
      </div>
      
      <button className={style.btn}>SUBMIT</button>
    </div>

  )
}

export default Contact
