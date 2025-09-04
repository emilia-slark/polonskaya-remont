import style from "./style.module.scss";

export const FailureRequest = () => (
  <div>
    <div>К сожалению, не&nbsp;удалось отправить заявку.</div>
    <div>
      Пожалуйста, попробуйте еще раз или свяжитесь с&nbsp;нами напрямую
      по&nbsp;следующим контактам:
      <ul className={style.list}>
        <li>
          <a className={style.link} href="https://t.me/remontpolonskaya">
            Telegram
          </a>
        </li>
        <li>
          <a href="mailto:polonskaya.remont@gmail.com" className={style.link}>
            polonskaya.remont@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+79013903946" className={style.link}>
            +7 (901) 390-39-46
          </a>
        </li>
      </ul>
    </div>
    <div>Мы будем рады помочь!</div>
  </div>
);
