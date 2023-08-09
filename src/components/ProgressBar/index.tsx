import React from 'react'

function ProgressBar({ width }: { width: number }) {
    return (
        <div className="w-full rounded-md bg-neutral-200 dark:bg-neutral-600">
            <div
                className="bg-gradient-to-r   from-pink-500 via-red-500 to-yellow-500 p-0.5  rounded-md text-center text-xs font-medium leading-none text-primary-100"
                style={{ width: `${width}%` }}>
                {width}%
            </div>
        </div>
    )
}

export default ProgressBar