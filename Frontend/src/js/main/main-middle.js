import { cards } from "../database/database";
const originalCards = cards;
let currentCards = cards;
export const setMiddleHighlineImg = () =>
    document.querySelectorAll(".main-middle-card.popup-trigger>img").forEach((value, index) => (value.src = `//ik.imagekit.io/fangweij/highline/highline_${index + 1}.webp`));
export const setMiddleProfileImg = () =>
    document.querySelectorAll(".main-middle-card.popup-trigger>.profile-photo>img").forEach((value, index) => (value.src = `//ik.imagekit.io/fangweij/profile/profile_${index + 1}.webp`));
export const headerSearchBar = document.querySelector(".container > .search-box > .search-txt");
export const handleCardSearch = function () {
    const search_value = this.value.toLowerCase();
    console.log(search_value);
    search_value === "" ? (currentCards = originalCards) : (currentCards = originalCards.filter(item => item.profile.name.toLowerCase().includes(search_value)));
    generateMiddlePostList(currentCards);
};
export const handleCardKeyDown = function (event) {
    if (event.keyCode === 27) {
        this.value = "";
        currentCards = originalCards;
        generateMiddlePostList(currentCards);
    }
};
export const popupTrigger = document.querySelectorAll(".popup-trigger");
export const popupClose = document.querySelectorAll(".popup-close");
export const popupTriggerLogic = function () {
    this.nextElementSibling.style.display = "flex";
};
export const popupCloseLogic = function () {
    this.closest(".popup").style.display = "none";
};
export function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    return color;
}
export function setBoarderColor(element) {
    element.style.borderColor = getRandomColor();
}
export const randomColor = getRandomColor();
export const mainleftprofile = document.querySelector(".main-left > .profile > .profile-photo");
export const createprofile = document.querySelector(".create > .profile-photo");
export const middlecommentphoto = document.querySelector(".main-middle-thought-wrapper > .profile-photo");
export const middleprofilephoto = document.querySelectorAll(".main-middle-card > .profile-photo");
export const middepostprofilephoto = document.querySelectorAll(".info-profile > .profile > .profile-photo");
export function getRandomImages() {
    const images = [
        "//ik.imagekit.io/fangweij/highline/highline_1.webp",
        "//ik.imagekit.io/fangweij/highline/highline_2.webp",
        "//ik.imagekit.io/fangweij/highline/highline_3.webp",
        "//ik.imagekit.io/fangweij/highline/highline_4.webp",
        "//ik.imagekit.io/fangweij/highline/highline_5.webp",
        "//ik.imagekit.io/fangweij/highline/highline_6.webp",
        "//ik.imagekit.io/fangweij/highline/highline_7.webp",
        "//ik.imagekit.io/fangweij/highline/highline_8.webp",
    ];
    const images2 = [
        "//ik.imagekit.io/fangweij/profile/profile_1.webp",
        "//ik.imagekit.io/fangweij/profile/profile_2.webp",
        "//ik.imagekit.io/fangweij/profile/profile_3.webp",
        "//ik.imagekit.io/fangweij/profile/profile_4.webp",
        "//ik.imagekit.io/fangweij/profile/profile_5.webp",
        "//ik.imagekit.io/fangweij/profile/profile_6.webp",
        "//ik.imagekit.io/fangweij/profile/profile_7.webp",
        "//ik.imagekit.io/fangweij/profile/profile_8.webp",
        "//ik.imagekit.io/fangweij/profile/profile_9.webp",
        "//ik.imagekit.io/fangweij/profile/profile_10.webp",
        "//ik.imagekit.io/fangweij/profile/profile_11.webp",
        "//ik.imagekit.io/fangweij/profile/profile_12.webp",
        "//ik.imagekit.io/fangweij/profile/profile_13.webp",
        "//ik.imagekit.io/fangweij/profile/profile_14.webp",
        "//ik.imagekit.io/fangweij/profile/profile_15.webp",
        "//ik.imagekit.io/fangweij/profile/profile_16.webp",
        "//ik.imagekit.io/fangweij/profile/profile_17.webp",
    ];
    const images3 = [
        "//ik.imagekit.io/fangweij/post/post_1.webp",
        "//ik.imagekit.io/fangweij/post/post_2.webp",
        "//ik.imagekit.io/fangweij/post/post_3.webp",
        "//ik.imagekit.io/fangweij/post/post_4.webp",
        "//ik.imagekit.io/fangweij/post/post_5.webp",
        "//ik.imagekit.io/fangweij/post/post_6.webp",
        "//ik.imagekit.io/fangweij/post/post_7.webp",
        "//ik.imagekit.io/fangweij/post/post_8.webp",
        "//ik.imagekit.io/fangweij/post/post_9.webp",
        "//ik.imagekit.io/fangweij/post/post_10.webp",
        "//ik.imagekit.io/fangweij/post/post_11.webp",
    ];
    const shuffledImages = shuffleArray(images);
    const selectedImages = shuffledImages.slice(0, 6);
    const shuffledImages2 = shuffleArray(images2);
    const selectedImages2 = shuffledImages2.slice(0, 6);
    const shuffledImages3 = shuffleArray(images3);
    const selectedImages3 = shuffledImages3.slice(0, 4);
    const imageContainer = document.querySelectorAll(".main-middle-card > img");
    imageContainer.forEach((img, index) => (img.src = selectedImages[index]));
    const profileContainer = document.querySelectorAll(".main-middle-card > .profile-photo > img");
    profileContainer.forEach((img, index) => (img.src = selectedImages2[index]));
    const postContainer = document.querySelectorAll(".info-picture > img");
    postContainer.forEach((img, index) => (img.src = selectedImages3[index]));
}
export const randomPickImage = () => setInterval(() => getRandomImages(), 6000);
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const middlePostProfile = document.querySelector(".main-middle-thought-wrapper > .profile-photo");
export const middlePostFocus = () =>
    middlePostProfile.addEventListener("mouseenter", function () {
        this.nextElementSibling.focus();
    });
const middlePost = document.querySelector(".main-middle-thought-wrapper > :last-child");
export const testMiddlePost = () => {
    middlePost.addEventListener("click", function () {
        alert(this.previousElementSibling.value);
        this.previousElementSibling.value = "";
    });
};
export const getHighlightText = highline => {
    document.querySelectorAll("figure.main-middle-card > p").forEach((value, index) => (value.textContent = highline.description[index]));
};
export const setMiddlePostPhoto = profile => {
    document.querySelector(".main-middle-thought-wrapper > .profile-photo > img").src = profile.img_src;
};
const postWrapper = document.querySelector(".main-middle-post-wrapper");
export const generateMiddlePostList = cards => {
    postWrapper.innerHTML = "";
    cards.forEach(value => {
        const newArticle = document.createElement("article");
        newArticle.innerHTML = `
        <article>
            <div class="info-profile">
                <div class="profile">
                    <div class="profile-photo"><img alt="profile photo" src=${value.profile.src} loading="lazy"/></div>
                    <div class="profile-description">
                        <h2>${value.profile.name}</h2>
                        <p>${value.profile.position}, ${value.profile.time}</p>
                    </div>
                </div>
                <i class="uil uil-ellipsis-h"></i>
            </div>
            <div class="info-picture"><img width="100%" src=${value.picture.img_src} alt="post image"/></div>
            <div class="info-control">
                <div class="main-control"><i class="uil uil-heart control_heart"></i><i class="uil uil-comment-dots"></i><i class="uil uil-share-alt"></i></div>
                <i class="uil uil-bookmark"></i>
            </div>
            <div class="info-comment">
                <div class="profile-photo-list">
                    <img src=${value.comment.img_src_list[0]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <img src=${value.comment.img_src_list[1]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <img src=${value.comment.img_src_list[2]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                    <span class="like-info">Liked by <strong> ${value.comment.first_people_name} </strong> and <strong> ${value.comment.like_peoples_number}</strong> others</span>
                </div>
                <span class="comment-info">${value.comment.comment_info}</span>
                <span class="view-btn">View all ${value.comment.view_number} comments</span>
            </div>
        </article>
        `;
        setBoarderColor(newArticle.querySelector(".profile-photo"));
        newArticle.querySelectorAll(".profile-photo-list > .profile-photo").forEach(value => setBoarderColor(value));
        postWrapper.appendChild(newArticle);
    });
};
export const mainmiddleinput = profile => (document.querySelector(".main-middle-thought-wrapper>input").placeholder = `What is on your mind, ${profile.name}?`);
