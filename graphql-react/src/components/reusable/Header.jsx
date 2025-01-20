import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Toggle the mobile menu visibility
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'>
			<div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>
				{/* Logo */}
				<div className='text-3xl font-bold text-white'>
					<span className='text-4xl '>Library</span> Hub
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-10'>
					<a
						href='/'
						className='text-lg font-medium  hover:scale-105 transform transition-all duration-300 ease-in-out'>
						Home
					</a>
					<a
						href='/login'
						className='text-lg font-medium  hover:scale-105 transform transition-all duration-300 ease-in-out'>
						Login
					</a>
					<a
						href='/register'
						className='text-lg font-medium  hover:scale-105 transform transition-all duration-300 ease-in-out'>
						Register
					</a>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-white p-2 rounded-lg focus:outline-none'
					onClick={toggleMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden bg-base-100 p-6 absolute w-full left-0 top-0 transition-all duration-300 ease-in-out ${
					isMenuOpen ? 'block' : 'hidden'
				}`}>
				<a
					href='/'
					className='block text-2xl py-3 hover:text-accent hover:scale-105 transition-all duration-300 ease-in-out'>
					Home
				</a>
				<a
					href='/login'
					className='block text-2xl py-3 hover:text-accent hover:scale-105 transition-all duration-300 ease-in-out'>
					Login
				</a>
				<a
					href='/register'
					className='block text-2xl py-3 hover:text-accent hover:scale-105 transition-all duration-300 ease-in-out'>
					Register
				</a>
			</div>
		</header>
	)
}
