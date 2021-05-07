import { HomeSection, WealthSection, ProjectSection, PriceSection, FadeInSection } from '../components'

const Home = () => {
    return (
        <>

            <FadeInSection>
                <HomeSection />
            </FadeInSection>

            <FadeInSection>

                <WealthSection />
            </FadeInSection>
            <FadeInSection>
                <ProjectSection />
            </FadeInSection>

            <FadeInSection>
                <PriceSection />
            </FadeInSection>
        </>
    )
}

export default Home;