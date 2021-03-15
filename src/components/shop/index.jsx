import React, { useEffect } from "react";

const SCRIPT_ID = "_ecwid-store-container";
const ECWID_STORE_ID = "my-store-48377109";

function Shop() {
  useEffect(() => {
    if (isScriptLoaded()) {
      initProductBrowser();
    } else {
      loadScript();

      setTimeout(() => {
        initProductBrowser();
      }, 1000);
    }
  }, []);

  return <div id={ECWID_STORE_ID}></div>;

  function loadScript() {
    const script = window.document.createElement("script");

    script["data-cfasync"] = "false";
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.src =
      "https://app.ecwid.com/script.js?48377109&data_platform=code&data_date=2021-03-15";
    script.charset = "utf-8";

    window.document.body.append(script);
  }

  function initProductBrowser() {
    window.xProductBrowser(
      "categoriesPerRow=3",
      "views=grid(20,3) list(60) table(60)",
      "categoryView=grid",
      "searchView=list",
      `id=${ECWID_STORE_ID}`
    );
  }

  function isScriptLoaded() {
    return !!window.document.querySelector(`script#${SCRIPT_ID}`);
  }
}

export default Shop;
