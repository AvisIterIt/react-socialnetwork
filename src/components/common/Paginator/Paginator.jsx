import React, { useEffect, useState } from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount/portionSize);
  let [portionNumber,setPortionNumber] = useState(1);
  useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);
  let leftPortionPageNumber = (portionNumber -1)*portionSize+1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.number}>
      {portionNumber >1 &&
      <button className={classes.btnP} onClick={()=>{setPortionNumber(portionNumber -1)}}>&#8592;</button>}

      {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
      .map((p) => {
          return (
          <span
              onClick={(e) => { onPageChanged(p);}}
              className={ currentPage === p ? classes.selectedPage : ""}>{p}
          </span>
          );
      })}
      {portionCount > portionNumber &&
      <button className={classes.btnP} onClick={()=>{setPortionNumber(portionNumber+1)}}>&#8594;</button>}
    </div>
  )
}
export default Paginator;