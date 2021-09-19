export const processCols = data => {  
  return data.map((colDetail) => {    
    return colDetail[0];
  })
};

export const processNumRows = data => {
  return data[0][0];
};