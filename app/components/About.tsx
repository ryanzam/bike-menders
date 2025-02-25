import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='w-[75%] flex flex-col mx-auto py-10'>
            <h2 className='text-purple-900 text-5xl text-center py-6'>Bike Menders, BNP</h2>

            <div className='grid grid-cols-2 gap-14'>
                <div>
                    <Image src="/bg2.jpg" alt="motorbike garage" width={350} height={350} />
                </div>

                <div className='my-auto flex flex-col gap-3'>
                    <h2 className='text-purple-900 text-3xl'>About Us</h2>
                    <p>Supreme Car Wash offers premium car cleaning services, providing meticulous attention to
                        detail to ensure your vehicle shines like new. Our experienced team uses top-quality products
                        and advanced techniques to deliver superior results. Visit us today for a professional car wash
                        experience that leaves your vehicle looking pristine inside and out.</p>
                    <a className='bg-purple-900 text-white py-2 px-5 rounded-full hover:bg-purple-500 text-center' href="#location">
                        View on Map
                        <i className="bi bi-arrow-right pl-3"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About