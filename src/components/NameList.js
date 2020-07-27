import React from 'react'

function NameList() { 
    const names = ["Bruce", "Theo", "Zayed"]
    const nameList = names.map(name => (
        <div>
            <h6>{name}</h6>
        </div>
     ))
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
