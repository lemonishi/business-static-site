function SocialPopover() {
  return (
    <div className="fixed right-6 bottom-6 z-90">
      {/* <Popover>
        <PopoverTrigger
          asChild
          className="bg-black/40 border rounded-full w-fit p-3"
        >
          <img
            src="/socials.svg"
            alt="Socials"
          />
        </PopoverTrigger>
        <PopoverContent className="bg-transparent border-none shadow-none w-fit">
          <div className="flex flex-col gap-4 items-end">
            <div className="bg-black/40 border rounded-full w-fit p-3">
              <img
                src="/instagram.svg"
                alt="Instagram"
              />
            </div>
            <div className="bg-black/40 border rounded-full w-fit p-3">
              <img
                src="/twitter.svg"
                alt="X"
              />
            </div>
            <div className="bg-black/40 border rounded-full w-fit p-3">
              <img
                src="/facebook.svg"
                alt="Facebook"
              />
            </div>
            <div className="bg-black/40 border rounded-full w-fit p-3">
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
              />
            </div>
            <a href="http://wa.me/6589628052">
              <div className="bg-black/40 border rounded-full w-fit p-3">
                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                />
              </div>
            </a>
          </div>
        </PopoverContent>
      </Popover> */}
      <a href="http://wa.me/6589628052">
        <div className="bg-black/40 border rounded-full w-fit p-4">
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
          />
        </div>
      </a>
    </div>
  );
}

export default SocialPopover;
