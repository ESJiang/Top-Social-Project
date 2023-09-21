import { setBoarderColor } from "./main-middle";
import { message, request } from "../database/database";
import { applyStyles } from "./main-left";
const friendOptionPanels = document.querySelectorAll(".friend-checkbox h3");
export let activeFriendOptionPanel = document.querySelector(".friend-checkbox > h3.active");
export const friendOptionPanelLogic = function () {
    friendOptionPanels.forEach(value => {
        value.addEventListener("click", function () {
            if (this !== activeFriendOptionPanel) {
                activeFriendOptionPanel.className = "friend-checkbox-type";
                this.className = "friend-checkbox-type active";
                activeFriendOptionPanel = this;
            }
        });
    });
};
let message_list = message;
const friendMsgList = document.querySelector(".friend-msg-list");
function judegeApplyTheme() {
    if (friendMsgList.style.backgroundColor === "black") applyStyles(friendMsgList);
}
export const createPrimaryList = function () {
    createGeneralList();
    message_list.forEach(value => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="profile">
            <div class="profile-photo">
                <img src="${value.src}" alt="profile photo" loading="lazy"/>
            </div>
            <div class="profile-description">
                <h2>${value.name}</h2>
                <p>${value.msg ? `@${value.msg}` : ""}</p>
            </div>
        </div>`;
        newDiv.querySelector(".profile").style.padding = "0.5rem";
        newDiv.querySelector(".profile").style.margin = "0.5rem 0";
        setBoarderColor(newDiv.querySelector(".profile>.profile-photo"));
        newDiv.querySelector(".profile-description > h2").style.fontSize = "medium";
        friendMsgList.appendChild(newDiv);
        judegeApplyTheme();
    });
};
let request_panel_list = request;
export const createRequestPanel = function () {
    createGeneralList();
    request_panel_list.forEach(value => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="profile">
            <div class="profile-photo">
                <img src="${value.src}" alt="profile-photo" loading="lazy"/>
            </div>
            <div class="profile-description">
                <h2>${value.name}</h2>
            </div>
        </div>`;
        newDiv.querySelector(".profile").style.padding = "0.5rem";
        newDiv.querySelector(".profile").style.margin = "0.5rem 0";
        setBoarderColor(newDiv.querySelector(".profile>.profile-photo"));
        newDiv.querySelector(".profile-description > h2").style.fontSize = "medium";
        friendMsgList.appendChild(newDiv);
        judegeApplyTheme();
    });
};
let request_list = request;
const mainRightRequestRapper = document.querySelector(".main-right> div:last-of-type");
export const createRequestList = function () {
    request_list.forEach(value => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="profile">
            <div class="profile-photo">
                <img src="${value.src}" alt="profile-photo" loading="lazy"/>
            </div>
            <div class="profile-description">
                <h2>${value.name}</h2>
            </div>
        </div>
        <div class="profile-button">
            <button class="btn">Accept</button>
            <button class="btn">Reject</button>
        </div>
        `;
        newDiv.style.width = "100%";
        const profile = newDiv.querySelector(".profile");
        profile.style.cssText = "padding: 0.5rem; margin:0.5rem 0";
        setBoarderColor(newDiv.querySelector(".profile > .profile-photo"));
        const btn_div = newDiv.querySelector(".profile-button");
        btn_div.style.cssText = "display: flex; justify-content:center;gap:1rem";
        const acceptBtn = newDiv.querySelector(".profile-button > button:first-child");
        acceptBtn.style.cssText = `background:${window.getComputedStyle(document.documentElement).getPropertyValue("--color-primary")}; color: #fff`;
        acceptBtn.addEventListener("mouseenter", () => (acceptBtn.style.color = "#000"));
        acceptBtn.addEventListener("mouseout", () => (acceptBtn.style.color = "#fff"));
        acceptBtn.addEventListener("click", function () {
            this.parentNode.parentNode.style.display = "none";
            const src_img = this.parentNode.previousElementSibling.querySelector(".profile-photo > img").src;
            const username = this.parentNode.previousElementSibling.querySelector(".profile-description > h2").textContent;
            const newMsg = document.createElement("div");
            newMsg.innerHTML = `
            <div class="profile">
                <div class="profile-photo">
                    <img src="${src_img}" alt="profile photo" loading="lazy"/>
                </div>
                <div class="profile-description">
                    <h2>${username}</h2>
                </div>
            </div>`;
            newMsg.querySelector(".profile").style.padding = "0.5rem";
            newMsg.querySelector(".profile").style.margin = "0.5rem 0";
            setBoarderColor(newMsg.querySelector(".profile>.profile-photo"));
            newMsg.querySelector(".profile-description > h2").style.fontSize = "medium";
            message_list.push({
                src: src_img,
                name: username,
            });
            const requestIndex = request_panel_list.findIndex(item => item.name === username);
            request_panel_list.splice(requestIndex, 1);
            friendMsgList.appendChild(newMsg);
            activeFriendOptionPanel.textContent === "Primary" ? createPrimaryList() : createRequestPanel();
            judegeApplyTheme();
        });
        const rejectBtn = newDiv.querySelector(".profile-button > button:last-child");
        rejectBtn.style.cssText = "background:#A30052; color: #fff";
        rejectBtn.addEventListener("mouseenter", () => (rejectBtn.style.color = "#000"));
        rejectBtn.addEventListener("mouseout", () => (rejectBtn.style.color = "#fff"));
        rejectBtn.addEventListener("click", function () {
            this.parentNode.parentNode.style.display = "none";
            const requestIndex = request_panel_list.findIndex(item => item.name === this.parentNode.previousElementSibling.querySelector(".profile-description > h2").textContent);
            request_panel_list.splice(requestIndex, 1);
            if (activeFriendOptionPanel.textContent === "Requests") createRequestPanel();
        });
        newDiv.querySelector(".profile-description > h2").style.fontSize = "medium";
        mainRightRequestRapper.appendChild(newDiv);
    });
};
export const [primaryBtn, generalBtn, requestBtn] = document.querySelectorAll(".friend-checkbox>h3");
export function createGeneralList() {
    friendMsgList.innerHTML = "";
}
export const mainRightSearchInput_primary = document.querySelector(".main-right-wrapper > .search-box > input");
export function handle_main_right_search_primary() {
    if (activeFriendOptionPanel.textContent === "Primary") {
        const search_value = this.value.toLowerCase();
        search_value === "" ? (message_list = message) : (message_list = message.filter(item => item.name.toLowerCase().includes(search_value)));
        createPrimaryList();
    }
}
export const handle_main_right_search_primary_clear = function (event) {
    if (activeFriendOptionPanel.textContent === "Primary" && event.keyCode === 27) {
        this.value = "";
        message_list = message;
        createPrimaryList();
    }
};
export const mainRightSearchInput_request = document.querySelector(".main-right-wrapper > .search-box > input");
export function handle_main_right_search_request() {
    if (activeFriendOptionPanel.textContent === "Requests") {
        const search_value = this.value.toLowerCase();
        search_value === "" ? (request_panel_list = request) : (request_panel_list = request.filter(item => item.name.toLowerCase().includes(search_value)));
        createRequestPanel();
    }
}
export const handle_main_right_search_request_clear = function (event) {
    if (activeFriendOptionPanel.textContent === "Requests" && event.keyCode === 27) {
        this.value = "";
        request_panel_list = request;
        createRequestPanel();
    }
};
