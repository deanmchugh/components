import React from 'react'
import {Pbar} from './progressBar/pBar'
import {Dmode} from './darkMode/darkMode'

export default function home() {
    return (
        <div>
            <h1>Progress Bar</h1>
            <Pbar progress={10} />
            <h1>Dark Mode</h1>
            <button onClick={Dmode}>Dark MODE!</button>
            <h1>Menu</h1>
        </div>
    )
}