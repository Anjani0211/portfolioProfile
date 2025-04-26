import {
  faGithub,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between gap-8 min-h-[80vh]">
      <div className="">
        <img className="rounded-full drop-shadow-xl min-w-70 border-2 border-gray-300" 
          src="https://media.licdn.com/dms/image/v2/D4D03AQEXA84SKVoYMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702834702621?e=1746057600&v=beta&t=0CIrfdhHGPpgpzfi4bIcmgFPT43w2L-a91MexCc7XzE"
          alt="Anjani Kumar"
        />
        <span className="flex justify-around mt-4 text-xl">
          <span className="bg-orange-600 rounded-full text-base px-2 text-white hover:bg-black cursor-pointer">
            <FontAwesomeIcon icon={faMedium} /> @anjani0211
          </span>
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer" />
          <FontAwesomeIcon icon={faGithub} className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"/>
          <FontAwesomeIcon icon={faSquareXTwitter} className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"/>
          <FontAwesomeIcon icon={faInstagram} className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"/>
        </span>
      </div>
      <div className="text-justify w-full">
        <h1 className="text-5xl font-bold ">Hi, I&apos;m <span className="text-orange-600 block md:inline">Anjani Kumar</span></h1>
        <p className="mt-4">
          Meet Anjani Kumar, a cybersecurity researcher and full-stack developer
          with expertise in SOC infrastructure, Threat Intelligence, and web
          development. Passionate about forensics and incident response, they
          enjoy tackling real-world security challenges and building innovative
          solutions. With a strong foundation in networking, project management,
          and mentoring, they continuously push the boundaries of learning and
          implementation. Whether setting up secure environments, analyzing
          logs, or guiding interns, Anjani blends technical excellence with
          hands-on problem-solving. <br /><span className="text-orange-700">- ChatGPT⚡
          </span>        </p>
        <p className="mt-4">
          Currently working and learning on projects that involves{" "}
          <span className="text-orange-600">DevSecOps</span>
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
