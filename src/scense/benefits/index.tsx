import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon , UserGroupIcon , AcademicCapIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"


const container = {
  hidden : {},
  visible : {
    transition : {staggerChildren : 0.2}
  }
}

type Props = {
  setSelectedPage : (value : SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  const benefits: Array<BenefitType> = [
    {
    icon : <HomeModernIcon className="h-6 w-6" />,
    title : "Start of the art Facilities",
    description : "We provide a safe, secure and comfortable environment to train in no matter what your experience or fitness level is. We boast a strong community of like-minded people supporting and encouraging one another to achieve legendary greatness." 
    },
    {
    icon : <UserGroupIcon className="h-6 w-6" />,
    title : "100's of Diverse Classes",
    description : "If you’re serious about achieving a goal- no matter what that is- then we are your gym. From the best equipment, technology and programs to the best fitness professionals around, we are serious about getting you results." 
    },
    {
    icon : <AcademicCapIcon className="h-6 w-6" />,
    title : "Expert and ProTrainers",
    description : "Over the last 46 years, our iconic gym brand has set the standard for all others to follow. Legends have been made here since 1976. Now it’s your turn." 
    },

  ]


  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20 "
  >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADER */}
     <motion.div className="md:my-5 md:w-3/5"
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
        MORE THAN JUST GYM.
      </HText>
      <p className="my-5 text-sm">
      There is something for everyone to get fit at the J. From the largest fitness center on Mercer Island to our various courts including the newest program: pickleball! to our large selection of fitness classes, our fitness staff can help you find the best way to GYM.
      </p>
      </motion.div>
      {/* BENEFITS  */}
      <motion.div className="md:flex items-center justify-between gap-8 mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true , amount : 0.5}}
      variants={container}
      >
        {
          benefits.map((benefit : BenefitType) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))
        }
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitPageGraphic}
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div  className="relative"
          > 
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once : true , amount : 0.5}}
              transition={{duration : 0.5}}
              variants= {{
                  hidden : {opacity : 0 , x : 50},
                  visible : {opacity : 1 , x : 0},
              }}
            >
              <HText>
                    MELLIONS OF HAPPY MEMBER {" "}
                    <span className="text-primary-500">FIT</span>
              </HText>
            </motion.div>
          </div>

          {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once : true , amount : 0.5}}
              transition={{delay : 0.2 , duration : 0.5}}
              variants= {{
                  hidden : {opacity : 0 , x : 50},
                  visible : {opacity : 1 , x : 0},
              }}
            >
              <p className="my-5">In the early 1960’s, one man set out on a mission to change the world by improving people’s lives through fitness- and that he did. What started out as a small, single location in Los Angeles, California, has exploded to become an iconic, globally recognized gym brand that has fueled the modern fitness industry for decades. During this time, World Gym has produced some of the most legendary and iconic bodybuilders; has shaped and sculpted the Hollywood elite; has inspired millions of workout enthusiasts to lead an active lifestyle and transform their bodies; and it has welcomed all who were serious about improving their health and fitness. </p>
              <p className="mb-5">Today, over 46 years later, our mission remains the same: to improve peoples lives through fitness. We do this by continuing to be at the forefront of fitness innovation while at the same time remaining true to our roots. </p>
            </motion.div>


          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sprakles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
}
export default Benefits;