import React from "react";


export default function MySelect({defaultValue, options, onChange,value}) {

    return (
        <div className="filter__sort">
            <select 
            value={value}
            onChange={e => onChange(e.target.value)}>

                <option disabled value="">{defaultValue}</option>
                {
                    options.map(option => 
                        <option value={option.value} key={option.value}>{option.name} </option>
                        
                        )
                }
            </select>
        </div>
    )

}