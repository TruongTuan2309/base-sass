import { ArrowRightIcon } from '@/assets'

const CryptoBot = () => {
  return (
    <div className='crypto-trading-bots'>
      <h2 className='text-primary'>Bot giao dịch crypto là gì?</h2>
      <div className='description-crypto-bot'>
        <div className='icon-arrow'>
          <ArrowRightIcon />
        </div>
        <p className='text-base color-default description'>
          Thị trường tiền điện tử giao dịch 24/7 nên nhiều nhà giao dịch không
          kịp phản ứng với những biến động đó và bị lỡ mất cơ hội đầu tư.
        </p>
      </div>
      <div className='description-crypto-bot'>
        <div className='icon-arrow'>
          <ArrowRightIcon />
        </div>
        <p className='text-base color-default description'>
          Vì vậy mọi người vẫn luôn tìm kiếm các công cụ giúp họ theo dõi thị
          trường và tự động thực hiện giao dịch. Và giờ đây, công cụ này bắt đầu
          xuất hiện, đã - đang - và sẽ trở thành xu hướng toàn cầu. Đó là Bot
          giao dịch crypto.
        </p>
      </div>
      <div className='description-crypto-bot'>
        <div className='icon-arrow'>
          <ArrowRightIcon />
        </div>
        <p className='text-base color-default description'>
          Đây là hệ thống các thuật toán được lập trình sẵn nhằm tự động hoá các
          quy trình giao dịch và giúp bạn không tốn quá nhiều thời gian vào việc
          theo dõi liên tục các biến động của thị trường.
        </p>
      </div>
    </div>
  )
}

export default CryptoBot
