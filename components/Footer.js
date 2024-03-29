import Link from "next/link";

import style from "../styles/All.module.css";

function Footer() {
  return (
    <div className="bg-black justify-items-center bg-opacity-80 text-white grid w-full">
      <div className="mb-4 mt-6">© 2022 Jann-Marten Kias</div>
      <div className="flex mb-8">
        <div className={style.link}>
          <Link href="/privacy_policy">Privacy Policy</Link>
        </div>
        &nbsp;|&nbsp;
        <div className={style.link}>
          <Link href="/imprint">Imprint</Link>
        </div>
        &nbsp;|&nbsp;
        <div className={style.link}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="mb-8 text-center">
        powered by&nbsp;
        <a
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          Next.js
        </a>
        &nbsp;,&nbsp;
        <a
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
        >
          TailwindCSS
        </a>
        &nbsp;and&nbsp;
        <a
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.javascript.com/"
        >
          JavaScript
        </a>
      </div>
    </div>
  );
}

export default Footer;
