import React from 'react';

export const filterList = () =>{
    const [number,setNumber] = React.useState(0);

    const addOne= (): void =>{
        setNumber(number+1);
    }
    const substractOne= (): void =>{
        setNumber(number-1);
    }
    
    return {number,addOne,substractOne}
}