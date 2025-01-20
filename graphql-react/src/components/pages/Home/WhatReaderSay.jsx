const WhatReaderSay = () => {
	return (
		<section className='bg-gray-100 py-20'>
			<div className='max-w-7xl mx-auto px-6 text-center'>
				<h2 className='text-4xl font-extrabold text-gray-900 mb-6'>
					What Our Readers Say
				</h2>
				<p className='text-lg md:text-xl text-gray-700 mb-12'>
					Hear from some of our happy readers who have enjoyed using
					our platform.
				</p>

				<div className='flex flex-wrap justify-center gap-10'>
					<div className='bg-white p-8 rounded-lg shadow-lg w-80'>
						<p className='text-gray-600 mb-4'>
							"I love how easy it is to borrow books on this
							platform. It's user-friendly and fast!"
						</p>
						<div className='flex items-center justify-start space-x-4'>
							<img
								src='/person.svg'
								alt='Reader 3'
								className='rounded-full w-14 p-2 border'
							/>
							<div>
								<h4 className='font-semibold text-gray-800'>
									Jane Doe
								</h4>
								<p className='text-sm text-gray-500'>
									Book Enthusiast
								</p>
							</div>
						</div>
					</div>

					<div className='bg-white p-8 rounded-lg shadow-lg w-80'>
						<p className='text-gray-600 mb-4'>
							"A fantastic collection of books with seamless
							borrowing. Highly recommend!"
						</p>
						<div className='flex items-center justify-start space-x-4'>
							<img
								src='/person.svg'
								alt='Reader 3'
								className='rounded-full w-14 p-2 border'
							/>
							<div>
								<h4 className='font-semibold text-gray-800'>
									John Smith
								</h4>
								<p className='text-sm text-gray-500'>
									Avid Reader
								</p>
							</div>
						</div>
					</div>

					<div className='bg-white p-8 rounded-lg shadow-lg w-80'>
						<p className='text-gray-600 mb-4'>
							"An amazing platform! I love the variety of books
							available, and the borrowing process is super easy."
						</p>
						<div className='flex items-center justify-start space-x-4'>
							<img
								src='/person.svg'
								alt='Reader 3'
								className='rounded-full w-14 p-2 border'
							/>
							<div>
								<h4 className='font-semibold text-gray-800'>
									Emily Clark
								</h4>
								<p className='text-sm text-gray-500'>Student</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhatReaderSay
