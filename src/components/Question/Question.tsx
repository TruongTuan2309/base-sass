import { TelegramIcon } from '@/assets'
import DropDown from '@/commons/DropDown'
import { questions } from '@/constants/constants'
import React from 'react'

const Question = () => {
  return (
    <div className='question'>
      <div className='content'>
        <h2 className='text-primary'>Các câu hỏi thường gặp</h2>
        <p className='description text-base color-default'>
          Chúng tôi sẽ cập nhật một số câu hỏi thường gặp cùng giải đáp phía
          dưới để mọi người hiểu hơn về cách bot giao dịch hoạt động. Nếu không
          tìm thấy câu trả lời cho thắc mắc của mình, bạn hãy liên hệ Titan (để
          kink tư vấn)  để được hỗ trợ nhanh nhất.
        </p>
        <div className='list-dropdown'>
          {questions.map((item: any, index) => (
            <DropDown key={index} item={item} />
          ))}
        </div>
        <div className='telegram'>
          <TelegramIcon />
          <a
            href='https://t.me/titantradingplatformVN'
            target='_blank'
            className='text-base'
          >
            https://t.me/titantradingplatformVN
          </a>
        </div>
      </div>
    </div>
  )
}

export default Question
