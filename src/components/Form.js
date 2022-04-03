import React, { useState } from 'react'

import hend from "../assets/images/hend.jpg"
import purse from "../assets/images/purse.jpg"
import material from "../assets/images/material.jpg"
import volonters from "../assets/images/volonters.jpg"
import payPal from "../assets/images/payPal.jpg"
import terminal from "../assets/images/terminal.jpg"
import visa from "../assets/images/visa.jpg"
import privat from "../assets/images/privat.jpg"
import webMoney from "../assets/images/webMoney.jpg"

const Form = () => {

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { type, value } = e.target;
    // type === "text" && setName(value);
    type === "email" && setEmail(value);
    // type === "password" && setPassword(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // handleSubmit()
  };


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

        <form className='form__form' onSubmit={onSubmit}>
          <div className='form__wrapper'>
            <div className='form__content'>
              <div className='form__label-wrapper form__label--margin'>
                <label className='form__label form__label--mini'>
                  Імя {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={onChange}

                    required
                    className='form__input'
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>

                <label className='form__label form__label--mini'>
                  Фамілія {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={onChange}

                    required
                    className='form__input'
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>
              </div>
                <label className='form__label form__label--margin form__label--logo'>
                  Назва компанії, організації {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={onChange}
                    required
                    className='form__input'
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>

              <label className='form__label form__label--margin'>
                Email-адрес {" "}
                <input
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  onChange={onChange}
                  required
                  className='form__input'
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                />
              </label>

              <label className='form__label form__label--margin'>
                Номер телефону {" "}
                <input
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  onChange={onChange}
                  required
                  className='form__input'
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                />
              </label>
            </div>

            <div className='form__content'>

              <label className='form__label form__label--margin'>
                Країна {" "}
                <input
                  type="email"
                  autoComplete="off"
                  placeholder=""
                  onChange={onChange}
                  value={email}
                  required
                  className='form__input'
                />
              </label>

              <div className='form__label-wrapper form__label--margin'>
                <label className='form__label form__label--mini'>
                  Місто {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={onChange}

                    required
                    className='form__input'
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>

                <label className='form__label form__label--mini'>
                  Штат район {" "}
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={onChange}

                    required
                    className='form__input'
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>
              </div>

              <label className='form__label form__label--margin'>
                Адреса {" "}
                <input
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  onChange={onChange}
                  required
                  className='form__input'
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                />
              </label>

              <label className='form__label form__label--margin form__label--mini'>
                Поштовий індекс {" "}
                <input
                  type="text"
                  autoComplete="off"
                  placeholder=""
                  onChange={onChange}
                  required
                  className='form__input'
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                />
              </label>

            </div>
            
          </div>
        </form>

        <h2 className='form__title form__title--margin'>Види допомоги</h2>
        <p className='form__subtitle'>Ви можете змінити вид допомоги</p>
        
        <div className='helps-list'>
          <div className='helps-list__item'>
            <img className='helps-list__img' src={hend} alt='sss'/>
            
            <p className='helps-list__text'>Зробити</p>
          </div>
          <div className='helps-list__item'>
              <img className='helps-list__img' src={purse} alt='porket'/>

              <p className='helps-list__text helps-list__text--active'>Фінансова допомога</p>
          </div>
          <div className='helps-list__item'>
            <img className='helps-list__img' src={material} alt='porket'/>

            <p className='helps-list__text'>Матеріальна допомога</p>
          </div>
          <div className='helps-list__item'>
            <img className='helps-list__img' src={volonters} alt='porket'/>

            <p className='helps-list__text'>Волонтерство</p>
          </div>
        </div>
        <div className='form__pay-container'>
          <div className='form__pay-content'>
            <p className='form__pay-text'>Спосіб оплати</p>

            <div className='pay-list'>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={visa} alt='Visa'/>
              </div>
              <div className='pay-list__item'>
                <img className='pay-list__img' src={privat} alt='Privat'/>
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

            <div className='card'>
              <div className='card__number-wrapper'>
                <p className='card__text'>Номер карти</p> 

                <div className='card__number'>
                  <input className='card__input'/>
                  <input className='card__input'/>
                  <input className='card__input'/>
                  <input className='card__input'/>
                </div>
              </div>
              
              <div className='card__info-wrapper'>
                <div className='card__info'>
                  <p className='card__text'>Термін дії</p> 
                  <input className='card__input card__input--info'/>
                </div>

                <div className='card__info'>
                  <p className='card__text'>CVC/CVV</p> 

                  <input className='card__input card__input--info'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='form__help'>
          <button className='form__btn-help'>Допомогти</button>
        </div>
      </div>
    </div>
  );
}

export default Form;