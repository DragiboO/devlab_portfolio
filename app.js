r = document.querySelector(':root')
mode = document.querySelector('.mode')
modem = 0

function d_l_mode() {

    mode.addEventListener('click', function() {
        if (modem == 0) {
            mode.src = "img/dark.png"
            modem = 1

            r.style.setProperty("--header-footer", "#021402");

            r.style.setProperty("--main-color-1", "#052905");
            r.style.setProperty("--main-color-2", "#031403");

            r.style.setProperty("--typo-tittle", "#66b866");
            r.style.setProperty("--typo-text", "#a4cca0");
        } else {
            mode.src = "img/light.png"
            modem = 0

            r.style.setProperty("--header-footer", "#a6eda6");

            r.style.setProperty("--main-color-1", "#e1f9e1");
            r.style.setProperty("--main-color-2", "#c4f3c4");

            r.style.setProperty("--typo-tittle", "#030f03");
            r.style.setProperty("--typo-text", "#10330d");
        }
    })
}

d_l_mode()