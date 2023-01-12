import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    window.open(
      `mailto:achalogy@gmail.com?subject=${subject}&body=${message}`,
      "_blank"
    );
  };

  return (
    <div
      id="contact"
      className="flex flex-row bg-stone-100 dark:bg-darkMode-900 gap-3 justify-center items-center h-screen drop-shadow-lg"
    >
      <div className="flex-1 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold mb-4 dark:text-white">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 items-center w-1/2"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="subject" className="dark:text-white">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Hey! I'm looking for..."
              value={subject}
              onChange={(obj) => setSubject(obj.target.value)}
              className="bg-transparent outline-none border border-stone-700 p-2 px-4 rounded-sm dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={40}
              rows={5}
              placeholder="I hope We work together in..."
              value={message}
              onChange={(obj) => setMessage(obj.target.value)}
              className="bg-transparent outline-none border border-stone-700 p-2 px-4 rounded-sm resize-none dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Submit"
            className="bg-red-500 w-3/6 p-3 text-lg rounded-md font-medium text-stone-200 hover:drop-shadow-lg hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex flex-col bg-stone-200 dark:bg-darkMode-700 w-1/3 h-full p-8 justify-center">
        <h1 className="text-4xl font-semibold tracking-wider text-white mb-12">
          Direct Contact
        </h1>
        <div className="flex flex-col p-4 gap-4">
          <a
            className="flex flex-row gap-4 items-center text-white cursor-pointer"
            href="mailto:achalogy@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-10 aspect-square" />
            achalogy@gmail.com
          </a>
          <a
            href="https://discordapp.com/users/476470771611467806"
            className="flex flex-row gap-4 items-center text-white cursor-pointer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} className="h-10 aspect-square" />
            Achalogy#3544
          </a>
          <a
            href="https://linkedin.com/in/achalogy"
            target="_blank"
            className="flex flex-row gap-4 items-center text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-10 aspect-square" />
            https://linkedin.com/in/achalogy
          </a>
        </div>
      </div>
    </div>
  );
}
