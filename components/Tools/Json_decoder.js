import dynamic from "next/dynamic";

const CssTextField = dynamic(() => import("../Custom/InputField"), {
  ssr: false,
});

function Json_decoder() {
  return (
    <div className="flex flex-col self-center w-full md:max-w-md h-full px-4 bg-white bg-opacity-10 rounded place-self-center">
      <h2 className="text-2xl mt-2">JSON</h2>
    </div>
  );
}

export default Json_decoder;
