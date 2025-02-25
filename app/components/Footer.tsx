import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer
            className="flex w-full place-content-around gap-3 bg-purple-950 p-[5%] px-[10%] text-white max-md:flex-col"
        >
            <div
                className="flex h-full w-[250px] flex-col place-items-center gap-6 max-md:w-full"
            >
                <Image src="/logo.png" alt="logo" className="w-[150px]" width={150} height={150}/>
                <div>
                    Bharatpur, Chitwan
                    <br />
                    Nepal
                </div>
                <div className="mt-3 text-lg font-semibold">Follow us</div>
                <div className="flex gap-4 text-2xl">
                    <a href="" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com/pauls_freeman"
                        aria-label="Twitter"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
            </div>

            <div className="flex h-full w-[250px] flex-col gap-4">
                <h2 className="text-3xl max-md:text-xl">Services</h2>
                <div className="flex flex-col gap-3 max-md:text-sm">
                    <a href="#" className="footer-link">Motorbikes repairment</a>
                    <a href="#" className="footer-link">Motorbikes Washing</a>
                    <a href="#" className="footer-link">Reselling motobikes</a>
                </div>
            </div>
            <div className="flex h-full w-[250px] flex-col gap-4">
                <h2 className="text-3xl max-md:text-xl">Resources</h2>
                <div className="flex flex-col gap-3 max-md:text-sm">
                    <a href="#about" className="footer-link">About us</a>
                    <a href="#" className="footer-link">FAQ</a>
                    <a href="#" className="footer-link">Contact Us</a>
                    <a href="#location" className="footer-link">Map</a>
                    <a href="#" className="footer-link">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer