import React, { ReactNode } from 'react'
type TypeBorderCard = {
    children: ReactNode,
    isFullWidth?: boolean,
    showHover?: boolean
}
const BorderCard = ({ children, isFullWidth = true, showHover = false }: TypeBorderCard) => {
    const isFullWidthCSS = isFullWidth ? '' : 'w-fit';
    const showHoverEffectCSS = showHover ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-1 ' : ''
    return (
        <div className={`${isFullWidthCSS}  rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1`}>
            <div className={`${isFullWidthCSS} p-4 bg-black h-full text-white hover:${showHoverEffectCSS}`}>
                {children}
            </div>
        </div>
    )
}

export default BorderCard