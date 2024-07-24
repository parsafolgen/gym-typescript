import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorMonster from '@/assets/SponsorMonster.png'
import SponsorRedbull from '@/assets/SponsorRedbull.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage : (value : SelectedPage) => void,
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)")
  return <section
  id='home'
  className='bg-gray-20 gap-16 py-10 md:h-full md:pb-0'>
    {/* IMAGE AND MAIN HEADER  */}
    <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* HEADINGS */}
            <motion.div className='md:-mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{once : true , amount : 0.5}}
            transition={{duration : 0.5}}
            variants= {{
                hidden : {opacity : 0 , x : -100},
                visible : {opacity : 1 , x : 0},
            }}
            >
                <div className='relative '>
                    <div className='before:absolute before:-top-10 before:content-evolvetext before:-left-0 before:z-[-1] before:blur-sm'>
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
                </div>
                <p className='mt-8 text-sm'>*Classic memberships begin at $15 and PF Black Card® memberships begin at $24.99, billed monthly. Memberships may include 12-month commitment. State and local taxes may apply. Subject to an annual fee of $49. Prices may vary depending on location. Must be at least 18 years old to enroll, or 13-17 with parent/guardian. Participating locations only. Locations independently owned and operated. See home club for details. We reserve the right to correct pricing errors or withdraw offer at any time. ©2024 GYM Franchising LLC</p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div className='flex gap-8 items-center mt-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once : true , amount : 0.5}}
            transition={{ delay : 0.2 ,duration : 0.5}}
            variants= {{
                hidden : {opacity : 0 , x : -100},
                visible : {opacity : 1 , x : 0},
            }}
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </motion.div>
        </div>
        {/* IMAGE */}
        <div className='flex justify-center basis-5/6 md:z-10
        md:ml-40 md:mt-16 md:justify-end'>
            <img className='md:w-80' src={HomePageGraphic} alt="home-pagegraphic" />
        </div>    
    </motion.div>
    {/* SPONSORS */}
    {isAboveMediumScreen && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6 '>
                <div className='flex w-3/5 items-center justify-between gap-8'>
                    <img className='w-24' src={SponsorRedbull} alt="redbull-sponsor" />
                    <img className='w-24' src={SponsorMonster} alt="monster-sponsor" />
                    <img className='w-24' src={SponsorFortune} alt="fortune-sponsor" />
                </div>
            </div>
        </div>
    )
        
    }
  </section>
}
export default Home;