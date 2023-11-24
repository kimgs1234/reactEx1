import React, { useRef, useEffect } from "react";

const ExMain = () => {
  const path = process.env.PUBLIC_URL;
  const onUp = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  });
  /*   const scrollevent = window.scrollY;
  const movingRef = useRef(null);
  const handleScroll = () => {
    const img1 = document.getElementById("#ss");

    if (scrollevent > 200) {
      console.log("scroll");
      img1.style.transform = `translateY(-${scrollevent} / 1px)`;
    }
  }; */
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const scrollEvent = () => {
    // console.log("스크롤 반응");

    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      img1Ref.current.style.transform = `translateY(${scrollPosition / 8}px)`;
      img2Ref.current.style.transform = `translateY(-${scrollPosition / 6}px)`;
      img3Ref.current.style.transform = `translateY(${scrollPosition / 14}px)`;
      img4Ref.current.style.transform = `translateY(-${scrollPosition / 10}px)`;
    }
  };
  return (
    <section className="Box">
      <h1>
        We Are <br />
        Creactive <br />
        Agency
      </h1>
      <p>Working with brands all over the world</p>
      <div className="box-container">
        <div className="color-box">
          <img src={path + `/image/SplashColor.png`} alt="img1" ref={img1Ref} />
          <img
            src={path + `/image/CartoonMac.png`}
            alt="img2"
            className="movingImg"
            ref={img2Ref}
          />
        </div>
        <h2>
          Leading digital agency with solid design and elopment expertise. We
          focus on building Webflow websites
        </h2>
      </div>

      <div className="box-container">
        <div className="color-box">
          <img src={path + `/image/SplashColor.png`} alt="img1" ref={img3Ref} />
          <img
            src={path + `/image/CartoonMac.png`}
            alt="img2"
            className="movingImg"
            ref={img4Ref}
          />
        </div>
        <h2>
          Leading digital agency with solid design and elopment expertise. We
          focus on building Webflow websites
        </h2>
      </div>
      <a href="#" className="up-btn" onClick={onUp}>
        <span className="bar1"></span>
      </a>
    </section>
  );
};

export default ExMain;
