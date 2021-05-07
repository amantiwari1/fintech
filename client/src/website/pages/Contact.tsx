// eslint-disable-next-line
import tw from 'twin.macro'
import { ContactCard, FadeInSection } from '../components'
import image from '../../Images/3.png'

const Contact = () => {
  return (
    <FadeInSection>

      <div tw="grid  md:grid-cols-2 max-w-7xl mx-auto justify-center items-center" >
        <img tw="mx-auto" src={image} alt="" />
        <ContactCard />
      </div>
    </FadeInSection>
  )
}

export default Contact
