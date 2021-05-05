import React from 'react';
import './skeleton.css';

export default function BaseSkeleton({ type }) {
    const classes = `skeleton ${ type }`
    return (
        <div className={ classes }>
            
        </div>
    )
}
