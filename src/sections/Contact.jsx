import photo from "../assets/contactPhoto.jpg"

const Contact = () => {
	return (
		<div>
			<h1 className="text-center text-7xl mb-4 max-[634px]:text-4xl">Contact Us</h1>
			<div className="flex gap-x-5 max-[1024px]:flex-col max-[1024px]:gap-y-6">
				<div className="text-center flex flex-col justify-center">
					<h1 className="text-5xl max-[634px]:text-2xl">Address</h1>
					<div className="text-2xl max-[634px]:text-xl">
						<p>9 W 53rd St, New York, NY 10019, USA</p>
						<p>+1 212-344-1230</p>
						<p>+1 212-344-1230</p>
					</div>
				</div>
				<div>
					<img
						src={photo}
						className="w-full"
						alt="photo"
					/>
					
				</div>
				<div className="text-center flex flex-col justify-center">
					<h1 className="text-5xl max-[634px]:text-2xl">Workink Hours</h1>
					<div className="text-2xl max-[634px]:text-xl">
						<p>Monday - Friday: 10 AM - 10 PM</p>
						<p>Saturday - Sunday: 07:00 am - 11:00 pm</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact