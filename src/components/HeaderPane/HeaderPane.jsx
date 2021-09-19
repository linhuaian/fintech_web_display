import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setColumns, setRows } from '../TablePage/tableSlice';
import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { SiMysql } from 'react-icons/si';


const HeaderPane = () => {
    const URL = process.env.REACT_APP_SQL_URL;
  const dispatch = useDispatch();  
  const [query, setQuery] = useState("");  
  const [css] = useStyletron();

  const onEnter = e => {    
    if (e.keyCode === 13) {      
      fetchData(query);
    }
  };

    const fetchData = statement => {
    axios.post(URL, {
      "statement": statement,
      "type": "query"
    }).then(res => {
        const responseData = JSON.parse(res['data']['body']);
      dispatch(setRows(responseData['result']));
      dispatch(setColumns(responseData['columns']));
    }).catch(err => console.log(err));
  };  

  return (
    <div className={css({
      display: 'flex',      
    })}>
      <Button onClick={() => fetchData(query)}>Refresh</Button>      
      <Input 
        startEnhancer={<SiMysql size={40} />}                
        onChange={e => setQuery(e.target.value)}
        onKeyDown={onEnter}
         />
    </div>
  );
};

export default HeaderPane;