import WorkersPhoto from "../assets/workers.jpg"
import Button from "../components/Button"

const AboutSections = () => {
	return (
		<div className="flex gap-x-8">
			<div className=" w-1/2">
				<h2 className="text-7xl mb-4">About Us</h2>
                <p className="text-2xl mb-4">Welcome to Grill & Go, where great food meets fast service! Founded with a passion for quality and a love for delicious meals, our mission is to serve fresh, mouth-watering fast food that satisfies your cravings without the wait. Whether you’re grabbing a quick bite on the go or enjoying a meal with friends and family, we aim to make every experience delightful and memorable.</p>
				<Button label="Know More"/>
			</div>
			<div className=" w-1/2">
				<img
					src={WorkersPhoto}
					className="w-full rounded-xl"
					alt="WorkersPhoto"
				/>
				
			</div>
		</div>
	)
}

export default AboutSections