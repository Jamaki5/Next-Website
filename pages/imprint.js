import style from "../styles/All.module.css";

function imprint() {
  return (
    <div className={style.page}>
      <div className="grid max-w-6xl place-self-center w-full h-full">
        <div className="flex flex-col mt-16 px-4">
          <div className="text-4xl">Imprint</div>
          <div className="text-lg grid gap-2 mt-4 mb-10">
            <h2 className="text-2xl font-semibold mt-4">Legal Disclosure</h2>
            <p>Information in accordance with section 5 TMG</p>
            <p>Jann-Marten Kias</p>
            <p>Wolfenbütteler Str. 66</p>
            <p>39112 Magdeburg</p>
            <p>Germany</p>
            <h2 className="text-2xl font-semibold mt-4">Contact</h2>
            <p>Telephone: +49 1522 6384414</p>
            <p>
              E-Mail:{" "}
              <a
                className={style.link}
                target="_blank"
                href="mailto:contac@jannkias.com"
              >
                contac@jannkias.com
              </a>
            </p>
            <h2 className="text-2xl font-semibold mt-4">Disclaimer</h2>
            <h3 className="text-xl font-semibold">
              Accountability for content
            </h3>
            <p>
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the contents’ accuracy, completeness
              or topicality. According to statutory provisions, we are
              furthermore responsible for our own content on these web pages. In
              this context, please note that we are accordingly not obliged to
              monitor merely the transmitted or saved information of third
              parties, or investigate circumstances pointing to illegal
              activity. Our obligations to remove or block the use of
              information under generally applicable laws remain unaffected by
              this as per §§ 8 to 10 of the Telemedia Act (TMG).
            </p>
            <h3 className="text-xl font-semibold">Accountability for links</h3>
            <p>
              Responsibility for the content of external links (to web pages of
              third parties) lies solely with the operators of the linked pages.
              No violations were evident to us at the time of linking. Should
              any legal infringement become known to us, we will remove the
              respective link immediately.
            </p>
            <h3 className="text-xl font-semibold">Copyright</h3>
            <p>
              Our web pages and their contents are subject to German copyright
              law. Unless expressly permitted by law (§ 44a et seq. of the
              copyright law), every form of utilizing, reproducing or processing
              works subject to copyright protection on our web pages requires
              the prior consent of the respective owner of the rights.
              Individual reproductions of a work are allowed only for private
              use, so must not serve either directly or indirectly for earnings.
              Unauthorized utilization of copyrighted works is punishable (§ 106
              of the copyright law).
            </p>
            <p>
              Quelle:{" "}
              <a
                className={style.link}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twigg.de/"
              >
                twigg.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default imprint;
