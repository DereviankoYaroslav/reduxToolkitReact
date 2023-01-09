import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreames);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Icecream</button>
            <button onClick={() => dispatch(restocked(10))}>Restock Icecream</button>
        </div>
    )
}
