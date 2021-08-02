import { useState } from "react";
import Three from "../../components/Examples/Three";

export default function Home() {
  //Function
  const [fun, setFunction] = useState(0);

  //Color
  const [color, setColor] = useState({ r: 0, g: 170, b: 255 });

  const handleColorBlur = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    } else if (event.target.value > 255) {
      event.target.value = 255;
    }
  };

  const handleColor = () => {
    var r = document.getElementById("R").value;
    var g = document.getElementById("G").value;
    var b = document.getElementById("B").value;

    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;

    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;

    setColor({ r: r, g: g, b: b });
  };

  //PointNumber
  const minLength = 10;
  const maxLength = 200;
  const [showX, setShowX] = useState(100);
  const [showY, setShowY] = useState(100);
  const [xNumber, setXNumber] = useState(showX);
  const [yNumber, setYNumber] = useState(showY);

  const handleNumber = () => {
    setXNumber(showX);
    setYNumber(showY);
  };

  const handleXChange = (event) => {
    setShowX(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleYChange = (event) => {
    setShowY(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlurX = () => {
    if (showX < minLength) {
      setShowX(minLength);
    } else if (showX > maxLength) {
      setShowX(maxLength);
    }
  };

  const handleBlurY = () => {
    if (showY < minLength) {
      setShowY(minLength);
    } else if (showY > maxLength) {
      setShowY(maxLength);
    }
  };

  //Hide
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div className="grid text-white">
      <div
        className="min-h-screen w-full fixed"
        style={hide ? { zIndex: "1" } : { zIndex: "-1" }}
      >
        <Three color={color} x={xNumber} y={yNumber} fun={fun} />
      </div>
      <button
        onClick={handleHide}
        className="z-10 fixed right-4 top-4 p-2 bg-blue-400 rounded"
      >
        {hide ? "show" : "hide"}
      </button>
      <div
        className="min-h-screen w-full relative grid"
        style={hide ? { zIndex: "-10" } : {}}
      >
        <div className="h-full grid max-w-7xl justify-self-center">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
            className="place-self-center font-semibold text-7xl"
          >
            Three JS Landingpage
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 justify-items-center gap-4">
            <div
              className="w-full flex flex-col"
              data-aos="zoom-in"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="1800"
              data-aos-duration="1000"
            >
              <div className="bg-black bg-opacity-70 rounded p-4">
                <div htmlFor="hexa" className="text-2xl mb-4">
                  Change Color:
                </div>
                <div className="w-full flex mb-4">
                  <label htmlFor="R" className="flex-shrink-0 self-center mr-2">
                    Red:
                  </label>
                  <input
                    id="R"
                    type="number"
                    min={0}
                    max={255}
                    onBlur={handleColorBlur}
                    defaultValue={color.r}
                    placeholder="Red"
                    className="w-full p-2 focus:outline-none border-2 border-opacity-0 focus:border-opacity-100 border-blue-400 rounded text-black"
                  />
                </div>
                <div className="w-full flex mb-4">
                  <label htmlFor="G" className="flex-shrink-0 self-center mr-2">
                    Green:
                  </label>
                  <input
                    id="G"
                    type="number"
                    min={0}
                    max={255}
                    onBlur={handleColorBlur}
                    defaultValue={color.g}
                    placeholder="Green"
                    className="w-full p-2 focus:outline-none border-2 border-opacity-0 focus:border-opacity-100 border-blue-400 rounded text-black"
                  />
                </div>
                <div className="w-full flex mb-4">
                  <label htmlFor="B" className="flex-shrink-0 self-center mr-2">
                    Blue:
                  </label>
                  <input
                    id="B"
                    type="number"
                    min={0}
                    max={255}
                    onBlur={handleColorBlur}
                    defaultValue={color.b}
                    placeholder="Blue"
                    className="w-full p-2 focus:outline-none border-2 border-opacity-0 focus:border-opacity-100 border-blue-400 rounded text-black"
                  />
                </div>
                <div className="grid grid-cols-2 justify-items-center">
                  <button
                    onClick={handleColor}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Change
                  </button>
                  <button
                    onClick={() => {
                      setColor({ r: 0, g: 170, b: 255 });
                      document.getElementById("R").value = 0;
                      document.getElementById("G").value = 170;
                      document.getElementById("B").value = 255;
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col"
              data-aos="zoom-in"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="2050"
              data-aos-duration="1000"
            >
              <div className="bg-black bg-opacity-70 rounded p-4">
                <div className="text-2xl mb-4">Change Size:</div>
                <div className="w-full flex mb-4">
                  <label
                    htmlFor="xNumber"
                    className="flex-shrink-0 self-center mr-2"
                  >
                    X-Achse:
                  </label>
                  <input
                    id="xNumber"
                    type="number"
                    min={minLength}
                    max={maxLength}
                    onChange={(event) => handleXChange(event)}
                    onBlur={() => handleBlurX()}
                    value={showX}
                    placeholder="Anzahl der Punkte"
                    className="w-full p-2 focus:outline-none border-2 border-opacity-0 focus:border-opacity-100 border-blue-400 rounded text-black"
                  />
                </div>
                <div className="w-full flex mb-4">
                  <label
                    htmlFor="yNumber"
                    className="flex-shrink-0 self-center mr-2"
                  >
                    Y-Achse:
                  </label>
                  <input
                    id="yNumber"
                    type="number"
                    min={minLength}
                    max={maxLength}
                    onChange={(event) => handleYChange(event)}
                    onBlur={() => handleBlurY()}
                    value={showY}
                    placeholder="Anzahl der Punkte"
                    className="w-full p-2 focus:outline-none border-2 border-opacity-0 focus:border-opacity-100 border-blue-400 rounded text-black"
                  />
                </div>
                <div className="grid grid-cols-2 justify-items-center">
                  <button
                    onClick={() => handleNumber()}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Change
                  </button>
                  <button
                    onClick={() => {
                      setXNumber(100);
                      setYNumber(100);
                      setShowX(100);
                      setShowY(100);
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col mb-4 lg:mb-0"
              data-aos="zoom-in"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="2300"
              data-aos-duration="1000"
            >
              <div className="bg-black bg-opacity-70 rounded p-4">
                <div className="text-2xl mb-4">Change Function:</div>
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <button
                    onClick={() => {
                      setFunction(0);
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Tropfen
                  </button>
                  <button
                    onClick={() => {
                      setFunction(1);
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Welle
                  </button>
                  <button
                    onClick={() => {
                      setFunction(2);
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Swing
                  </button>
                  <button
                    onClick={() => {
                      setFunction(3);
                    }}
                    className="bg-blue-400 rounded text-left p-2"
                  >
                    Ebene
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
