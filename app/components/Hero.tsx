import Button from "./ui/Button"

const Hero = () => {
    return (
        <div id="hero" className="flex justify-center items-center flex-col gap-5">
            <h1 className="text-purple-500 text-5xl font-bold">Best motorbikes repair shop</h1>
            <Button title="Book a time" />
        </div>
    )
}

export default Hero