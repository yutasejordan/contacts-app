import ContactList from "./components/ContactList";
import { getData } from "./assets/data";
import "./index.css";

const ContactApp = () => {
  const contacts = getData();

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="font-semibold text-4xl">Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
