import style from "../styles/All.module.css";
import ContactPage from "../components/Contact/contact"

function contact() {
  return (
    <div className={style.page}>
      <ContactPage />
    </div>
  );
}

export default contact;
