import { useCallback, useRef, useState, type FormEvent } from "react";
import styles from "./style.module.scss";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const formRef = useRef<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      formRef.current[field] = e.target.value;
    };

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formRef.current,
          access_key: import.meta.env.VITE_API_TOKEN,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        // setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className={`${styles.wrapper} section`} id="contact-us">
      <div className={`${styles.content} container`}>
        <div className={styles.description}>
          <h2>Связаться с&nbsp;нами</h2>
          <p>
            Укажите информацию, и мы свяжемся с&nbsp;Вами в&nbsp;ближайшее
            время.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} id="form">
          <fieldset>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              onChange={handleInputChange("name")}
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange("email")}
              autoComplete="email"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              onChange={handleInputChange("phone")}
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Сообщение</label>
            <textarea id="message" onChange={handleInputChange("message")} />
          </fieldset>
          <button
            type="submit"
            disabled={isLoading}
            className="redirect-link dark"
          >
            {isLoading ? "Пытаемся записаться..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
};
