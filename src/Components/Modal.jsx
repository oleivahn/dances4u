import React, { useEffect, useRef, useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(!modalOpen)}
          className="rounded-full bg-primary py-3 px-6 text-base font-medium text-white"
        >
          Open Modal
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full overflow-y-scroll bg-gray-50 py-10 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="mx-auto max-w-[465px] rounded-[10px] bg-white p-8 shadow-two"
        >
          <div className="mb-9 overflow-hidden rounded-md border border-stroke">
            <img
              src="https://cdn.tailgrids.com/2.0/image/application/images/modals/image-01.svg"
              alt="modal image"
              className="w-full"
            />
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-semibold text-black sm:text-[28px]">
              Access has been requested
            </h3>
            <p className="mb-6 text-base text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum been.
            </p>
            <div className="mb-9 flex items-center justify-center space-x-[14px]">
              <span className="block h-3 w-3 cursor-pointer rounded-full bg-primary hover:bg-primary"></span>
              <span className="block h-3 w-3 cursor-pointer rounded-full bg-[#DAE6FF] hover:bg-primary"></span>
              <span className="block h-3 w-3 cursor-pointer rounded-full bg-[#DAE6FF] hover:bg-primary"></span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="h-12 w-full rounded-md bg-white text-center text-base font-medium text-body-color shadow-card hover:bg-gray-2"
              >
                Skip
              </button>
              <button className="h-12 w-full rounded-md bg-primary text-center text-base font-medium text-white hover:bg-opacity-90">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
