function ContactForm() {
  return (
    <div className="hero min-h-screen bg-base-200 px-20">
      <div className="hero-content flex-col lg:flex-row">
        {/* Left column */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Do you want work with us?</h1>
          <p className="py-6">
            You’ll usually need: 2 to 3 A levels, or equivalent, for a degree to
            pass an audition Or do you want more information? We will contact
            you as son as possible to start the classes
          </p>
        </div>
        {/* Form */}
        <div className="card flex-shrink-0  shadow-2xl bg-base-100 ">
          <div className="card-body">
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
