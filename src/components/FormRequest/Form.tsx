import { MessageIcon } from '@/assets'
import httpRequest from '@/services/http'
import { ChangeEvent, useState } from 'react'

interface FormRequestProps {
  id: string
}

const FormRequest = ({ id }: FormRequestProps) => {
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    usernameTelegram: ''
  })
  const [validateError, setValidateError] = useState<any>({})

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

  const handleBlurName = () => {
    const { name } = form
    let newValidateError = validateError

    if (name === '') {
      newValidateError = {
        ...newValidateError,
        name: 'Trường này là bắt buộc'
      }
    }
    setValidateError(newValidateError)
  }
  const handleBlurPhone = () => {
    const { phoneNumber } = form
    let newValidateError = validateError

    if (phoneNumber === '') {
      newValidateError = {
        ...newValidateError,
        phoneNumber: 'Trường này là bắt buộc'
      }
    } else if (!validatePhoneNumber(phoneNumber)) {
      newValidateError = {
        ...newValidateError,
        phoneNumber: 'Số điện thoại không đúng định dạng'
      }
    }
    setValidateError(newValidateError)
  }
  const handleBlurEmail = () => {
    const { email } = form
    let newValidateError = validateError
    if (email === '') {
      newValidateError = {
        ...newValidateError,
        email: 'Trường này là bắt buộc'
      }
    } else if (validateEmail(email)) {
      newValidateError = {
        ...newValidateError,
        email: 'Email không đúng định dạng'
      }
    }

    setValidateError(newValidateError)
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (Object.keys(validateError).length === 0) {
        await httpRequest.post('/guest/getting-in-touch', form)
        setForm({
          email: '',
          name: '',
          phoneNumber: '',
          usernameTelegram: ''
        })
      }
    } catch (error) {}
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
                onBlur={handleBlurName}
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
                name='phoneNumber'
                onChange={handleChangeForm}
                onKeyDown={handleKeyDown}
                onBlur={handleBlurPhone}
              />
              <p className='error'>{validateError.phoneNumber}</p>
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
                onBlur={handleBlurEmail}
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
                name='usernameTelegram'
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
