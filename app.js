r = document.querySelector(':root')
mode = document.querySelector('.mode')
modem = 0

function d_l_mode() {

    mode.addEventListener('click', function() {
        if (modem == 0) {
            mode.src = "img/lune.png"
            modem = 1

            r.style.setProperty("--main-color-1", "#114a0d");
            r.style.setProperty("--main-color-2", "#1e611e");
            r.style.setProperty("--main-color-3", "#2a9e2a");
            r.style.setProperty("--main-color-4", "#21541e");

            r.style.setProperty("--main-typo-1", "#6be16b");
            r.style.setProperty("--main-typo-2", "#23b323");
            r.style.setProperty("--main-typo-3", "#1f951f");
        } else {
            mode.src = "img/soleil.png"
            modem = 0

            r.style.setProperty("--main-color-1", "#6be16b");
            r.style.setProperty("--main-color-2", "#23b323");
            r.style.setProperty("--main-color-3", "#1f951f");
            r.style.setProperty("--main-color-4", "#b2e8b2");

            r.style.setProperty("--main-typo-1", "#062304");
            r.style.setProperty("--main-typo-2", "#0b3208");
            r.style.setProperty("--main-typo-3", "#114a0d");
        }
    })
}

d_l_mode()