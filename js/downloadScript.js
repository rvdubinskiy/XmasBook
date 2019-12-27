(function () {

    document.addEventListener("DOMContentLoaded", () => {
        let aEl = getElem("book");
        aEl.setAttribute("download", "Shreyier_D._Legendarnyieko._Krov_Pot_I_Pikseli_Obratn.epub");
        aEl.click();
    });

    function getElem(id) {
        return document.getElementById(id);
    }
})();