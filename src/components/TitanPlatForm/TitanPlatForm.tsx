import {
  BitcoinIcon,
  BotIcon,
  BoxSearchIcon,
  CalendarIcon,
  FavoriteChartIcon,
  IMAGE,
  LineIcon,
  MonitorIcon
} from '@/assets'

const TitanPlatForm = () => {
  const platforms = [
    {
      icon: <FavoriteChartIcon />,
      title: 'Thuật toán giao dịch tiên tiến',
      description:
        'Với các thuật toán giao dịch tiên tiến và đa dạng, Titan Trading Platform có thể tạo ra lợi nhuận ổn định vượt trội so với các phương thức giao dịch truyền thống.'
    },
    {
      icon: <BotIcon />,
      title: 'Tự động hóa',
      description:
        'Titan sử dụng tự động hóa để loại bỏ những thành kiến cảm xúc và sự kém hiệu quả có thể cản trở hiệu suất giao dịch của bạn.'
    },
    {
      icon: <BitcoinIcon />,
      title: 'Chuyên môn về tiền điện tử',
      description:
        'Dự án được phát triển bởi đội ngũ có kinh nghiệm nhiều năm và chuyên môn sâu về thị trường tiền điện tử.'
    },
    {
      icon: <CalendarIcon />,
      title: 'Giao dịch 24/7',
      description:
        'Với Titan, bạn không bao giờ phải lo lắng về việc bỏ lỡ cơ hội giao dịch.'
    },
    {
      icon: <BoxSearchIcon />,
      title: 'Tính minh bạch',
      description:
        'Titan cung cấp đầy đủ tính minh bạch và trách nhiệm giải trình, với các báo cáo hiệu suất chi tiết và dữ liệu giao dịch theo thời gian thực.'
    },
    {
      icon: <MonitorIcon />,
      title: 'Giao diện thân thiện với người dùng',
      description: 'Titan rất dễ sử dụng cho các nhà giao dịch ở mọi cấp độ.'
    }
  ]
  return (
    <div className='titan-platform'>
      <div className='content'>
        <h2 className='text-primary'>
          Những tính năng đặc biệt của nền tảng giao dịch Titan
        </h2>
        <div className='list-platform'>
          {platforms.map((item: any, index: number) => (
            <div className='platform-item' key={index}>
              <img src={IMAGE.line} alt='' />
              <div className='box-info'>
                {item.icon}
                <h6 className='text-base color-white'>{item.title}</h6>
                <p className='text-base color-default'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TitanPlatForm
