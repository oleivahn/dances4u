const ContactForm = () => {
  return (
    <section className="relative z-40 overflow-hidden px-5 py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-14 w-full lg:mb-0">
              <h2 className="text-dark mb-6 text-[32px] font-bold leading-tight sm:text-[42px] md:pr-5">
                Let’s chat.
                <br />
                Tell us about your project.
              </h2>
              <p className="text-body-color mb-8 text-base font-medium">
                CONTACT US
              </p>
              <div className="flex w-max items-center rounded-lg bg-white p-5 shadow-md">
                <div className="bg-primary text-primary mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-xl bg-opacity-5">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1839 0.583252H2.81483C1.76721 0.583252 0.916016 1.42841 0.916016 2.4686V12.4479C0.916016 13.4881 1.76721 14.3333 2.81483 14.3333H19.1839C20.2315 14.3333 21.0827 13.4881 21.0827 12.4479V2.4686C21.0827 1.42841 20.2315 0.583252 19.1839 0.583252ZM19.1839 1.72096C19.3476 1.72096 19.4785 1.75346 19.6095 1.85098L11.4577 6.75937C11.163 6.9219 10.8357 6.9219 10.541 6.75937L2.38923 1.85098C2.52018 1.78597 2.65113 1.72096 2.81483 1.72096H19.1839ZM19.1839 13.163H2.81483C2.42197 13.163 2.06185 12.838 2.06185 12.4154V2.98869L9.91899 7.73455C10.2464 7.92959 10.6065 8.0271 10.9666 8.0271C11.3267 8.0271 11.6868 7.92959 12.0142 7.73455L19.8714 2.98869V12.4154C19.9368 12.838 19.5767 13.163 19.1839 13.163Z"
                      fill="#3056D3"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">
                  <span className="text-body-color text-sm font-medium inline-block">
                    Mail us at
                  </span>
                  <a href="/#" className="text-primary text-base font-semibold">
                    contact@tailgrids.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative z-20">
              <div className="bg-primary rounded-xl px-8 py-10 sm:p-[60px]">
                <h2 className="mb-8 text-2xl font-bold text-white sm:text-[28px]">
                  Send us a message
                </h2>
                <form>
                  <InputBox type="text" name="name" placeholder="Full Name*" />
                  <InputBox
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                  />
                  <InputBox type="text" name="subject" placeholder="Subject*" />
                  <TextArea
                    labelTitle="Message*"
                    row="1"
                    placeholder="Type your message*"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-white px-10 py-3 text-center text-base font-semibold text-black transition hover:bg-opacity-90"
                    >
                      {" "}
                      Send Message{" "}
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -left-6 -top-6 z-[-1]">
                    <svg
                      width="48"
                      height="134"
                      viewBox="0 0 48 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0013 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0013 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0013 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.0013 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0013 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0013 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3333 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3333 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3333 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 16.3333 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3333 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3333 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#13C296"
                      ></circle>
                    </svg>
                  </span>
                  <span className="absolute -right-6 -bottom-6 z-[-1]">
                    <svg
                      width="48"
                      height="134"
                      viewBox="0 0 48 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="45.6673"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 45.6673 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 45.6673 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 45.6673 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 45.6673 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 45.6673 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 45.6673 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="45.6673"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 45.6673 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.0013 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.0013 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.0013 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.0013 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 31.0013 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 31.0013 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="31.0013"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 31.0013 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 16.3333 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 16.3333 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 16.3333 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 16.3333 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 16.3333 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 16.3333 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 16.3333 1.66683)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 1.66732 132)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 1.66732 117.333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 1.66732 102.667)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="88.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 88.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 1.66732 73.3333)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="45.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 45.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="16.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 16.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="59.0001"
                        r="1.66667"
                        transform="rotate(180 1.66732 59.0001)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="30.6668"
                        r="1.66667"
                        transform="rotate(180 1.66732 30.6668)"
                        fill="#13C296"
                      ></circle>
                      <circle
                        cx="1.66732"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(180 1.66732 1.66683)"
                        fill="#13C296"
                      ></circle>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute top-0 left-0 z-[-1]">
          <svg
            width="518"
            height="818"
            viewBox="0 0 518 818"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f)">
              <ellipse
                cx="19.7737"
                cy="319.774"
                rx="364"
                ry="364"
                transform="rotate(-45 19.7737 319.774)"
                fill="url(#paint0_linear)"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="-478.227"
                y="-178.226"
                width="996"
                height="996"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="67"
                  result="effect1_foregroundBlur"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="19.7737"
                y1="-44.2263"
                x2="19.7737"
                y2="683.774"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.4"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1243"
            height="716"
            viewBox="0 0 1243 716"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 738C62.5 703.667 138 633 317 625.5C496 618 664 700 792.5 727C921 754 1185 693 1273 547.5"
              stroke="#F3F2FA"
              strokeWidth="2"
            ></path>
            <path
              d="M217.5 743.5C224.667 627.5 217.5 390 357.5 275.5C497.5 161 669.5 183 847 246C1024.5 309 1129.5 457 1318.5 435.5"
              stroke="#F3F2FA"
              strokeWidth="2"
            ></path>
            <path
              d="M412.499 736.5C394.332 578.833 363 289 602.999 169C842.998 49 1143 183 1271.5 1"
              stroke="#F3F2FA"
              strokeWidth="2"
            ></path>
            <path
              d="M426.5 759C476.833 726.833 586.7 632.8 623.5 514C669.5 365.5 1041 175 1277.5 223"
              stroke="#F3F2FA"
              strokeWidth="2"
            ></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default ContactForm;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className="mb-6">
      <label className="text-body-color block text-xs"> {labelTitle} </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-transparent bg-white bg-opacity-20 py-3 px-[14px] text-white placeholder-white placeholder-opacity-60 outline-none focus:border-white focus-visible:shadow-none"
      />
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className="mb-6">
        <label className="mb-4 block text-sm font-semibold text-white">
          {labelTitle}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-md border border-transparent bg-white bg-opacity-20 py-3 px-[14px] text-white placeholder-white placeholder-opacity-60 outline-none focus:border-white focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
