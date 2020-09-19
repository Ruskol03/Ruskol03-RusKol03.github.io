window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let tab = document.querySelectorAll(".tabs"),
        wrapper = document.querySelector(".CatalogButtonWrapper"),
        tabContent = document.querySelectorAll(".item"),
        orderBtn = document.querySelectorAll(".orderBtn"),
        card = document.querySelector(".card");

    let img = card.querySelector("img");
    let wrapForm = card.querySelector(".wrapForm");
    let h3 = wrapForm.querySelector("h3");
    let cardWrapP = document.querySelector(".cardWrapP");
    let p1 = cardWrapP.querySelector(".oldPrice");
    let p2 = cardWrapP.querySelector(".newPrice");
    let x = document.createElement("div");
    x.textContent = "X";
    x.classList.add("X");
    let bg = document.querySelector(".background");
    let burger = document.querySelector("#burger");
    let menu = document.querySelector(".menu");
//burger menu
    burger.addEventListener("click", () => {
        menu.classList.toggle("menuRight");

        if (menu.classList.contains("menuRight")) {
            burger.style.color = "white";
        } else {
            burger.style.color = "black";
        }
    });
//x for card
    x.addEventListener("click", () => {
        card.classList.add("hide");
        bg.classList.add("hide");
        document.body.style.overflow = "";
    });
// card
    for (let i = 0; i < tabContent.length; i += 1) {
        orderBtn[i].addEventListener("click", () => {
            card.classList.remove("hide");
            bg.classList.remove("hide");

            let srcImg = tabContent[i].querySelector("img");
            let src = srcImg.src;
            img.src = src;
            let h3Tab = tabContent[i].querySelector("h3");
            let h3Content = h3Tab.textContent;
            h3.textContent = h3Content;
            let price = tabContent[i].querySelector(".price");
            let oldPrice = price.querySelector(".oldPrice");
            let newPrice = price.querySelector(".newPrice");
            p1.textContent = oldPrice.textContent;
            p2.textContent = newPrice.textContent;
            card.appendChild(x);
            document.body.style.overflow = "hidden";
            let itemWrapSize = tabContent[i].querySelector(".wrapSize");
            let itemLi = itemWrapSize.querySelectorAll("li");
            let sizeId = card.querySelector("#sizeId");
            //обичаем из select размеры которых нет
            for (let i = 0; i < itemLi.length; i += 1) {
                if (itemLi[i].classList.contains("isAbsent")) {
                    sizeId.options[i].disabled = "disabled";
                }
                //выбираем размер в форме котрый был выбран на карточке
                if (
                    itemLi[i].classList.contains("pointSize") &&
                    !itemLi[i].classList.contains("isAbsent")
                ) {
                    for (let k = 0; k < sizeId.options.length; k += 1) {
                        if (sizeId.options[k].value == itemLi[i].textContent) {
                            sizeId.options[k].selected = "selected";
                        }
                    }
                }
            }
        });
    }

    //убрать размеры которых нет
    for (let i = 0; i < tabContent.length; i += 1) {
        if (tabContent[i].querySelector("h3").textContent == "Портупея “Пеппи”") {
            let sized = tabContent[i].querySelector(".wrapSize");
            let li = sized.querySelectorAll("li");
            li[4].classList.add("isAbsent");
            li[5].classList.add("isAbsent");
        }
    }
//выбор размеров на карточке
    for (let i = 0; i < tabContent.length; i += 1) {
        let sizes = tabContent[i].querySelector(".wrapSize");

        sizes.addEventListener("click", function (event) {
            let target = event.target;
            let li = sizes.querySelectorAll("li");

            for (let j = 0; j < li.length; j += 1) {
                if (li[j] == target && !li[j].classList.contains("isAbsent")) {
                    target.classList.add("pointSize");
                } else {
                    li[j].classList.remove("pointSize");
                }
            }
        });
    }
//функции для табов
    let showEveryDay = () => {
        for (let j = 0; j < tabContent.length; j += 1) {
            if (tabContent[j].classList.contains("erotic")) {
                tabContent[j].classList.add("hide");
            } else {
                tabContent[j].classList.remove("hide");
                tabContent[j].classList.add("show");
            }
        }
    };
    showEveryDay();

    let showErotic = () => {
        for (let j = 0; j < tabContent.length; j += 1) {
            if (tabContent[j].classList.contains("everyday")) {
                tabContent[j].classList.add("hide");
            } else {
                tabContent[j].classList.remove("hide");
                tabContent[j].classList.add("show");
            }
        }
    };
// табы на propmo
    let btnPromoEroChose = document.querySelector("#btnEroChoose");
    btnPromoEroChose.addEventListener("click", () => {
        wrapper.querySelector(".ero").classList.add("buttonColor");
        wrapper.querySelector(".every").classList.remove("buttonColor");
        showErotic();
    });
    let btnPromoEveryChose = document.querySelector("#btmEveryChoose");
    btnPromoEveryChose.addEventListener("click", () => {
        wrapper.querySelector(".every").classList.add("buttonColor");
        wrapper.querySelector(".ero").classList.remove("buttonColor");
        showEveryDay();
    });
//основные табы
    wrapper.addEventListener("click", function (event) {
        let target = event.target;

        if (target && target.classList.contains("every")) {
            target.classList.add("buttonColor");
            wrapper.querySelector(".ero").classList.remove("buttonColor");

            showEveryDay();
        } else {
            target.classList.add("buttonColor");
            wrapper.querySelector(".every").classList.remove("buttonColor");
            showErotic();
        }
    });
});