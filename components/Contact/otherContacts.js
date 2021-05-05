import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";

import style from "../../styles/All.module.css";

const CONTACTS = [
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

function otherContacts() {
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
      <div className={`grid my-6 grid-cols-2 sm:grid-cols-${CONTACTS.length} px-4 gap-4 md:w-2/3 justify-self-center text-2xl`}>
        {CONTACTS.map((c) => ReturnContact(c))}
      </div>
    </div>
  );
}

export default otherContacts;
