import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import HText from '@/shared/HText';
import { ClassesType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Class from './Class';

type Props = {setSelectedPage : (value: SelectedPage) => void;}

const classes : Array<ClassesType> = [
    {
    name : "Weight training Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image1,
    },
    {
    name : "Advanced Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image2,
    },
    {
    name : "Basic Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image3,
    },
    {
    name : "Monster Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image4,
    },
    {
    name : "Full Body Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image5,
    },
    {
    name : "fit Classes",
    description : "It doesn’t matter if you’re 15 or 115, if you’re an elite athlete or a weekend warrior, if you’re an experienced gym goer or are just starting out on your fitness journey.",
    image : image6,
    },
]

const OurClasses = ({setSelectedPage}: Props) => {
  return <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once : true , amount : 0.5}}
                transition={{duration : 0.5}}
                variants= {{
                    hidden : {opacity : 0 , x : -50},
                    visible : {opacity : 1 , x : 0},
                }}            
                >
                <div className='md:w-3/5'>
                    <HText>Our Classes</HText>
                    <p className='py-5'>We do it better, because we’ve done it longer.  Experience matters- and our years of experience have helped us formulate the right blend of people, technology, programming, environments and equipment to better help all those who are serious about improving the quality of their lives and reaching their goals no matter what those may be.  </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[365px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item : ClassesType , index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>

        </motion.div>
  </section>
}

export default OurClasses