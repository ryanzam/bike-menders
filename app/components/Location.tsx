import React from 'react'

const Location = () => {
    return (
        <div
            id='location'
            className="my-[5%] flex w-full flex-col place-content-center place-items-center gap-5"
        >
            <h2 className="primary-text-color text-3xl">On the map</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190248.38593401582!2d84.31800339604546!3d27.622225596975667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1740137882639!5m2!1sen!2snp"
                className="h-[350px] w-[600px] max-md:w-full"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default Location