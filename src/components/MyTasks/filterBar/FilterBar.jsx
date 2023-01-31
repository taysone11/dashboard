import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import MySelect from "../UI/select/MySelect";

export default function FilterBar({deleteAll,deleteSelected,onChange,selectedSort}) {

  


    return (

        <div className="filter__bar">
    <MySelect 
    value={selectedSort}
  defaultValue="Sort by"
    options={[
      {name:"Completed", value: "completed"},
      {name:"Incompleted", value: "incompleted"},
          ]}
      onChange={onChange}
    />
      <div className="filter__buttons">
      <MyButton id="f__button" onClick={deleteSelected}>Delete selected</MyButton>
      <MyButton id="f__button" onClick={deleteAll}>Delete All</MyButton>
      </div>
    </div>

    )
}