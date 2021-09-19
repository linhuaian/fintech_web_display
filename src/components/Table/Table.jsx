import React from 'react';
import { useSelector } from 'react-redux';
import { Table as BaseTable } from "baseui/table-semantic";


const Table = () => {  
  const columns = useSelector(state => state.columns);
  const rows = useSelector(state => state.rows);

  return (
    <div>                
      <BaseTable columns={columns} data={rows} />      
    </div>
  );
};

export default Table;