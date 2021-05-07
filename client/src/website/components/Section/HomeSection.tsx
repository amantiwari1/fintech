import tw, { css } from 'twin.macro'
import image from "../../../Images/2.png"

const fadeIn = css`
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

`


const HomeSection = () => {
  return (

    <div tw="grid md:grid-cols-2 max-w-7xl  mx-auto gap-4  p-5 h-80v justify-center items-center mt-4 mb-20 md:my-auto" >
      <div tw="w-full space-y-10 " >
        <p tw="font-bold text-3xl md:text-7xl text-center md:text-left" >Financial Technology</p>
        <p tw="max-w-screen-sm md:max-w-md opacity-70" > We help our clients  to build FinTech products and empower traditional institutions  and enterprises with innovative technologies and approachs </p>
        <div tw="text-center md:text-left" >
          <button tw="rounded-bl-3xl rounded-tr-3xl bg-purple-500 hover:bg-purple-400  p-3 md:p-5 shadow-md" >Get Started</button>
        </div>
      </div>
      <img css={fadeIn} src={image} alt="" />
    </div>
  )
}

export default HomeSection
