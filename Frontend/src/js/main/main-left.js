export const theme = document.querySelector(".sidebar > ul > li:nth-last-of-type(2) > a");
export const searchBox = document.querySelectorAll(".search-box");
export const mainElement = document.querySelector("main");
export const changeTheme = () => mainElement.classList.toggle("background");
export function applyStyles(element) {
    if (element.tagName !== "IMG" && element.tagName !== "BUTTON") {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    }
    if (element.tagName === "I") element.style.backgroundColor = "white";
    for (const childElement of element.children) applyStyles(childElement);
}
export const searchBoxMouseOverLogic = function () {
    this.children[0].focus();
};
export const searchBoxMouseOutLogic = function () {
    this.children[0].blur();
    this.style.width = "";
};
export const setMainLeftProfile = profile => {
    document.querySelector(".main-left > .profile > .profile-photo > img").src = profile.img_src;
    document.querySelector(".main-left > .profile > .profile-description > h2").textContent = profile.name;
    document.querySelector(".main-left > .profile > .profile-description > p").textContent = profile.at;
};
export const setProfileName = profile => {
    document.querySelector(".main-left > .profile > .profile-description > h2").textContent = profile.name;
    document.querySelector(".main-left > .profile > .profile-description > p").textContent = profile.at;
};
export const exploreLogic = () => {
    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = "//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css";
    document.querySelector("head").appendChild(newLink);
    $(document).ready(function () {
        $(".sidebar > ul > li:nth-child(2)").magnificPopup({
            items: {
                src: "//topsocial.netlify.app/html/explore.html",
                type: "iframe",
            },
            callbacks: {
                open: function () {
                    this.contentContainer.css({
                        height: "100dvh",
                    });
                },
            },
        });
    });
};
