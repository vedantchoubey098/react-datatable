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
    
          {/* {data.map((row) => (
            <div className="Row">
              {columns.map((column) => (
                <div className="Cell">{row[column]}</div>
              ))}
            </div>
          ))} */}
          {
  data.map(row => {
    var date = new Date( parseInt(row.date) * 1000).toLocaleString()
    
    return (
      <div className="Row">
        <div className="Cell">{row.id}</div>
        <div className="Cell">{row.firstName}</div>
        <div className="Cell">{row.lastName}</div>
        <div className="Cell">{row.location}</div>
        <div className="Cell">{date}</div>
        <div className="Cell">{row.salary}</div>
      </div>
    )
  })
}
        </div>
      );
     
}

export default Table;
