import MealCard from "../components/MealCard"
import { MealData } from "../data"

const MenuSection = () => {
	return (
		<div className="flex flex-col justify-center">
			<h1 className="text-center text-7xl max-[634px]:text-4xl">Menu</h1>
			<div className="flex gap-6 flex-wrap justify-start p-10 max-[1024px]:justify-center">
				{MealData.map((meal) => {
					return(
						<MealCard 
							key={meal.id} 
							photo={meal.photo} 
							title={meal.title}
							description={meal.description}
							price={meal.price}
							/>
					)
				})}
			</div>
		</div>
	)
}

export default MenuSection