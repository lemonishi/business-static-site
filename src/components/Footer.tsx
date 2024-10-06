function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-blue-900 text-white text-sm mt-12 p-8">
      <div className="flex justify-evenly w-[80%] max-w-sm">
        <img
          src="src/assets/facebook.svg"
          alt="Facebook"
        />
        <img
          src="src/assets/twitter.svg"
          alt="X"
        />
        <img
          src="src/assets/instagram.svg"
          alt="Instagram"
        />
        <img
          src="src/assets/LinkedIn.svg"
          alt="LinkedIn"
        />
      </div>
      <p>© 2024 Lennon - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;