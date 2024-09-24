import homePhoto from "../assets/homePhoto.jpg"
import Button from "../components/Button"

const HomeSection = () => {
	return (
		<div className="flex gap-x-8 items-center max-[1024px]:flex-col">
			<div className="max-[1024px]:mb-6">
				<img
					src={homePhoto}
					className="rounded-xl w-full"
					alt="homeImage"
				/>
			</div>
			<div>
				<p className="text-2xl mb-6">Chase the new flavour</p>
				<h1 className="text-7xl mb-6 max-[634px]:text-4xl">The Key To Junky Dining</h1>
				<p className="text-2xl mb-6">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                <Button label="Discover Now"/>
			</div>
		</div>
	)
}

export default HomeSection