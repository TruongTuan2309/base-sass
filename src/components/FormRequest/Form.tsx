import { MessageIcon } from '@/assets'
import { ChangeEvent, useState } from 'react'

interface FormRequestProps {
  id: string
}

const FormRequest = ({ id }: FormRequestProps) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    username_telegram: ''
  })
  const [validateError, setValidateError] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
    }
  }

  const validatePhoneNumber = (phone: string) => {
    const validate = /^[0-9]{10,11}$/
    return validate.test(phone)
  }

  const validateEmail = (email: string) => {
    const validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return validate.test(email)
  }

  const validateForm = () => {
    const { name, phone, email } = form
    let newValidateError = {}

    if (name === '') {
      newValidateError = {
        ...newValidateError,
        name: 'Trường này là bắt buộc'
      }
    }
    if (phone === '') {
      newValidateError = {
        ...newValidateError,
        phone: 'Trường này là bắt buộc'
      }
    } else if (!validatePhoneNumber(phone)) {
      newValidateError = {
        ...newValidateError,
        phone: 'Số điện thoại không đúng định dạng'
      }
    }
    if (email === '') {
      newValidateError = {
        ...newValidateError,
        email: 'Trường này là bắt buộc'
      }
    } else if (!validateEmail(email)) {
      newValidateError = {
        ...newValidateError,
        email: 'Email không đúng định dạng'
      }
    }

    setValidateError(newValidateError)
  }
  const handleBlur = () => {
    if (submitted) {
      validateForm()
    }
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    validateForm()
    if (Object.keys(validateError).length === 0) {
      console.log(form)
    }
  }

  return (
    <div className='form-request' id={id}>
      <div className='content'>
        <h2 className='text-primary'>
          Đầu tư với nền tảng giao dịch Titan ngay bây giờ
        </h2>
        <div className='img-form'>
          <MessageIcon className='icon-message' />
          <form onSubmit={handleSubmit} className='form'>
            <div className='form-item'>
              <label htmlFor='' className='text-base'>
                Họ và tên <span>*</span>
              </label>
              <input
                type='text'
                className='text-base'
                placeholder='Nhập họ và tên'
                name='name'
                onChange={handleChangeForm}
                onBlur={handleBlur}
              />
              <p className='error'>{validateError.name}</p>
            </div>
            <div className='form-item'>
              <label htmlFor='' className='text-base'>
                Số điện thoại <span>*</span>
              </label>
              <input
                type='number'
                className='text-base'
                placeholder='Nhập số điện thoại'
                name='phone'
                onChange={handleChangeForm}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
              />
              <p className='error'>{validateError.phone}</p>
            </div>
            <div className='form-item'>
              <label htmlFor='' className='text-base'>
                Email <span>*</span>
              </label>
              <input
                type='text'
                className='text-base'
                placeholder='Nhập địa chỉ email'
                name='email'
                onChange={handleChangeForm}
                onBlur={handleBlur}
              />
              <p className='error'>{validateError.email}</p>
            </div>
            <div className='form-item'>
              <label htmlFor='' className='text-base'>
                Username Telegram
              </label>
              <input
                type='text'
                className='text-base'
                placeholder='Nhập username Telegram'
                name='username_telegram'
                onChange={handleChangeForm}
              />
            </div>
            <button className='btn-submit text-base color-black' type='submit'>
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormRequest
