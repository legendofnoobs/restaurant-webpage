/* eslint-disable react/prop-types */
import Button from "./Button"


const MealCard = (props) => {
	return (
		<div className="w-96 bg-slate-600 p-4 rounded-2xl flex flex-col justify-between max-[1024px]:w-80 max-[634px]:w-72">
			<div>
				<div className="mb-3">
					<img
						src={props.photo}
						className="w-full rounded-xl aspect-video"
						alt="Meal Photo"
					/>
				</div>
				<div>
					<div className="mb-2">
						<h2 className="text-2xl font-bold mb-1">
							{props.title}
						</h2>
						<p className="text-lg mb-1">
							{props.description}
						</p>
					</div>
				</div>
			</div>
				<div className="flex justify-between items-center">
					<Button label="Order Now"/>
					<p className="text-xl font-bold">$ {props.price}</p>
				</div>
		</div>
	)
}

export default MealCard