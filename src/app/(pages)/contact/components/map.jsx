const GoogleMap = () => {
  return (
    <div className="lg:mb-60 lg:m-[80px] rounded-[60px] p-4 lg:px-[80px] border border-transparent">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4603708880445!2d76.68253407550544!3d30.70545567459749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feff2bece99dd%3A0x5980c852d1a27c2c!2sSynswift!5e0!3m2!1sen!2sin!4v1713791757699!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 1, borderRadius: "20px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;