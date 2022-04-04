import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import cn from 'classnames';
// import s from './styles/contact-dealer.module.sass';

import icons from "../assets/svg/index";
import payPal from "../assets/images/payPal.jpg"
import terminal from "../assets/images/terminal.jpg"
import visa from "../assets/images/visa.jpg"
import webMoney from "../assets/images/webMoney.jpg"

const Form = () => {
  const [financialAid, setFinancialAid] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")

  const { register, resetField, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ( data) => {
    console.log(data);

    setFinancialAid(false);
    setPaymentMethod("")

    resetField("firstName");
    resetField("lastName");
    resetField("companyName");
    resetField("email");
    resetField("tel");
    resetField("country");
    resetField("city");
    resetField("state");
    resetField("address");
    resetField("index");

    resetField("cardNumber1");
    resetField("cardNumber2");
    resetField("cardNumber3");
    resetField("cardNumber4");

    resetField("expirationDate");
    resetField("CVV");
    
  }

  return (
    <div className='container'>
      <div className='form'>
        <h2 className='form__title'>Заповніть форму</h2>

        <div className='form__action'>
          <div className='form__btn-wrapper'>
            <button className='form__btn form__btn--active'>Фіз. особа</button>
            <button className='form__btn'>Юр. особа</button>
          </div>
        </div>

        <form className='form__form'  onSubmit={handleSubmit(onSubmit)} id='form'>
          <div className='form__wrapper'>
            <div className='form__content'>
              <div className='form__label-wrapper form__label--margin'>
                <label className='form__label form__label--mini'>
                  Імя 
                  <input {...register("firstName", { 
                    required: true,
                    maxLength: 20, 
                    pattern: {
                      value: /^[A-Za-z]+$/i, 
                      message: "First name is required"
                    } 
                  })} 
                    type="text"
                    autoComplete="off"
                    className={cn('form__input', {'form__input--error': errors?.firstName?.message === ''})}
                  />
                  {errors.firstName && errors.firstName.message}
                </label>

                <label className='form__label form__label--mini'>
                  Фамілія 
                  <input {...register("lastName", { 
                    required: true, 
                    pattern: {
                      value: /^[A-Za-z]+$/i, 
                      message: "Last name is required"
                    } 
                  })} 
                    type="text"
                    autoComplete="off"
                    className={cn('form__input', { 'form__input--error': errors?.lastName?.message === ''})}
                  />
                  {errors.lastName && errors.lastName.message}
                </label>
              </div>
                <label className='form__label form__label--margin form__label--logo'>
                  Назва компанії, організації 
                  <input {...register("companyName", { 
                    required: true, 
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Company name is required"
                    } 
                  })}
                    type="text" 
                    autoComplete="off"
                    className={cn('form__input', { 'form__input--error': errors?.companyName?.message === ''})}
                  />
                  {errors.companyName && errors.companyName.message}
                </label>

              <label className='form__label form__label--margin'>
                Email-адрес 
                <input {...register("email", { 
                    required: true, 
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    }, 
                  })}
                  type="text"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.email?.message === ''})}
                />
                {errors.email && errors.email.message}
              </label>

              <label className='form__label form__label--margin'>
                Номер телефону 
                <input {...register("tel", { 
                  required: true, 
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, 
                    message: "Please enter a valid telephone"
                  }, 
                })}
                  type="number"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.tel?.message === ''})}
                />
                {errors.tel && errors.tel.message}
              </label>
            </div>

            <div className='form__content'>

              <label className='form__label form__label--margin'>
                Країна 
                <input {...register("country", { 
                  required: true, 
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Country is required"
                  }, 
                })}
                  type="text"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.country?.message === ''})}
                />
                {errors.country && errors.country.message}
              </label>

              <div className='form__label-wrapper form__label--margin'>
                <label className='form__label form__label--mini'>
                  Місто 
                  <input {...register("city", { 
                    required: true, 
                    pattern:{
                      value: /^[A-Za-z]+$/i,
                      message: "City is required"
                    }, 
                  })}
                  type="text"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.city?.message === ''})}
                  />
                  {errors.city && errors.city.message}
                </label>

                <label className='form__label form__label--mini'>
                  Штат, район 
                  <input {...register("state", { 
                    required: true, 
                    pattern:{
                      value: /^[A-Za-z]+$/i,
                      message: "State is required"
                    }, 
                  })}
                  type="text"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.state?.message === ''})}
                  />
                  {errors.state && errors.state.message}
                </label>
              </div>

              <label className='form__label form__label--margin'>
                Адреса 
                <input {...register("address", { 
                  required: true, 
                  pattern:{
                    value: /^[A-Za-z]+$/i,
                    message: "Address is required"
                  }, 
                })}
                  type="text"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.address?.message === ''})}
                />
                {errors.address && errors.address.message}
              </label>

              <label className='form__label form__label--margin form__label--mini'>
                Поштовий індекс 
                <input {...register("index", { 
                  required: true, 
                  maxLength: 10,
                  pattern:{
                    value: /^\d+$/,
                    message: "Index is required"
                  }, 
                })}
                  type="number"
                  autoComplete="off"
                  className={cn('form__input', { 'form__input--error': errors?.index?.message === ''})}
                />
                {errors.index && errors.index.message}
              </label>

            </div>
            
          </div>
        </form>

        <h2 className='form__title form__title--margin'>Види допомоги</h2>
        <p className='form__subtitle'>Ви можете змінити вид допомоги</p>
        
        <div className={`helps-list ${financialAid && "helps-list--after"}`}>
          <div className="helps-list__item">
            <div className="icon-box">
              <icons.hand className="icon" />
            </div>

            <p className="helps-list__text">Зробити</p>
          </div>
          <div 
            className='helps-list__item'
            onClick={setFinancialAid}
          >
            <div className={`icon-box ${financialAid && "icon-box--active"}`}>
              <icons.purse className="icon" />
            </div>

              <p className= {`helps-list__text ${financialAid && "helps-list__text--active"} `}>Фінансова допомога</p>
          </div>
          <div className='helps-list__item'>
            <div className="icon-box">
              <icons.clothes className="icon" />
            </div>

            <p className='helps-list__text'>Матеріальна допомога</p>
          </div>
          <div className='helps-list__item'>
            <div className="icon-box">
              <icons.heard className="icon" />
            </div>

            <p className='helps-list__text'>Волонтерство</p>
          </div>
        </div>
        {financialAid && <div className='form__pay-container'>
          <div className='form__pay-content'>
            <p className='form__pay-text'>Спосіб оплати</p>

            <div className='pay-list'>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={visa} alt='Visa'/>
              </div>
              <div 
                className={`pay-list__item ${paymentMethod && "pay-list__item--active"}`}
                onClick={() => setPaymentMethod('Приват')}
              >
                <div className="pay-list__text-box">
                  <p className="pay-list__text">Приват24</p>
                  <p className="pay-list__subtext">Приват24</p>
                </div>
              </div>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={terminal} alt='Terminal'/>
              </div>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={webMoney} alt='WebMoney'/>
              </div>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={payPal} alt='PayPal'/>
              </div>
            </div>
          </div>

          <div className='form__card-content'>
            <p className='form__pay-text'>Введіть наступні дані</p> 

            <form className='card' id="form">
              <div className='card__number-wrapper'>
                <p className='card__text'>Номер карти</p> 

                <div className='card__number'>
                  <input {...register("cardNumber1", { 
                    maxLength: 4,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid card number"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input"
                  />
                  {errors.cardNumber1 && errors.cardNumber1.message}

                  <input {...register("cardNumber2", { 
                    maxLength: 4,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid American Express credit card number"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input"
                  />
                  {errors.cardNumber2 && errors.cardNumber2.message}

                  <input {...register("cardNumber3", { 
                    maxLength: 4,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid American Express credit card number"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input"
                  />
                  {errors.cardNumber3 && errors.cardNumber3.message}

                  <input {...register("cardNumber4", { 
                    maxLength: 4,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid American Express credit card number"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input"
                  />
                  {errors.cardNumber4 && errors.cardNumber4.message}
                </div>
              </div>
              
              <div className='card__info-wrapper'>
                <label className='card__info'>
                  <p className='card__text'>Термін дії</p> 
                  
                  <input {...register("expirationDate", { 
                    maxLength: 4,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid card expiration date"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input card__input--info"
                  />
                  {errors.expirationDate && errors.expirationDate.message}
                </label>

                <label className='card__info'>
                  <p className='card__text'>CVC/CVV</p> 

                  <input {...register("CVV", { 
                    maxLength: 3,
                    pattern:{
                      value: /^[0-9]{3,4}$/,
                      message: "Please enter a valid CVC/CVV"
                    }, 
                  })}
                    type="number"
                    autoComplete="off"
                    className="card__input card__input--info"
                  />
                  {errors.CVV && errors.CVV.message}
                  
                </label>
              </div>
            </form>
          </div>
        </div>}

        <div className='form__help'>
          <button 
            className='form__btn-help'
            onSubmit={(e) => onSubmit(e)}
            form='form'
          >
            Допомогти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;