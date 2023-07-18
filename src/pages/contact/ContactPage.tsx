import { useRef } from "react";
import TextButton from "../../components/textButton/TextButton";
import emailjs from "@emailjs/browser";
import { notification } from "../../services/services";
import { TYPE_TOAST } from "../../constants/typeToast";
import "./conactPage.scss";
import PageSubtitle from "../../components/pageSubtitle/PageSubtitle";

function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { current } = formRef;

    if (current) {
      const formData = new FormData(current);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      console.log(name, email, message);
      if (name && email && message) {
        try {
          await emailjs.sendForm(
            "service_c4nsjbk",
            "template_cjroexq",
            current,
            "vhZJkv-_dXV-apvNU"
          );
          notification("Повідомлення надіслане", TYPE_TOAST.SUCCESS);
          current.reset();
        } catch (error) {
          console.error("Error:", error);
          const errorMessage = (error as Error).message;
          console.error("Error sending message:", error);
          notification(errorMessage, TYPE_TOAST.ERROR);
        }
      } else {
        notification("будь ласка, заповніть усі поля", TYPE_TOAST.ERROR);
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <PageSubtitle text="Зв'яжіться з нами" />
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ім'я" />
          <input type="email" name="email" placeholder="Ел. скринька" />
          <textarea
            name="message"
            rows={10}
            placeholder="Напишіть Ваше повідомлення"
            className="contact-textarea"
          ></textarea>
          <TextButton text={"Send"} />
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
