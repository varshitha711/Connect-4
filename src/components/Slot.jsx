import React, { useEffect, useState } from 'react';
import redToken from '../assets/red token.png';
import yellowToken from '../assets/yellow token.png';

export const Slot = ({ ch, y, x }) => {

    return (
        <div className='slot' x={x} y={y}>
            {ch && (
                <img src={ch === 'X' ? redToken : yellowToken} width='105%' height='105%' />
            )}
        </div>
    );
};