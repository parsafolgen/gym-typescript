import { useState } from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/16/solid";
import Logo from '@/assets/Logo.png'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton"

type Props = {
    isTopOfPage : boolean,
    selectedPage : SelectedPage ,
    setSelectedPage : (value : SelectedPage) => void,
}

const Navbar = ({isTopOfPage , selectedPage , setSelectedPage}: Props) => {
    const [isMenuToggled ,setIsMenuToggled] = useState<boolean>(false)
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width : 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-2`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img className="w-20" src={Logo} alt="" />

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreen ?
                        (<div className={` ${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page = "Home"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Benefits"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Our Classes" 
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Contact Us"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Became a Member</ActionButton>
                            </div>
                        </div>) 
                        : 
                        (
                            <button
                            className="rounded-full p-2 bg-secondary-500"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )
                    }
            
                </div>
            </div>
        </div>
        {!isAboveMediumScreen && isMenuToggled && (
            <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className=" flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
                    {/* MENU ITEMS */}

                    <div className={`flex flex-col ml-[33%] gap-10 text-2xl`}>
                                <Link page = "Home"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Benefits"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Our Classes" 
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                <Link page = "Contact Us"
                                selectedPage = {selectedPage}
                                setSelectedPage = {setSelectedPage}
                                />
                                </div>

            </div>
        )

        }

    </nav>
    
  )
}


export default Navbar;