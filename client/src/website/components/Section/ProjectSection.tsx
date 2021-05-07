import tw from 'twin.macro'
import dbs from "../../../icons/growth.png"
import nfo from "../../../icons/growth1.png"
import bfc from "../../../icons/homework.png"
import fs from "../../../icons/role-model.png"

const SmallCard = tw.div`flex flex-col space-y-2 items-center justify-center rounded-bl-3xl rounded-tr-3xl border-t-4 border-b-4  border-purple-600 border-solid h-52 w-full bg-purple-400 shadow-2xl`

const ProjectSection = () => {
  return (
    <div tw="grid grid-cols-2 max-w-7xl  mx-auto gap-4 my-5 p-5 justify-center items-center mt-20 md:mt-auto" >


      <button tw="row-start-2 mx-auto md:(row-start-1 col-span-2  p-5 ) col-span-2 rounded-bl-3xl rounded-tr-3xl bg-purple-500 hover:bg-purple-400  p-3  w-52 shadow-md" >Learn More</button>



      <div tw="row-start-1 col-span-2  grid  gap-4  m-10 md:(grid-cols-2  row-start-1  col-span-1 ) " >

        <SmallCard>
          <img tw="h-20" src={dbs} alt="Digital Banking Companies" />
          <p tw="text-white font-semibold  " >Digital Banking Companies</p>
        </SmallCard>

        <SmallCard>
          <img tw="h-20" src={nfo} alt="Digital Banking Companies" />
          <p tw="text-white font-semibold  " >Non-Financial Organizations</p>
        </SmallCard>

        <SmallCard>
          <img tw="h-20" src={bfc} alt="Digital Banking Companies" />
          <p tw="text-white font-semibold  " >Big Financials Corporations</p>
        </SmallCard>

        <SmallCard>
          <img tw="h-20" src={fs} alt="Digital Banking Companies" />
          <p tw="text-white font-semibold  " >FinTech Startups</p>
        </SmallCard>
      </div >
    </div>
  )
}

export default ProjectSection
