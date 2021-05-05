import React from 'react'
import BaseSkeleton from './BaseSkeleton'

export default function ProfileSkeleton() {
    return (
        <div className="skeleton-wrapper">
            <div className="profile-skeleton">
                <div>
                    <BaseSkeleton type="avatar" />
                </div>
                <div>
                    <BaseSkeleton type="title" />
                    <BaseSkeleton type="text" />
                    <BaseSkeleton type="text" />
                </div>
            </div>            
        </div>
    )
}
