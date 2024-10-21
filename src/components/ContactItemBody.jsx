const ContactItemBody = ({ name, tag }) => {
  return (
    <div className="ml-4 border-l-2 border-[rgba(0,0,0,0.5)] pl-4">
      <p className="font-semibold">{name}</p>
      <p className=" font-light">@{tag}</p>
    </div>
  );
};

export default ContactItemBody;
