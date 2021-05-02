import style from "../styles/All.module.css";
import PasswordManager from "../components/Tools/PasswordManager";

function tools() {
  return (
    <div className={style.page}>
      <div className="px-4 h-full w-full flex flex-col">
        <div className="text-4xl my-4 self-center md:self-start">Tools</div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
          <PasswordManager />
        </div>
      </div>
    </div>
  );
}

export default tools;
