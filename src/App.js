import "./App.css"
import Checkbox from "./components/Checkbox"
import Dropdown from "./components/Dropdown"
import React from "react"
import { validateEmail, validatePhone } from "./validationUtils"
function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    lang: "",
    agreement: false
  })
  const [formError, setFormError] = React.useState({
    name: "",
    email: "",
    phone: ""
  })
  const [isValid, setIsValid] = React.useState(false)
  React.useEffect(() => {
    if (
      Object.values(formData).every((x) => x) &&
      Object.values(formError).every((x) => !x)
    ) {
      setIsValid(true)
    }else{
      setIsValid(false)
    }
  }, [formData])
  function handleChange(e) {
    if(e.target.name === 'agreement'){
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    if (!e.target.value) {
      setFormError((prev) => ({
        ...prev,
        [e.target.name]: "Введено не корректное значение"
      }))
      return
    }
    switch (e.target.name) {
      case "phone":
        if (!validatePhone(e.target.value))
          setFormError((prev) => ({
            ...prev,
            [e.target.name]: "Введено не корректное значение"
          }))
        else {
          setFormError((prev) => ({
            ...prev,
            [e.target.name]: ""
          }))
        }
        break
      case "email":
        if (!validateEmail(e.target.value))
          setFormError((prev) => ({
            ...prev,
            [e.target.name]: "Введено не корректное значение"
          }))
        else {
          setFormError((prev) => ({
            ...prev,
            [e.target.name]: ""
          }))
        }
        break

      default:
        setFormError((prev) => ({
          ...prev,
          [e.target.name]: ""
        }))
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        break
    }
  }

  const Languages = ["Английский", "Русский", "Китайский", "Испанский"]
  return (
    <div className="App">
      <div className="form-container">
        <div className="form-body">
          <div className="form-header">
            <h1>Регистрация</h1>
            Уже есть аккаунт? <span>Войти</span>
          </div>
          <form className="form-content">
            <p>Имя</p>
            <input
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              onChange={handleChange}
            />
            <small className="error">{formError.name} &#10240;</small>
            <p>Email</p>

            <input
              type="email"
              name="email"
              placeholder="Введите Ваше email"
              onChange={handleChange}
            />
            <small className="error">{formError.email} &#10240;</small>
            <p>Номер телефона</p>
            <input
              type="tel"
              name="phone"
              placeholder="Введите номер телефона"
              pattern="^[0-9-+\s()]*$"
              required
              onChange={handleChange}
            />
            <small className="error">{formError.phone} &#10240;</small>
            <p>Язык</p>
            <Dropdown options={Languages} onChange={handleChange} />
            <div className="service-agreement-block">
              <Checkbox onChange={handleChange} />
              <span>
                Принимаю
                <span className="service-agreement-info"> условия </span>
                использования
              </span>
            </div>
          </form>
          <button
            className={`register-btn ${isValid ? "register-active" : ""}`}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
