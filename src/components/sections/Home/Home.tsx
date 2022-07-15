import Button from '@components/common/Button'
import ChangeLanguage from '@components/common/ChangeLanguage'
import Section from '@components/common/Section'
import './Home.css'



const Home:React.FC = () => (
    <Section label='Home'>
      <ChangeLanguage />
    </Section>
)

export default Home