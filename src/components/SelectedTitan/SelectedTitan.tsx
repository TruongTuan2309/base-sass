import {
  BuildingIcon,
  DollarCircleIcon,
  StarIcon,
  UserCircleIcon
} from '@/assets'
import React from 'react'

const SelectedTitan = () => {
  const selectedTitans = [
    {
      icon: <StarIcon />,
      title: 'Uy tín',
      description:
        'Nền tảng giao dịch Titan được phát triển bởi những nhà giao dịch giàu kinh nghiệm với hơn 20 năm kinh nghiệm.'
    },
    {
      icon: <BuildingIcon />,
      title: 'Đầu tư bởi các ông lớn từ Hàn Quốc',
      description:
        'Được đầu tư bởi các ông lớn từ Hàn Quốc như Cheonjo - tập đoàn chuyên về công nghệ thông tin - viễn thông và sản xuất linh kiện điện tử; hay Hanmi Global - công ty hàng đầu Hàn Quốc trong lĩnh vực tư vấn giám sát và quản lý dự án xây dựng.'
    },
    {
      icon: <DollarCircleIcon />,
      title: 'Thanh khoản cao',
      description:
        'Đối tác của nhiều sàn lớn như OKX, Bybit, Bitget… nên thanh khoản dày, không lo trượt giá.'
    },
    {
      icon: <UserCircleIcon />,
      title: 'Phù hợp với nguồn vốn nhỏ',
      description:
        'Phù hợp với những nhà đầu tư ban đầu có nguồn vốn nhỏ: Có 2 lựa chọn là gói trả trước $20/tháng hoặc không cần mua gói trả trước, có thể dùng chế độ ‘Profit sharing’ thì bot sẽ tự trừ phí vào lợi nhuận.'
    }
  ]

  const handleOpenLink = () => {
    window.open('https://dashboard.titantrading.io/register?referralId=5fdb8d')
  }

  return (
    <div className='select-titan'>
      <div className='content'>
        <h2 className='text-primary'>
          Tại sao bạn nên chọn nền tảng giao dịch Titan?
        </h2>
        <div className='list-selected'>
          {selectedTitans.map((item: any, index: number) => (
            <div className='selected-item' key={index}>
              <div className='item-content'>
                {item.icon}
                <h6 className='text-base color-white'>{item.title}</h6>
                <p className='text-base color-default'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className='btn-submit text-base color-black'
          onClick={handleOpenLink}
        >
          Đăng ký sử dụng Titan ngay bây giờ
        </button>
      </div>
    </div>
  )
}

export default SelectedTitan
