import s from "./Friends.module.css";
import React from "react";
import {FriendsPropsType} from "./FriendsContainer";



const Friends = (props: FriendsPropsType) => {
  const state = props.friendsPage.friendsData

  return (
      <div>
        <h3>{props.title}</h3>
        <div className={s.friends}>
          {state.map(item=>{
            return (<div key={item.id} className={s.item}>
                <div className={s.itemRound}></div>
                <div>{item.fullName}</div>
                <div>
                    {item.followed ?
                        <button onClick={()=>{props.follow(item.id)}}>Follow</button>
                        : <button onClick={()=>{props.unfollow(item.id)}}>Unfollow</button>}
                </div>
            </div>)

          })}
        </div>
      </div>

  )
}
export default Friends