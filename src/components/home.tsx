import React from 'react'
import {Pbar} from './progressBar/pBar'

export default function home() {
    return (
        <div>
            <h1>Progress Bar</h1>
            <Pbar progress={80} />
        </div>
    )
}