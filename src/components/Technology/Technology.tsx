import { IMAGE } from '@/assets'
import { listTechnology } from '@/constants/constants'
import useMobile from '@/hooks/useMobile'

const Technology = () => {
  const isMobile = useMobile()
  const technology = isMobile ? IMAGE.technologyMobile : IMAGE.technology
  return (
    <div className='technology-ai'>
      <div className='content'>
        <h2 className='text-primary'>
          Kết hợp công nghệ trí tuệ nhân tạo (AI) vào đầu tư
        </h2>
        <div className='img-technology'>
          <img src={technology} alt='technology-ai' />
          <div className='list-technology'>
            {listTechnology.map((item: any, index: number) => (
              <div className='technology-item' key={index}>
                <p className='title'>{item.title}</p>
                <div className='description text-base color-default'>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
