import { BagIcon, BookIcon, DollarIcon, UserIcon } from '@/assets'

const BotUser = () => {
  const botUsers = [
    {
      icon: <UserIcon />,
      title: 'Trader và Investor'
    },
    {
      icon: <BookIcon />,
      title: 'Người có kiến thức nền tảng về đầu tư crypto'
    },
    {
      icon: <DollarIcon />,
      title: 'Người có nguồn vốn nhàn rỗi'
    },
    {
      icon: <BagIcon />,
      title: 'Người bận rộn, ít thời gian theo sát thị trường'
    }
  ]
  return (
    <div className='bot-user'>
      <div className='content'>
        <h2 className='text-primary'>Đối tượng thích hợp dùng bot</h2>
        <div className='tags'>
          {botUsers.map((item: any, index: number) => (
            <div className='tag-item' key={index}>
              {item.icon}
              <p className='text-base color-default'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BotUser
