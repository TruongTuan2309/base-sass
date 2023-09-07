import { FacebookIcon } from '@/assets'
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
  return (
    <div className='home'>
      <Banner />
      <CryptoBot />
      <BenefitBot />
      <Technology />
      <BotUser />
      <TitanPlatForm />
      <Dashboard />
      <SelectedTitan />
      <Question />
      {/* <FormRequest id='titan' /> */}
      <Footer />
      <div
        className='chat-facebook'
        onClick={() =>
          window.open('https://www.facebook.com/messages/t/127840393552180')
        }
      >
        <FacebookIcon />
        <div className='info'>
          <h6>Chat Facebook</h6>
          <p>08:00 - 24:00</p>
        </div>
      </div>
    </div>
  )
}

export default Home
