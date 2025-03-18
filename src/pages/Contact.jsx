import axios from "axios";
import { useState } from "react";

function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  contact: "",
  message: ""
 })
  
  function handleChange(e) {
      setFormData(
        {
          ...formData,
          [e.target.name]: e.target.value
        }
      )
  }

  const handleSubmit= async (e) => {

    e.preventDefault();
    const baseUrl = "https://signal.callmebot.com/signal/send.php?phone=c9ffb279-d544-4514-ba40-2f9791051c37&apikey=177774&text="
    const message = `Name : ${formData.name}%0AContact : ${formData.contact}%0AMessage : ${formData.message}`

    await axios.get(baseUrl+message)
    console.log("Form submitted :", formData);
  }
  

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col chakra-petch-medium p-12 rounded-xl">
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
              onChange={handleChange}
            ></input>
          </div>

          <div className="mb-4 w-full">
            <p className="text-xl font-bold mb-2">Contact</p>
            <input
              className="border border-orange-400 w-full p-2"
              type="text"
              name="contact"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4 w-full">
            <p className="text-xl font-bold mb-2">Message</p>
            <textarea
              className="border border-orange-400 h-40 w-full p-2"
              type="text"
              name="message"
              onChange={handleChange}
            ></textarea>
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
