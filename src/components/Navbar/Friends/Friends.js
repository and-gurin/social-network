import s from "./Friends.module.css";
import React from "react";

const Friends = (props) => {
  const state = props.friendsData
  return (
      <div>
        <h3>{props.title}</h3>---
        <div className={s.friends}>
          {state.map(item=>{
            return <div className={s.item}>
              <div className={s.itemRound}></div>
              <div>{item.name}</div>
            </div>
          })}
        </div>
      </div>

  )
}
export default Friends