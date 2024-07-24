import Logo from '@/assets/Logo.png'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-5">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-0 basis-1/2 md:mt0">
            <img className='w-24' src={Logo} alt="Logo" />
            <p className='my-5'>Every World Gym is independently owned and operated.
            Click Here to learn more about becoming a World Gym owner</p>
            <p>GYM All Rights Reserved </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Massa orci senctus</p>
            <p className='my-5'>Et gravida id et etiam</p>
            <p className='my-5'>Ulacorper vivams</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact US</h4>
            <p className='my-5'>tempas metas vadia</p>
            <p className='my-5'>(+98)021-74980</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer