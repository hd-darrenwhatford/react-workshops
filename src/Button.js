iimport React from 'react'

	const Button = (props) => {

	// Props can be listed here
	const { type = '',
		propTwo,
		propThree } = props

		return (
			<button type={type} propTwo={propTwo} propThree={propThree}>Button</button>
			)
		}

	export default Button
