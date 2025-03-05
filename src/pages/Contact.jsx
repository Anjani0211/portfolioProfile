function Contact() {
  function handleSubmit() {
   
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col shadow-lg chakra-petch-medium p-12 rounded-xl">
          <h1 className="text-4xl text-center p-4 m-4 font-bold">
            {" "}
            Contact Me
          </h1>
          <div className="mb-4 w-full">
            <p className="text-xl font-bold mb-2">Name</p>
            <input
              className="border border-orange-400 w-full p-2"
              type="text"
              name="name"
            ></input>
          </div>

          <div className="mb-4 w-full">
            <p className="text-xl font-bold mb-2">Contact</p>
            <input
              className="border border-orange-400 w-full p-2"
              type="text"
              name="contact"
            ></input>
          </div>
          <div className="mb-4 w-full">
            <p className="text-xl font-bold mb-2">Message</p>
            <textArea
              className="border border-orange-400 h-40 w-full p-2"
              type="text"
              name="message"
            ></textArea>
          </div>
          <button
            className="bg-amber-600 inset-shadow-sm border-0 px-6 py-2 rounded-xl text-white text-xl "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
