import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

const ContactItem = ({ imageUrl, name, tag }) => {
  return (
    <div className="flex items-center mt-6 border-2 border-black p-4 rounded-lg">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
};

export default ContactItem;
