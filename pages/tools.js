import style from "../styles/All.module.css";
import PasswordGenerator from "../components/Tools/PasswordGenerator";
import Json_decoder from "../components/Tools/Json_decoder";
import Hash from "../components/Tools/Hash";

function tools() {
  return (
    <div className={style.page}>
      <div className="px-4 h-full w-full flex flex-col place-self-center max-w-7xl">
        <div className="my-6 text-4xl self-center font-semibold md:self-start">
          Tools
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mb-6">
          <PasswordGenerator />
          <Json_decoder />
          <Hash />
        </div>
      </div>
    </div>
  );
}

export default tools;
