import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header
            className="sticky top-0 z-20 flex h-[60px] w-full bg-white px-[10%] shadow-lg max-md:mr-auto max-md:bg-primary md:justify-around"
        >
            <div className="flex w-fit">
                <Link className="w-[200px] p-1" href='/'>
                    <img
                        src="./logo.png"
                        alt="bike-menders logo"
                        className="object-contain"
                    />
                </Link>
            </div>
            <div
                className="flex gap-10"
            >
                <div
                    className="flex h-full w-max gap-5 text-base max-md:mt-[30px] max-md:flex-col max-md:place-items-end max-md:gap-5 md:mx-auto md:place-items-center"
                >
                    <Link className="hover:text-purple-700" href="#about"> About us </Link>
                    <Link className="hover:text-purple-700" href="#services"> Services </Link>
                    <Link className="hover:text-purple-700" href="#contact"> Contact us </Link>
                </div>
                <div
                    className="flex place-items-center gap-[20px] text-xl max-md:w-full max-md:place-content-center max-md:!text-white"
                >
                    <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        area-label="facebook"
                        className="transition-colors duration-[0.3s] hover:text-purple-900"
                    >
                        <i className="bi bi-facebook"></i>
                    </Link>
                    <Link
                        href="https://www.instagram.com//"
                        target="_blank"
                        rel="noreferrer noopener"
                        area-label="instagram"
                        className="transition-colors duration-[0.3s] hover:text-purple-900"
                    >
                        <i className="bi bi-instagram"></i>
                    </Link>
                </div>
            </div>
            <button
                className="bi bi-list absolute right-3 top-3 z-50 text-2xl text-white md:hidden"
                aria-label="menu"
                id="collapse-btn"
            >
                <i className="bi bi-list text-black"></i>
            </button>
        </header>
    )
}

export default Navbar