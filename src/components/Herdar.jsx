import React, { useState } from "react";
import dog from "../assents/image/png/dog.png";
import dog2 from "../assents/image/png/dog2.png";
import line from "../assents/image/png/line.png";

function Herdar() {
  const [nav, setnav] = useState(1);
  if (nav) {
    document.body.style.overflow = "initial";
  } else {
    document.body.style.overflow = " hidden";
  }
  return (
    <>
      <section className="herder_bg_img ">
        <nav className="py-5  overflow-hidden ">
          <div className="container">
            <nav className="d-flex align-items-center justify-content-between ">
              <h2 className="font_poppins  fw-normal  fs_36 text-white m-0 hover ">
                Saint <span className="text_yellow ">Shiba</span>
              </h2>

              <span className="d-none d-xl-flex gap-5 align-items-center">
                <a
                  className="font_poppins  fw-normal  fs_18 text-white hover "
                  href="#"
                >
                  Home
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white hover "
                  href="#"
                >
                  About
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white hover"
                  href="#"
                >
                  Tokenomics
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white hover "
                  href="#"
                >
                  How to buy
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white hover "
                  href="#"
                >
                  FAQ
                </a>
                {/* </span>
            <span className="d-none d-xl-flex "> */}
                <button className=" font_poppins   fw-semibold fs_18 text-white connect_button  border-0 ">
                  Connect Wallet
                </button>
              </span>

              <div
                onClick={() => setnav(!nav)}
                className="d-flex flex-column z_index1 d-xl-none"
              >
                <div className="line1"></div>
                <div className="line1 my-2"></div>
                <div className="line1"></div>
              </div>
            </nav>
          </div>
        </nav>
        <section className=" ">
          <div className="container">
            <div className={` ${nav ? "hide" : "box_5"}`}>
              <div
                onClick={() => setnav(!nav)}
                className="d-flex flex-column z_index1 position-relative d-xl-none  "
              >
                <span className="d-flex justify-content-end">
                  <button className="mt-5 me-5 px-4 border-0 rounded-3 bg-danger py-2">
                    Back
                  </button>
                </span>
              </div>
              <span className="d-flex justify-content-center flex-column align-content-center align-items-center min-vh-100  gap-4">
                <a
                  className="font_poppins  fw-normal  fs_18 text-white "
                  href="#"
                >
                  Home
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white "
                  href="#"
                >
                  About
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white "
                  href="#"
                >
                  Tokenomics
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white "
                  href="#"
                >
                  How to buy
                </a>
                <a
                  className="font_poppins  fw-normal  fs_18 text-white "
                  href="#"
                >
                  FAQ
                </a>
              </span>
            </div>
          </div>{" "}
        </section>
        <div className="container ">
          <div className="row pt-lg-5 p-0 pt-3">
            <div className="col-lg-6">
              <div className="py-lg-5 p-0 py-2 text-lg-start text-center">
                <h2 className="fs_96 font_poppins fw-bold text-white pt-lg-5 pb-lg-3 p-0 py-2">
                  Accumsan ut orci vitae
                </h2>
                <p className="fs_22 fw-normal font_poppins text-white opacity pb-lg-5 p-0 py-2 m-0">
                  Velit eget sit nibh fringilla risus ullamcorper malesuada.
                  Morbi nulla suscipit dolor, volutpat quam at urna donec
                  rutrum. In vulputate congue arcu in et.
                </p>
                <button className=" font_poppins   fw-semibold fs_18 text-white connect_button mb-5 border-0 ">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-lg-end justify-content-center">
                <img className="w-75" src={dog} alt="dog" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="box_herder p-3">
              <span>
                <h2 className="fw-semibold  fs_48 text-white font_poppins m-0 ">
                  Cursus ligula habitant sed integer.
                </h2>
                <p className="fw-normal fs_18 text-white font_poppins opacity m-0">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis viverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus. At ut donec nec aliquet ipsum leo tellus amet lacus.
                  Varius mi urna blandit id magna tellus imperdiet tortor.
                  Volutpat nec vulputate diam tristique facilisi in turpis vel
                  elit.
                </p>
                <p className="fw-normal fs_18 text-white font_poppins opacity m-0">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis viverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus. At ut donec nec aliquet ipsum leo tellus amet lacus.
                  Varius mi urna blandit id magna tellus imperdiet tortor.
                  Volutpat nec vulputate diam tristique facilisi in turpis vel
                  elit.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="cursus_bg_clr min-100 d-flex align-items-end ">
        <div className="container">
          <div className="row  align-items-end text-lg-start text-center">
            <div className="col-lg-7">
              <div className="py-5">
                <h2 className="fw-semibold  fs_48 text-white font_poppins ">
                  Cursus ligula habitant sed integer.
                </h2>
                <p className="fw-normal fs_18 text-white font_poppins opacity py-2">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis viverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus.
                </p>
                <button className="connect_button fw-semibold text-white fs_18 border-0 mb-lg-5 mb-0">
                  Learn more
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="">
                <span>
                  <img className="w-100 h-100" src={dog2} alt="dog2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herdar;
