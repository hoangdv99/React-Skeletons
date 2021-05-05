import React from 'react'
import BaseSkeleton from './BaseSkeleton'

export default function ArticleSkeleton() {
    return (
        <div className="skeleton-wrapper">
            <div className="article-skeleton">
                <BaseSkeleton type="title" />
                <BaseSkeleton type="text" />
                <BaseSkeleton type="text" />
                <BaseSkeleton type="text" />
            </div>
        </div>
    )
}
