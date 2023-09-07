import { IMAGE } from '@/assets'
import useMobile from '@/hooks/useMobile'

const Banner = () => {
  const isMobile = useMobile()
  const banner = isMobile ? IMAGE.botBannerMobile : IMAGE.botBanner
  return (
    <div className='home-banner'>
      <div className='content'>
        <div className='info'>
          <div className='title-description'>
            <img src={IMAGE.logoTitan} alt='logo-titan' />
            <h1 className='title text-primary'>
              Đầu tư nhàn hạ, lợi nhuận tối đa với nền tảng giao dịch Titan
            </h1>
            <p className='color-white text-base'>
              Chúng tôi cung cấp các công cụ và bot giúp hỗ trợ giao dịch tự
              động để mọi người có thể dễ dàng đầu tư vào crypto.
            </p>
          </div>
          <button
            className='btn-submit text-base color-black'
            onClick={() => window.open()}
          >
            Đăng ký sử dụng miễn phí 1 tháng
          </button>
        </div>
        <div className='image-banner'>
          <img src={banner} alt='bot-banner' />
        </div>
      </div>
    </div>
  )
}

export default Banner
