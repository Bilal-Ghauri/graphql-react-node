const NewsLetter = () => {
	return (
		<section className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20'>
			<div className='max-w-7xl mx-auto px-6 text-center'>
				<h2 className='text-4xl font-extrabold mb-6'>Stay Updated!</h2>
				<p className='text-lg md:text-xl mb-12'>
					Subscribe to our newsletter to receive updates on new book
					arrivals, special offers, and library news.
				</p>

				<div className='flex justify-center space-x-4'>
					<input
						type='email'
						placeholder='Enter your email'
						className='px-6 py-3 rounded-full w-64 text-black'
					/>
					<button className='bg-accent text-white py-3 px-8 rounded-full hover:bg-accent-dark'>
						Subscribe
					</button>
				</div>
			</div>
		</section>
	)
}

export default NewsLetter
