// eslint-disable-next-line
import tw, { css } from 'twin.macro'
import image from "../../../Images/1.png"

const fadeIn = css`
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const WealthSection = () => {
  return (
    <div tw="grid grid-cols-2 max-w-7xl  mx-auto gap-4 my-5 p-5 h-100v justify-center items-center" >
      <img css={fadeIn} tw="row-start-2 md:(row-start-1 col-span-1) col-span-2 " src={image} alt="" />
      <div tw="row-start-1 col-span-2  flex flex-col  text-center  w-full space-y-10 md:(row-start-1 text-left col-span-1 items-end) " >
        <p tw=" max-w-md font-bold text-3xl md:text-7xl " >Wealth Management</p>
        <p tw="max-w-md  opacity-70 " > Wellness management is the expertise we are proud to
        provide. It takes into account the area of market strategy,
        management of trusts, investment planning. Wellness
        management helps to get the needed guidance about
        how to cover all the aspects of financial life.</p>
        <p tw="max-w-md  opacity-70 " >All previously listed is based on the powerful technical
        solutions, including asset/portfolio management, robo-
        advisors and work with huge amounts of historical data.</p>
      </div>
    </div >
  )
}

export default WealthSection
