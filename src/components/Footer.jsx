import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className=" ">
      <div className="flex justify-center items-center w-full font-bold text-2xl ">
        <img
          className="max-w-12 rounded-full mx-5 "
          src="https://media.licdn.com/dms/image/v2/D4D03AQEXA84SKVoYMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702834702621?e=1746057600&v=beta&t=0CIrfdhHGPpgpzfi4bIcmgFPT43w2L-a91MexCc7XzE"
          alt=""
        />
        <p className="text-lg md:text-2xl">Anjani kumar / Rohit kumar</p>
      </div>
      <div className="flex justify-center gap-8 ml-12 text-base text-orange-600">
        <span>Project</span>
        <span>Blogs</span>
        <span>Contact</span>
      </div>
      <div className=" items-center text-center mt-4 mb-10 space-x-4">
        <FontAwesomeIcon
          icon={faMedium}
          className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:text-orange-600 hover:scale-110 transition-all duration-200 delay-100 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;
