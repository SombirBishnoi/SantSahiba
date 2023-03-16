import React, { useEffect, useState } from "react";

function Lodder() {
  const [show, SetShow] = useState(1);
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  useEffect(() => {
    SetShow(true);
    {
      setTimeout(() => {
        SetShow(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      {show ? (
        <section data-aos="fade-up-right">
          <div className="lodder_wapper lodder_bg position-fixed">
            <div className="">
              <h2 className="fw-semibold  fs_81 font_poppins text-black   ">
                Please wait...
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Lodder;
