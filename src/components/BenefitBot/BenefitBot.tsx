import { IMAGE } from '@/assets'
import { listBotBenefit } from '@/constants/constants'
import useMobile from '@/hooks/useMobile'

const BenefitBot = () => {
  const isMobile = useMobile()
  const benefit = isMobile ? IMAGE.benefitMobile : IMAGE.benefit

  const handleOpenLink = () => {
    window.open('https://titantrading.io/')
  }
  return (
    <div className='benefit-crypto-bot'>
      <h2 className='text-primary'>
        Bot giao dịch crypto đem lại những lợi ích gì?
      </h2>
      <div className='benefit-image'>
        <div className='benefit'>
          {listBotBenefit.map((item: any) => (
            <div className='info-benefit' key={item.id}>
              <div className='number text-base color-default'>{item.id}</div>
              <p className='text-base color-default description'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <img src={benefit} alt='img-benefit' />
      </div>
      <button
        className='btn-submit color-black text-base'
        onClick={handleOpenLink}
      >
        Tìm hiểu về nền tảng giao dịch Titan
      </button>
    </div>
  )
}

export default BenefitBot
