import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import styles from "./style.module.scss";
import { FailureRequest, Modal } from "@ui";
import { useLocation } from "react-router-dom";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const dataRef = useRef<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean | null>(null);
  const location = useLocation();

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dataRef.current[field] = e.target.value;
    };

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dataRef.current,
          access_key: import.meta.env.VITE_API_TOKEN,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();

      setStatus(result);
      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Error) {
        setStatus(false);
      }
    } finally {
      setIsLoading(false);
      setIsModalOpen(true);
    }
  }, []);

  const idForm = "contact-us";
  useEffect(() => {
    if (location.hash === `#${idForm}`) formRef.current?.scrollIntoView();
  }, []);

  return (
    <>
      <section className={`${styles.wrapper} section`} id={idForm}>
        <div className={`${styles.content} container`}>
          <div className={styles.description}>
            <h2>Связаться с&nbsp;нами</h2>
            <p>
              Укажите информацию, и мы свяжемся с&nbsp;Вами в&nbsp;ближайшее
              время.
            </p>
          </div>
          <form
            id="form"
            className={styles.form}
            onSubmit={handleSubmit}
            ref={formRef}
          >
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
                id="email"
                type="email"
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={status ? "Успешно" : "Ошибка"}
        delay={status ? 3000 : 0}
      >
        {status ? "Заявка успешно отправлена." : <FailureRequest />}
      </Modal>
    </>
  );
};
