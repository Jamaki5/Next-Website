import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";

import style from "../../styles/All.module.css";

const CONTACTS = [
  {
    name: "Github",
    link: "https://github.com/Jamaki5",
    icon: <GitHubIcon fontSize="inherit" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jann-marten-kias-048139203/",
    icon: <LinkedInIcon fontSize="inherit" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jamakisan/",
    icon: <InstagramIcon fontSize="inherit" />,
  },
];

function Contact() {
  function ReturnContact({ name, link, icon }) {
    return (
      <a
        className="grid items-center justify-items-center cursor-default"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        key={name}
      >
        <div
          className={
            "grid items-center justify-items-center cursor-pointer " +
            style.icon
          }
        >
          <div className="text-6xl">{icon}</div>
          <div>{name}</div>
        </div>
      </a>
    );
  }

  return (
    <div className={style.contact}>
      <div className="place-self-center max-w-7xl w-full">
      <div className={`grid my-6 grid-cols-2 sm:grid-cols-${CONTACTS.length + 1} gap-4 text-2xl`}>
        {CONTACTS.map((c) => ReturnContact(c))}

        <div className="grid items-center justify-items-center">
          <Link href="/contact">
            <div
              className={
                "grid items-center justify-items-center cursor-pointer " +
                style.icon
              }
            >
              <div className="text-6xl">
                <MailIcon fontSize="inherit" />
              </div>
              <div>E-Mail</div>
            </div>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
