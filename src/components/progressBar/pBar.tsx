import React from 'react'
import './pBar.scss'

type ProgressProps = {
    progress: Number
}

export const Pbar = ({progress}: ProgressProps) =>
    <div className='container'>
        <div className='bar'>
            <div className='progress' style={{width: progress + '%'}}></div>
        </div>
        <h2>{progress + '%'}</h2>
    </div>
