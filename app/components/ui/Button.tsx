import React from 'react'

interface IButtonProps {
    title: string
    icon?: string
}

const Button = ({ title, icon }: IButtonProps) => {
    return (
        <button className='bg-purple-900 text-white py-2 px-5 rounded-full hover:bg-purple-500'>
            {title}
            <i className={`${icon} pl-3 mx-auto`}></i>
        </button>
    )
}

export default Button