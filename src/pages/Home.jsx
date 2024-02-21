import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function index() {
  const whychooseus = useRef(null);
  const ourService = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // Prevent right-click context menu
  useEffect(() => {
    // Prevent right-click context menu
    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    // Prevent text selection
    const preventTextSelection = (event) => {
      event.preventDefault();
    };

    // Handle keydown events for Ctrl+U and F12
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "u") {
        event.preventDefault(); // Prevent Ctrl+U
      }
      if (event.key === "F12") {
        event.preventDefault(); // Prevent F12
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventTextSelection);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventTextSelection);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // Prevent right-click context menu

  //  useEffect(() => {
  //   (function () {
  //     var options = {
  //       whatsapp: "+94769051995",
  //       email_color: "#2b2b2b",
  //       call: "+94769051995",
  //       call_color: "#622680",
  //       company_logo_url: " ",
  //       button_image_url: "",
  //       greeting_message: "Hallo!",
  //       call_to_action: "Welcome",
  //       button_color: "#fccb06",
  //       position: "right",
  //       order: "whatsapp,instagram,call,email",
  //       ga: true,
  //       branding: false,
  //       mobile: true,
  //       desktop: true,
  //       greeting: false,
  //       shift_vertical: 0,
  //       shift_horizontal: 0,
  //     };
  //     var proto = "https:",
  //       host = "getbutton.io",
  //       url = proto + "//static." + host;

  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.src = url + "/widget-send-button/js/init.js";

  //     s.onload = function () {
  //       WhWidgetSendButton.init(host, proto, options);
  //     };
  //     var x = document.getElementsByTagName("script")[0];
  //     x.parentNode.insertBefore(s, x);
  //   })();
  // }, []); // Empty dependency array ensures this effect runs only once after mounting

  useEffect(() => {
    (function () {
      var CleverChatData = {
        backGroundColor: "", // red //blue //#FFF1F0
        WhatsApp: "+94769051995", // WhatsApp Number
        Messenger: "109186555335131", // facebook Page ID
        GoogleMap: "4D69kVrEBe1vuPbD7", // google Map ID
        Call: ["+94769051995"], //multiple numbers also possible
        Instagram: "cleverbit",

        OpeningDirection: "vertical", //horizontal // vertical
        position: "right", // right //left ok
        buttonOrder: ["Call", "WhatsApp", "Messenger", "GoogleMap"],

        onDesktop: true,
        onMobile: true,
        onTablet: true,
        Api: "api123s",
      };

      var path = "CleverChatData";
      window[path] = CleverChatData;

      var url = window.location.href;
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = 'https://firebasestorage.googleapis.com/v0/b/mernstate.appspot.com/o/index.js?alt=media&token=8df3662c-877c-4a11-8721-5c76d999edc5';
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })();

    // greeting: true, // Greeting message enabled
    //     greetingMessage:
    //       "Hello 👋 How may we help you? Just send us a message now to get assistance.",
    //     greetingMessageDelay: 5,
    //     shift_vertical: 0, // Vertical position, ex: 20px
    //     shift_horizontal: 0, // Horizontal position, ex: 60px
 
  }, []);

  return (
    <>
      <p className="font-bold  " ref={home}>
        Welcome to Cleverbit
      </p>
      <nav className="navbar navbar-expand-xl fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              draggable="false"
              className="logo"
              src="/assets/img/logo_sideText.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  onClick={() => scrollToSection(home)}
                  className="nav-link   active"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(whychooseus)}
              >
                <Link className="nav-link">Why Choose Us</Link>
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(ourService)}
              >
                <Link className="nav-link">Our Service</Link>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(contact)}>
                <Link className="nav-link">Contact</Link>
              </li>
            </ul>
            <ul className="right navbar-nav ms-auto">
              <li className="nav-item-right">
                <Link className="nav-link-right" to="#">
                  Login / Sign Up
                </Link>
              </li>
              <li className="nav-item-right">
                <Link className="nav-link-right btn-fill" to="#">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="intro pb-5">
            <div className="intro-text">
              <h1 className="intro-h1 ">Welcome to Cleverbit</h1>
              <p className="front-page text-justify">
                At Cleverbit, we're passionate about crafting cutting-edge
                solutions that drive innovation and transform ideas into
                reality. Explore our world of software development excellence.
              </p>
              <div className="buttons">
                <Link to="" className="btn-fill">
                  Read More
                </Link>
                <Link to="" className="btn-outline">
                  Start Today
                </Link>
              </div>
            </div>
            <div className="intro-img">
              <img draggable="false" src="/assets/img/header-img.png" alt="" />
            </div>
            {/* <div className="scroll">
          <Link to="#variations"><img src="/assets/img/icon/icon-scroll-down.svg" alt=""/><span className="text-muted">Scroll down</span></Link>
        </div> */}
          </div>

          <div className="clients text-center">
            <p className="text-muted text-uppercase pb-4">
              Some of our trusted clients
            </p>
            <div className="client-logo">
              <div>
                <img
                  draggable="false"
                  className="h-auto  w-150 "
                  src="assets/img/siegntlanka.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  draggable="false"
                  className="h-auto  w-100 "
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEh1KWIcAmQuPm7XlVe3F8FhxT5Xk9CWMIUtHcI7IO3vrKUvtCj2J5lw5Bv8Kqr5xOn_lOvVf8SV2mHwqDb-SKj_uFLtjABp6IR2EJxY7OwXuZWA-dUTMSW4KOE9mrQRJWXiZifshUj9jtvAP4bGqpJ-lsUXLT7O0I8w2Ngdn5eSgbg83HcJ0Du19tE7=s500"
                  alt=""
                />
              </div>
              <div>
                <img
                  draggable="false"
                  className="h-auto  w-50 "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABIFBMVEX///8AAFzjiAAAAF4AAGYAAGMAAGDmigD/lQD/kgD/lAAAAFjpjAD/mAAAAFr/mQDwkAD3lAAAAFOpqcD/jwAAAE3u7vbxiwD81Kv/9+7/48fX1+fe3ufY2OKyssa7u81KSo3/6tX//vn/8uX/w4b/0aXHx9b39/rq6vB6equvr83/y5j/2bT/9eT/vnr/s1//pjn+wW8xMXaYmLRiYpBtbZf/u15XV5UhIXgVFXT/0JGOjrf/v3z/xYo7O4X/rlH/oy4AAGxmZp7/5cH+ohgAAEiDg6WQkK+BgaRUVIhJSYJ1dZzwv3rzzJnkgADxojKmpsUvL37+uVr/sFzonS/sp0snJ3IcHG06Onn/687qmynts2YeHndXV4oQEHFtbaNGDLNtAAANbUlEQVR4nO1caUMayRZt7MVe7G5pWyMEQUCWCCrRODNJdCQTEg1OlhlfYua9TOb//4t3b1WDvVRDMwHivHfPB9kK0qfuqXtuLR1JIhAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQC4f8JD7/3BcwPhV9na99S/nfIv31XnKn91eZwQVeydBysrr6vzdD+oZOzPizsapaLjytrD57N0H5oyZqytbDLWSa2H6yu590/Mrfft3KaKv+ywCtaGgqDdeCuZ1b91lNN1lRVqyz0qpaDxyZyd82sqn8kI3dF/a210MtaBv7Q84y77R5kav8QQg6aVxT5+YKvbOGovdfzaytrwF3/IdMXdjXgjoFX/vEm/8zMrwN3DLz+MkP7fVnVZM5d+3HhV7dQHLhAfXVldS1v2/agMLX91k8qcufk5f0lXOHi8LsecF8H8vrjqe0fsbAz7pDunv6TTb7Lqa8w8q5tTzN5SHScexD4R0u5yoWgMMjn11ZD3HtTTP5HLaCek/mQby7nQheAx2YQ9hH5KSa/nwPqnDsPvPqz2OSrncPDs+4iLnleeMkUH3Dn5CeWtq0vI8WPAy80+ULPBxiGXo19ULzw9+Z4/d+AWj8/Dvso8PrFhC+wRDfiDoFnJl9KNCvout0t1A91241+UPdt/Szlt6vF6SYzRzwzQ9TH5N+mtr9LdCHVa7uJdje6wZYDDFuPfdI19cNE8xrmmLpv9L6Fy4zg1h7izo0uvbTd1SLUR6qPm3zNdw3+mBB4wUhyP/MxL1R9f5ncL/RI2FdGJp9W2oYT3TjwApOvGq7BBno1sRhUMxKa3/aZSArd6iyrJ9+IbTNGfax6cX7eehpVfKrJ1w1ImfEsx1HzE9y7plGfA5uZcGftK2HVp5e20UQXVr0aM3kYN7Z/FGZUbHTOO9ilvg7DoLB3zkLdOapJhYZudosQ8vp2g7etdzvn5w34dqdXre8dnc22kpgJj5NhX5lU2uLUNR72sclHmxZ923V1/2IU+0PfN3VTR24GcpdM3S9KBd/0YeD5ruv7NannGwNsWx34hq6znuvA2DF0Y/6u+IcdTXQR1YtK23iii6g+tnBZdQ1gD7Hnr7a7h4ZtsuFs6Ofw98KGh5phD7AIgrgD0T3dZu7a6HZ6QVJomDr8wKHuz9n8av14ootwT5a2HwSKH5u8+iJu8t0+sjd5sdDoSAVX7+NTn3E/ss1tiL6Nmb1oGMitbtisp+pHBQi4geNj28SUWTWMOav+mUjxE0rbra/JRBc2+eTCZXGguy677J5fZxQbjHtHwrgjK15HBdzBAXCkFZlWLlhhsM2y4Ny5V12h4tNNXpToIiYfXrjs2DbyvNFddPMGL1pcZFrj3Hu2wd5Bnl3OXeLOz6siyP3FEfe5+0DC2hPpLlraihNd2OR/upvTNKByxbxVM137BoiaZ/yfdFltg9xdpnabsQVuyL3AsmAggqqBY4Jz39ONuY53gbUnTH47/IWURBdOd3dzmj7YJMsXPRsja7IhHuHOk5nOuDd4XOssC3ZMoxbmXsVf8+dZ9IisPan6UG/vpyr+TvXqeOHSdIPCtW+bnZGYpQFKqc65+4Hf4Qfnepg7D3KXjfEGch8VyPOC0NoTqr8z+VZqogunu91R84HNJI21LWY51+5jfxvYD0XGvcBGfZ1zP+Pcq4w7J43vSawjqlgkxidE34KX6YM9ovrxqm16oouku5HJN3xXf1yvb+u2j0HeY4lrz9RrbB6HAwD8r1670ZmrHbGcj72yh9keu62gGx3eA0U2OZgf9eisPUX14dI2PnUVBZ6Z/GhOs+frumEYJnM1qeaaxuGNzxh2+Eg/93Uf6jkd5dG3eWr3WdZv+EZ/LyiKbnSc4Zm8b+aDXycr/i7wZqD6iYkurPqxydf3+q7bOx9ljPO+PThjLwpHRh8fu0e9w1qxh27Q0f0G+8RmNW3xxrUv+GSq18foV3tBeTgHpBSziXQH2Y6rfnKii6j+7+1OFpY2eX0/bbSPA+/q7wviqasw8Pd/d/LtdMWvRLLdtEQXVv393p08mGjtUe5svE9PdGHV3+vdySnWHuZuD7Cmz5DoQoG/z7uTU609xN3EBdvkGt3kwN/f3cnp1n5HXX8v3e26Zgz8fd6dTJ21x6gz7rh2k57oHAdDnVT9fd2dTJ+1c8ajj5jiWaJT0sLu7Q8tGZFQfXzh8p5ggrX/C4MdkEfqeVbQpiY675H00IFKNioK4cKlAN+hCnhrpFL/WPu4ugYYb0ez6XtKopNl6xNc/nOH2V+CfIrJN09Vz8MnpeNXS5dGfAvqTuorqwfSwToCu4ZR/x2+sPVFqHgQuoMX3/pZiw+J1N1JwK2mKM4OPKk4VnupxKXx6RLRKGerovl8fnz8hG2riBMd8LN4ZB8CzdhS1gSTfw3ctdfwZMex8PXl8emymEsvhTkeRvnag/+wBj/oLihjFY9csWVacUUH1OXRiH4uI/lw9/B0lxOZ/Ak0Vr7Ck7aVw9ee9iox7k/KC6GO61SCfRgI8npwmLQw0F123AwSHb4jTHSo6vHqVOtnlZGPBh5M/ovA5MuyoirWDnK/xdfak+tYi5bqnSyEu3DWzow8P9qEeanbQH4Fwo5jQJjoMK65y/GPPlTFqheZfCX3eaii6Le8z+JL3LHkjbnzltJm7UjduNuGeGy67HgpJrqWcOoKzCJnDdJULziC1LSeYOjhl73QfQdtzH5tLv62k1wAaCWetjBRzpQshdY+zugBCn1+tDY10aHiI9tPmOuTqheaPHBveQo4RMt7g1d/efsKRsbl5pOrV5veMfxo842qfv4MnbZ1rW5uKtfAtfxpE0ZBc+hp8HzTu4KvDb1jeOfVcOfWU7KpRFjMMsVH9ptRHasPgkSX3IzAmMYmK6mqT5h80zqVhqr6BLg/gZenjmohO1nLbZRvNSC38UlVj7FboC9PNtQcjIyhpn6GNCArVklqWYpXkjYcDdJEyVG94VDzstQJYmtnYY8eoX32YG3l3xMSnSr/Ffvp57mE6sW7k8h9A1i0OHfJUtDqKjkZcnszxyoGK4d/m54GwT7RLBweCpZDQxULA1lxStJOTrvEdKnCuJHlS2k6fkhTfGLP8ePqCvaGcNcVB/tPiQyeovqEySN3iB3w4tw/qTLjjrTaTq7CzI8Fcmgx7g7I4g1j3cxhNYT9BhHHfNi24GdajpzBFrpp1POJA2UHK2j2wl1XVLwghyUrnCDdxUy+aV0jF0ULuA/Vr2PuOw6yHnGHZ+VTiDIbEiiLHQe6qeWox6h2fKOFjtB0MtiC0Nr5YE8eqeoGiU7AHexNVKoLcj03+WjpUoG4S+Wcol3JAfdPY+5lGeQMvDj30tDbvP2kOBIL8DWXDD69Ym0qjHtZansZygGxta8FPi4AJDDB0RqIuniKlqL6mMmXkYDkgCBUTGig+eMx92sNRR1w3/HkYRs1j60U7KErTGo84qVgdLDol6ZOCIXWPp6ii7CrJblHCrpYV6WoPtp8w8FwX2M/feas8KHMuN+qmPeaOeQlqWwwXHLupxoMcgdb7jjB6ODcM/lbTWTtTPFpZ6Y/YOqOaZ4VdGm3AwpVHz9xeeL8iQysoKqXcpy7DLGGFIglfoVxL1kqNnzNuW/IcuVys8Q+ddqj/illGeqS2Nr5ueG0U8Olr4kyndlb+hpsQvWx3UnEpczCfQvvs3kcS10wwwEubYsN7g2e2CxFbpbbVxhwjLASVPnghhXUDU9+WpbKX2jt42VYMfYFcQQu6YWkQPXR3UnAE03Fhw0QFVQqGGuc0rzWIIJg4zjeLzUWTVlVcpuVK41N9qGv5D/Z99ueql6eegq2qeQw702FaNbOqE+6KeqvWBwFBV0UaaoPHUGyrC/sUcs5GmrYy23C3zcWUrzy0NKvLQfn903Zgqr3xPMY58tx9V92LM9qqljZXnpehq0/0emSZC0bx9ZTNTLiRQVdFLti1YfunWwGhV67zOIptcobIOomb9A8wYiXr7iSS2y6wrN4OyTuHfhmqwl/Ss0MS34pB0fX81NujImqHu1NNCUPQaT62BGkZUO0BSWsZeMIqz6loIvig6Cu/667ky8F1s5mMJNujmAIqx4VP33HIUX132t3UmTt3N6m3/laGaseo55hY70kUr3wtoqlQGjtE2rZCH4ZxTGL4hEJ1QtMfmkQWfvEWjYCmMuh6lOnMEkkVc/S3Xf5DxIE1o4nqPIZb/LnuR6rlOm7TAwlRVVENxNNdseFYNu0xTeFZLvNneV6YKJp4n0WAT7EK5yEyS8JhYGdyPIsx2e+WxFXMFRZc7IP2ED1ckz1v/0tAt8AXHAG7ri5GoBxzzbYOdgSvTXD/+lResFVf7c3zchnzBdzA240QK5bX7sD0B9vwmTDXznNmekgBVO9yvamORh5NfOomQsKA8MEGA/CePfu3Xr2/8kFsPXC25xtsO46GHHHsUbwPPyTcsfwYnDQ2BZixtsvmhsz7g6WNsS4r6dwCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAjLxH8BhPtdpl/6nzYAAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              <div>
                <img
                  draggable="false"
                  src="https://lh3.googleusercontent.com/a/ACg8ocLf1oU5JNGwHSslD3yc7mcg0cFA134KZo9eFF0Sh7JfWX0=s128-b16-cc-rp-mo"
                  alt=""
                />
              </div>
              <div>
                <img draggable="false" src="/assets/img/ifslogo.png" alt="" />
              </div>
              {/* <div>
              <img src="/assets/img/ifslogo.png" alt="" />
              </div> */}
            </div>
          </div>

          <div id="variations" className="variations" ref={ourService}>
            <div className="first-variation">
              <div className="img">
                <img draggable="false" src="/assets/img/man.png" alt="" />
              </div>
              <div className="text">
                <h1 className="variations-h1">Our Services</h1>
                <p className="text-justify">
                  <b> - Web & Desktop Applications:</b>
                </p>
                <p className="text-justify text-red-500">
                  An attractive and interactive website goes a long way to
                  building your company's brand, delivering a message, or making
                  sales. Every application should not only "get the job done",
                  but look amazing while doing so.
                </p>

                <p>
                  <b>- Mobile App Development:</b>
                </p>
                <p className="text-justify">
                  We specialize in developing native and hybrid mobile
                  applications for iOS and Android devices. What better way to
                  get your products to customers than to be on their personal
                  device.
                </p>

                <p>
                  <b>- Cloud Solutions:</b>
                </p>
                <p className="text-justify">
                  Leverage a full suite of advanced networking, application and
                  hosting services. We specialize in creating custom cloud
                  solutions with Amazon Web Services and the Google Cloud
                  Platform.
                </p>

                <div className="buttons">
                  <Link to="" className="btn-fill">
                    Read More
                  </Link>
                  <Link to="" className="btn-outline">
                    Start Today
                  </Link>
                </div>
              </div>
            </div>

            <div className="second-variation " ref={whychooseus}>
              <div className="text">
                <h1 className="variations-h1">Why Choose Us</h1>
                <p>
                  ++<b>Unparalleled expertise backed by years of experience.</b>
                  <p>
                    Years of experience fuel our unmatched expertise, delivering
                    excellence in every project
                  </p>
                </p>
                <p>
                  ++<b>Proven track record of successful project delivery.</b>
                  <p>
                    Consistent success in project delivery defines our proven
                    track record
                  </p>
                </p>
                <p>
                  ++
                  <b>Client-centric approach with a focus on collaboration.</b>
                  <p>
                    Our client-centric approach revolves around collaboration.
                    We prioritize your vision, ensuring a seamless partnership
                    for success.
                  </p>
                </p>

                <div className="buttons">
                  <Link to="" className="btn-fill">
                    Read More
                  </Link>
                  <Link to="" className="btn-outline">
                    Start Today
                  </Link>
                </div>
              </div>
              <div className="img">
                <img draggable="false" src="/assets/img/woman.png" alt="" />
                <img
                  draggable="false"
                  className="square"
                  src="/assets/img/icon/square.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="service">
            <h1>Our successful stories with clients</h1>
            <p className="front-page">
              We are dedicated to exceeding client expectations and building
              lasting partnerships
            </p>
            <div className="service-items">
              <div className="item">
                <img
                  draggable="false"
                  src="/assets/img/icon/code-icon.svg"
                  alt=""
                />
                <span className="counter">10000</span>
                <span>
                  Kilometers <br />
                  of code written
                </span>
              </div>
              <div className="item">
                <img
                  draggable="false"
                  src="/assets/img/icon/cofee-icon.svg"
                  alt=""
                />
                <span className="counter">25</span>
                <span>
                  Coffees
                  <br />
                  drunk
                </span>
              </div>
              <div className="item">
                <img
                  draggable="false"
                  src="/assets/img/icon/satisfied-client-icon.svg"
                  alt=""
                />
                <span className="counter">10</span>
                <span>
                  Satisfied
                  <br />
                  customers
                </span>
              </div>
              <div className="item">
                <img
                  draggable="false"
                  src="/assets/img/icon/realized-projects-icon.svg"
                  alt=""
                />
                <span className="counter">10</span>
                <span>
                  Realized
                  <br />
                  projects
                </span>
              </div>
            </div>
          </div>

          <div className="update-news">
            <div className="row">
              <div className="col-md-5 news-text">
                <h2>Get your update news</h2>
                <p>
                  Stay informed about the latest happenings at Cleverbit. We are
                  committed to keeping you in the loop with our most recent
                  developments, product releases, and industry insights.
                </p>
              </div>
              <div className="col-md-7 news-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                />
                <button type="submit">Send</button>
              </div>
            </div>
          </div>

          <div className="team text-center">
            <h1>Our Team</h1>
            <p className="front-page">
              Our team comprises seasoned professionals in various domains
              including software development, UX/UI design, digital design,
              marketing, project management, and more. With a wealth of
              experience, we bring a deep understanding of diverse industries to
              every project.
            </p>
            <div className="team-person">
              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-1.png" alt="" />
                </div>
                <span className="name">MAM.AASIM</span>
                <span>CEO/Founder </span>
              </div>

              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">L.MIFRAS </span>
                <span>UI/UX Engineer</span>
              </div>

              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">MM.FIRNAS MOHAMED</span>
                <span>Project Manager</span>
              </div>

              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">MIM. RASMY</span>
                <span>Client Support</span>
              </div>

              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">M.SUHAITH</span>
                <span>Associate Software Engineer - Trainee</span>
              </div>

              <div className="person">
                <div className="photo">
                  <img draggable="false" src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">M.MUBARAK</span>
                <span>QA Team Lead</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div ref={contact}>
        <Footer></Footer>
      </div>
    </>
  );
}
