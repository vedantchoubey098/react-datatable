import React from 'react'
import "./table.css"

const Table = ({ data }) => {

    const columns = data[0] && Object.keys(data[0]);

    return (
        <div className="Table_content">
          <div
            className="Row"
            style={{ background: "beige"}}
          >
            {data[0] &&
              columns.map((heading) => <div className="Head">{heading}</div>)}
          </div>
    
          {data.map((row) => (
            <div className="Row">
              {columns.map((column) => (
                <div className="Cell">{row[column]}</div>
              ))}
            </div>
          ))}
        </div>
      );
     
}

export default Table;