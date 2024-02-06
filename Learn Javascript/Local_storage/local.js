const selectfont = document.getElementById("select-font");
const selectbg = document.getElementById("select-bg");
const resetb = document.getElementById("resetb");
const main = document.querySelectorAll("main");

const changefont = (event) => {
  const fontsize = event.target.value;
  main.forEach((element) => {
    element.style.fontSize = fontsize;
    localStorage.setItem("fontsize", fontsize);
  });
};
selectfont.addEventListener("change", changefont);

const changebg = (event) => {
  const bgcolor = event.target.value;
  main.forEach((element) => {
    element.style.backgroundColor = bgcolor;
    localStorage.setItem("bgcolor", bgcolor);
  });
};
selectbg.addEventListener("change", changebg);

const clear = (event) => {
  localStorage.removeItem("fontsize");
  localStorage.removeItem("bgcolor");
};
resetb.addEventListener("click", clear);

//load from local storage

const initials = () => {
  const fontsize = localStorage.getItem("fontsize");
  const bgcolor = localStorage.getItem("bgcolor");

  if (fontsize && bgcolor) {
    selectfont.value = fontsize;
    main.forEach((element) => (element.style.fontSize = fontsize));

    selectbg.value = bgcolor;
    main.forEach((element) => (element.style.backgroundColor = bgcolor));
  } else {
    const df = (selectfont.value = "18px"); // Default value
    main.forEach((element) => (element.style.fontSize = df));

    const dg = (selectbg.value = "orange"); // Default value
    main.forEach((element) => (element.style.backgroundColor = dg));
  }
};

initials();
