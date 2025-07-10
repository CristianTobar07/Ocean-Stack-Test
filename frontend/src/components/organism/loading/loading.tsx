import React from "react";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import style from "./style/loading.module.css";

const Loading = () => {
  const { processes } = useSelector((state: RootState) => {
    return state.loading;
  });

  if (processes.length === 0) return null;

  return (
    <div
      className={style.container_principal_loading}
      style={{ pointerEvents: "none" }}
    >
      <div className={style.loader}>
        <div className={style.lds_roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className={style.label_loader}></span>
      </div>
    </div>
  );
};

export default Loading;
