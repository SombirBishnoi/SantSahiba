import React from "react";
import Accordion from "react-bootstrap/Accordion";
import bottom from "../assents/image/png/bottom.png";
function Faq() {
  return (
    <>
      <section className="tokenomics_bg_clr py-5 position-relative min-vh-100">
        <div className="container">
          <div className="text-center">
            <h2 className="font_poppins fw-semibold text-white fs_48 pb-3">
              FAQ
            </h2>
          </div>
          <Accordion
            className="d-flex flex-column gap-3 rounded-0   "
            defaultActiveKey="0"
          >
            <Accordion.Item className=" border_clr" eventKey="1">
              <Accordion.Header className="font_poppins fw-semibold text-white fs_48 ">
                Volutpat consequat dictumst vel donec.
              </Accordion.Header>
              <Accordion.Body className="fw-normal fs_18 text-white font_poppins opacity">
                Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit
                elit in mi orci. Aliquet ullamcorper quis felis at scelerisque
                non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur
                sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis
                at scelerisque non faucibus.Amet vitae hendrerit facilisi
                gravida. Nascetur sed luctus sit elit in mi orci. Aliquet
                ullamcorper quis felis at scelerisque non faucibus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className=" border_clr" eventKey="0">
              <Accordion.Header className="font_poppins fw-semibold text-white fs_48 ">
                Volutpat consequat dictumst vel donec.
              </Accordion.Header>
              <Accordion.Body className="fw-normal fs_18 text-white font_poppins opacity">
                Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit
                elit in mi orci. Aliquet ullamcorper quis felis at scelerisque
                non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur
                sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis
                at scelerisque non faucibus.Amet vitae hendrerit facilisi
                gravida. Nascetur sed luctus sit elit in mi orci. Aliquet
                ullamcorper quis felis at scelerisque non faucibus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className=" border_clr" eventKey="2">
              <Accordion.Header className="font_poppins fw-semibold text-white fs_48 ">
                Volutpat consequat dictumst vel donec.
              </Accordion.Header>
              <Accordion.Body className="fw-normal fs_18 text-white font_poppins opacity">
                Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit
                elit in mi orci. Aliquet ullamcorper quis felis at scelerisque
                non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur
                sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis
                at scelerisque non faucibus.Amet vitae hendrerit facilisi
                gravida. Nascetur sed luctus sit elit in mi orci. Aliquet
                ullamcorper quis felis at scelerisque non faucibus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className=" border_clr" eventKey="3">
              <Accordion.Header className="font_poppins fw-semibold text-white fs_48 ">
                Volutpat consequat dictumst vel donec.
              </Accordion.Header>
              <Accordion.Body className="fw-normal fs_18 text-white font_poppins opacity">
                Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit
                elit in mi orci. Aliquet ullamcorper quis felis at scelerisque
                non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur
                sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis
                at scelerisque non faucibus.Amet vitae hendrerit facilisi
                gravida. Nascetur sed luctus sit elit in mi orci. Aliquet
                ullamcorper quis felis at scelerisque non faucibus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className=" border_clr" eventKey="4">
              <Accordion.Header className="font_poppins fw-semibold text-white fs_48 ">
                Volutpat consequat dictumst vel donec.
              </Accordion.Header>
              <Accordion.Body className="fw-normal fs_18 text-white font_poppins opacity">
                Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit
                elit in mi orci. Aliquet ullamcorper quis felis at scelerisque
                non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur
                sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis
                at scelerisque non faucibus.Amet vitae hendrerit facilisi
                gravida. Nascetur sed luctus sit elit in mi orci. Aliquet
                ullamcorper quis felis at scelerisque non faucibus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <img className="bottom w-25" src={bottom} alt="bottom" />
        </div>
      </section>
    </>
  );
}

export default Faq;
