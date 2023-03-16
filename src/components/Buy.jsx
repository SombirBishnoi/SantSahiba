import React from "react";
import image from "../assents/image/png/image.png";
function Buy() {
  return (
    <>
      <section className="buy_bg_clr position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="py-4">
                <h2 className="fw-semibold  fs_48 text-white font_poppins ">
                  How to Buy
                </h2>
                <p className="fw-normal fs_18 text-white font_poppins opacity ">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis viverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus.
                </p>
                <span className="d-flex align-items-center gap-3  border_box">
                  <button className="fw-semibold font_poppins  fs_22 btun_1 ">
                    1
                  </button>
                  <span>
                    <h2 className="fw-semibold font_poppins text-white fs_22 m-0">
                      Cras nunc libero ac
                    </h2>
                    <p className="fw-normal fs_18 text-white font_poppins opacity m-0">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </span>
                </span>
                <span className="d-flex align-items-center gap-3 my-3  border_box">
                  <button className="fw-semibold font_poppins  fs_22 btun_1 ">
                    2
                  </button>
                  <span>
                    <h2 className="fw-semibold font_poppins text-white fs_22 m-0">
                      Cras nunc libero ac
                    </h2>
                    <p className="fw-normal fs_18 text-white font_poppins opacity m-0">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </span>
                </span>
                <span className="d-flex align-items-center gap-3  border_box">
                  <button className="fw-semibold font_poppins  fs_22 btun_1 ">
                    3
                  </button>
                  <span>
                    <h2 className="fw-semibold font_poppins text-white fs_22 m-0">
                      Cras nunc libero ac
                    </h2>
                    <p className="fw-normal fs_18 text-white font_poppins opacity m-0">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="py-5">
                <img className="w_100  top_12" src={image} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Buy;
