import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import CommonDiv from "../../../../Components/CommonDiv/CommonDiv";
import CommonHeading from "../../../../Components/CommonHeading/CommonHeading";
import ContactForm from "./Contact Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <CommonHeading heading={"Lets Work Together!"}></CommonHeading>
      <div className="mt-14">
        <CommonDiv>
          {/* container */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 lg:items-center py-5">
            {/* form */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-semibold">Contact Me</h1>
              <p className=" lg:text-lg mt-3 md:mt-5 lg:mt-5 2xl:max-w-[75%] text-gray-300 font-light">
                I create websites that are easy to use and look great on any
                device. I love what I do. Just simple like that!
              </p>
              <div className="mt-10">
                <ContactForm></ContactForm>
              </div>
            </div>
            {/* info */}
            <div className="w-full lg:w-1/3">
              <p className="text-gray-300 md:text-lg">
                I'm currently avaliable to take on new projects, so feel free to
                send me a message about anything that you want to run past me.
                You can contact anytime at 24/7.
              </p>
              <div className="flex flex-col gap-8 mt-14">
                <p className="text-lg md:text-xl underline">+880 1832348474</p>
                <p className="text-lg md:text-xl underline">
                  amin.dpi24@gmail.com
                </p>
                <p className="text-lg md:text-xl underline">
                  Gabtoli, Dhaka, Bangladesh
                </p>
                <div className="flex gap-5">
                  <a
                    href="https://www.linkedin.com/in/amin24/"
                    className="p-2.5 bg-transparent border border-theme-primary text-theme-primary rounded-full hover:bg-theme-primary hover:border-theme-primary hover:text-off-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <RiLinkedinFill className="text-base"></RiLinkedinFill>
                  </a>
                  <a
                    href="https://github.com/Amin7775"
                    className="p-2 bg-transparent border border-theme-primary text-theme-primary rounded-full hover:bg-theme-primary hover:border-theme-primary hover:text-off-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <RiGithubLine className="text-lg"></RiGithubLine>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CommonDiv>
      </div>
    </div>
  );
};

export default Contact;
