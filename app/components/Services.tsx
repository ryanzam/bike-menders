import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <section
            id='services'
            className="flex min-h-[60vh] w-full flex-col place-items-center gap-[10%] bg-[#EFEFEF] p-8 px-[20%] max-md:h-max max-md:min-h-[unset] max-md:gap-[4%] max-md:px-[5%]"
        >
            <h2 className="text-2xl text-secondary max-md:text-lg">
                Our services
            </h2>
            <h2
                className="text-center text-5xl text-primary max-md:text-3xl text-purple-900"
            >
                Our premium service
            </h2>

            <div
                className="mt-[5%] flex w-full place-content-center justify-around gap-[10%] max-md:mt-8"
            >
                <div
                    className="flex h-[350px] w-[200px] flex-col place-content-center place-items-center gap-4 text-center max-md:h-[150px] max-md:w-[150px]"
                >
                    <div className="h-[150px] w-full max-md:h-[100px]">
                        <Image
                            src="./repair.svg"
                            alt="car wash"
                            className="h-full w-full object-contain"
                            height={150}
                            width={150}
                        />
                    </div>
                    <div
                        className="text-purple-900 text-2xl max-md:text-lg"
                    >
                        Motorbikes repairs
                    </div>
                </div>

                <div
                    className="flex h-[350px] w-[200px] flex-col place-content-center place-items-center gap-4 text-center max-md:h-[150px] max-md:w-[150px]"
                >
                    <div className="h-[150px] w-full max-md:h-[100px]">
                        <Image
                            src="./wash.svg"
                            alt="car wash"
                            className="h-full w-full object-contain"
                            height={150}
                            width={150}
                        />
                    </div>
                    <div
                        className="text-purple-900 text-2xl max-md:text-lg"
                    >
                        Motorbikes washing
                    </div>
                </div>

                <div
                    className="flex h-[350px] w-[200px] flex-col place-content-center place-items-center gap-4 text-center max-md:h-[150px] max-md:w-[150px]"
                >
                    <div className="h-[150px] w-full max-md:h-[100px]">
                        <Image
                            src="./bike.svg"
                            alt="car wash"
                            className="h-full w-full object-contain"
                            height={150}
                            width={150}
                        />
                    </div>
                    <div
                        className="text-purple-900 text-2xl max-md:text-lg"
                    >
                        Resell motorbikes
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services