import style from "../styles/All.module.css";

function imprint() {
  return (
    <div className={style.page}>
      <div className="grid max-w-6xl place-self-center w-full h-full">
        <div className="flex flex-col mt-16 px-4">
          <div className="text-4xl">Imprint</div>
        </div>
      </div>
    </div>
  );
}

export default imprint;
