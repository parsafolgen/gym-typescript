import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactusPageGraphic from '@/assets/ContactusPageGraphic.png'


type Props = {
    setSelectedPage : (value : SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = "mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
    const {
        register,
        trigger,
        formState : {errors}
    } = useForm();

    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault()
        }
    }

  return <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
    {/* HEADER */}
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once : true , amount : 0.5}}
        transition={{duration : 0.5}}
        variants= {{
            hidden : {opacity : 0 , x : -50},
            visible : {opacity : 1 , x : 0},
        }}
    >
        <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE 
        </HText>
        <p className='mt-5'>
        Get the latest World Gym news, fitness tips, & exclusive offers delivered straight to your inbox.
        </p>
    </motion.div>

        {/* FORM AND IMAGE */}
        <div className='mt-10 justify-between gap-8 md:flex'>
            <div >
                <form target='_blank' onSubmit={onSubmit} method='POST' action='https://formsubmit.co/parsanothere@email.com'>
                <input type="text" className={inputStyles} placeholder='NAME' 
                {...register("name" , {
                    required : true,
                    maxLength : 100,
                })}
                />
                {errors.name &&
                <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "This field is required!"}
                    {errors.name.type === "maxLength" && "Max Char is 100"}
                </p>}
                <input type="email" className={inputStyles} placeholder='EMAIL' 
                {...register("name" , {
                    required : true,
                    pattern : /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                })}
                />
                {errors.name &&
                <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "This field is required!"}
                    {errors.name.type === "pattern" && "invaild Email addres"}
                </p>}
                <textarea className={inputStyles} placeholder='MESSAGE' rows={4} cols={50}
                {...register("message" , {
                    required : true,
                    maxLength : 2000,
                })}
                />
                {errors.name &&
                <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "This field is required!"}
                    {errors.name.type === "maxLength" && "Max Char is 100"}
                </p>}
                <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                    SUBMIT
                </button>
                </form>


            </div>
            <motion.div className='mt-10 basis-3/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{once : true , amount : 0.5}}
            transition={{duration : 0.5}}
            variants= {{
                hidden : {opacity : 0 , y : 50},
                visible : {opacity : 1 , y : 0},
            }}
            >
                <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-20 before:z-[1]'>
                    <img
                    className='w-full max-h-80 object-cover rounded-xl' 
                    src={ContactusPageGraphic} />
                    </div>
            </motion.div>
                    
        </div>
    </motion.div>

  </section>

}

export default ContactUs