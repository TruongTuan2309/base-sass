import Footer from '@/commons/DropDown/Footer'
import Banner from '@/components/Banner'
import BenefitBot from '@/components/BenefitBot'
import BotUser from '@/components/BotUser'
import CryptoBot from '@/components/CryptoBot/CryptoBot'
import Dashboard from '@/components/Dashboard'
import FormRequest from '@/components/FormRequest'
import Question from '@/components/Question'
import SelectedTitan from '@/components/SelectedTitan'
import Technology from '@/components/Technology'
import TitanPlatForm from '@/components/TitanPlatForm'

const Home = () => {
  const handleScroll = () => {
    const titanElement = document.getElementById('titan')
    if (titanElement) {
      titanElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='home'>
      <Banner handleScroll={handleScroll} />
      <CryptoBot />
      <BenefitBot />
      <Technology />
      <BotUser />
      <TitanPlatForm />
      <Dashboard />
      <SelectedTitan />
      <Question />
      <FormRequest id='titan' />
      <Footer />
    </div>
  )
}

export default Home
