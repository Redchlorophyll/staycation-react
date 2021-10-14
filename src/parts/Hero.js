import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/hero_image.jpg";
import ImageHero_border from "assets/images/border.jpg";
import iconCamera from "assets/images/icons/ic_camera.svg";
import iconMap from "assets/images/icons/ic_map.svg";
import iconSuitcase from "assets/images/icons/ic_suitcase.svg";

import Button from "components/button";
import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behaviour: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-auto pr-5" style={{ width: 750 }}>
            <h1 className="h1 fw-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation.
            </h1>
            <p
              className="mb-4 fw-light text-gray-500 w-75"
              style={{ fontSize: 16, lineHeight: "170%" }}
            >
              We provide what you need to enjoy your <br /> holiday with family.
              Time to make another <br /> memorable moments.
            </p>
            <Button
              className="btn px-5 text-white"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 50 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={iconSuitcase}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}
                  <span className="text-gray-500 font-weight-light">
                    {" "}
                    travelers
                  </span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={iconCamera}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}
                  <span className="text-gray-500 font-weight-light">
                    {" "}
                    treasures
                  </span>
                </h6>
              </div>

              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={iconMap}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}
                  <span className="text-gray-500 font-weight-light">
                    {" "}
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-5 pl-5">
            <div>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  width: 520,
                  height: 410,
                }}
              />
              <img
                src={ImageHero_border}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0", width: 520, height: 410 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
