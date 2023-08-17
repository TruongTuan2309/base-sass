import { FacebookIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '@/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <FacebookIcon
        onClick={() =>
          window.open('https://www.facebook.com/titantradingplatform')
        }
      />
      <YoutubeIcon
        onClick={() =>
          window.open('https://www.youtube.com/@TitanTradingPlatform')
        }
      />
      <TwitterIcon
        onClick={() => window.open('https://twitter.com/TitanTradingBot')}
      />
      <TelegramIcon
        onClick={() => window.open('https://t.me/titantradingplatformVN')}
      />
    </div>
  )
}

export default Footer
