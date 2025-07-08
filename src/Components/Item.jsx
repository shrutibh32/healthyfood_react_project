import React from 'react'
import style from './Item.module.css';
export default function Item({foodItem,bought,handlebuybutton}) {
 
  return (
    <> 
           <li className={`list-group-item ${bought && 'active'} ${style.item}  `} key={foodItem}>
           <span className={style.kg_item}>{foodItem}</span> 
            <button className={style.buy} onClick={handlebuybutton}>Buy</button>
           </li>
    </>

  )
}
