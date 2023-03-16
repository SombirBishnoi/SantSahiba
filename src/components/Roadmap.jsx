import React from "react";
import line2 from "../assents/image/png/line2.png";
import line1 from "../assents/image/png/line1.png";
function Roadmap() {
  return (
    <>
      {" "}
      <section className="tokenomics_bg_clr py-5 position-relative">
        <div className="container">
          <div className="">
            <div className="text-center  pb-5">
              <h2 className="font_poppins fw-semibold text-white fs_48 ">
                Roadmap
              </h2>
            </div>

            <div className="timeline">
              <div className="left1 timeline_items col_12 d-sm-flex justify-content-end">
                <div className="text-start text-sm-end col-lg-6 ">
                  <h2 className="font_poppins fw-semibold text-white fs_36 ">
                    Phase-1
                  </h2>
                  <p className="fw-normal fs_18 text-white font_poppins opacity">
                    Massa pellentesque sagittis Aliquam sed in odio. Turpis
                    blandit at interdum Eget tempus nulla tempus arcu.
                  </p>
                </div>
              </div>
              <div className="right1 timeline_items col_12 ">
                <div className="col-lg-6 ">
                  <h2 className="font_poppins fw-semibold text-white fs_36 ">
                    Phase-2
                  </h2>
                  <p className="fw-normal fs_18 text-white font_poppins opacity">
                    Massa pellentesque sagittis Aliquam sed in odio. Turpis
                    blandit at interdum Eget tempus nulla tempus arcu.
                  </p>
                </div>
              </div>
              <div className="left1 timeline_items col_12 d-sm-flex justify-content-end">
                <div className="text-start text-sm-end col-lg-6 ">
                  <h2 className="font_poppins fw-semibold text-white fs_36 ">
                    Phase-3
                  </h2>
                  <p className="fw-normal fs_18 text-white font_poppins opacity">
                    Massa pellentesque sagittis Aliquam sed in odio. Turpis
                    blandit at interdum Eget tempus nulla tempus arcu.
                  </p>
                </div>
              </div>
              <div className="right1 timeline_items col_12">
                <div className=" col-lg-6 ">
                  <h2 className="font_poppins fw-semibold text-white fs_36 ">
                    Phase-4
                  </h2>
                  <p className="fw-normal fs_18 text-white font_poppins opacity">
                    Massa pellentesque sagittis Aliquam sed in odio. Turpis
                    blandit at interdum Eget tempus nulla tempus arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="line2 w-25" src={line2} alt="line2" />
        </div>
        <div>
          <img className="line3 w_18" src={line1} alt="line1" />
        </div>
      </section>
    </>
  );
}

export default Roadmap;
