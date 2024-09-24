/* eslint-disable react/prop-types */
const Button = (props) => {
	return (
		<button className=" bg-slate-700 text-white text-xl p-4 rounded-xl hover:bg-slate-800 transition ease">
			{props.label}
		</button>
	)
}

export default Button