import AboutSection from '../components/pages/Home/AboutSection'
import FAQ from '../components/pages/Home/FAQ'
import FeaturedBooks from '../components/pages/Home/FeaturedBooks'
import HeroSection from '../components/pages/Home/HeroSection'
import NewsLetter from '../components/pages/Home/NewsLetter'
import WhatReaderSay from '../components/pages/Home/WhatReaderSay'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'

const Home = () => {
	return (
		<div className='bg-base-200 text-base-content'>
			<Header />
			<HeroSection />
			<AboutSection />
			<WhatReaderSay />
			<FAQ />
			<NewsLetter />
			{/* <FeaturedBooks /> */}
			<Footer />
		</div>
	)
}

export default Home
