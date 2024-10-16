import emailjs from "emailjs-com";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnyi8b9", // замените на ваш ID сервиса
        "template_f2r58a9", // замените на ваш ID шаблона
        e.target,
        "b90ukqwzUfEoXIQ8l" // замените на ваш User ID из Email.js
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Сообщение отправлено успешно!");
        },
        (error) => {
          console.log(error.text);
          alert("Ошибка при отправке сообщения.");
        }
      );
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-4">
            Контактная форма
          </p>
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-sm mb-6">
            * Также Вы можете получить мое резюме прямо в свой почтовый ящик
          </p>
          <FormInput
            inputLabel="Полное имя"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            value={formData.name}
            onChange={handleChange}
            placeholderText="Твое имя"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            value={formData.email}
            onChange={handleChange}
            placeholderText="Твой email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Тема"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholderText="Тема"
            ariaLabelName="Subject"
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Сообщение
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-100 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title="Отправить сообщение"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
