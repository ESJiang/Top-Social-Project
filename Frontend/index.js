import "./index.css";
import { cards, profile, highline } from "@/js/database/database";
import { setRightCornerImage } from "@/js/nav/nav";
import { theme, searchBox, searchBoxMouseOverLogic, searchBoxMouseOutLogic, setMainLeftProfile, exploreLogic, setProfileName, applyStyles } from "@/js/main/main-left";
import {
    mainmiddleinput,
    headerSearchBar,
    handleCardSearch,
    handleCardKeyDown,
    setBoarderColor,
    mainleftprofile,
    createprofile,
    middlecommentphoto,
    middleprofilephoto,
    middepostprofilephoto,
    randomColor,
    popupTrigger,
    popupClose,
    popupTriggerLogic,
    popupCloseLogic,
    randomPickImage,
    middlePostFocus,
    testMiddlePost,
    getHighlightText,
    setMiddlePostPhoto,
    generateMiddlePostList,
    setMiddleHighlineImg,
    setMiddleProfileImg,
} from "@/js/main/main-middle";
import {
    friendOptionPanelLogic,
    createPrimaryList,
    createRequestList,
    createRequestPanel,
    primaryBtn,
    requestBtn,
    generalBtn,
    createGeneralList,
    mainRightSearchInput_request,
    handle_main_right_search_request,
    mainRightSearchInput_primary,
    handle_main_right_search_primary,
    handle_main_right_search_primary_clear,
    handle_main_right_search_request_clear,
} from "@/js/main/main-right";

// set right corner profile image
setRightCornerImage(profile);

// set main left profile image
setMainLeftProfile(profile);

// set main left profile name/at
setProfileName(profile);

// explore posts
exploreLogic();

// switch theme
theme.addEventListener("click", function (e) {
    e.preventDefault();
    applyStyles(document.querySelector("body"));
});

// handle search input mouseover
searchBox.forEach(value => value.addEventListener("mouseover", searchBoxMouseOverLogic));

// handle search input mouseout
searchBox.forEach(value => value.addEventListener("mouseout", searchBoxMouseOutLogic));

// random pick profile border color
mainleftprofile.style.borderColor = randomColor;
middlecommentphoto.style.borderColor = randomColor;
createprofile.style.borderColor = randomColor;
middleprofilephoto.forEach(value => setBoarderColor(value));
middepostprofilephoto.forEach(value => setBoarderColor(value));

// main-middle card logic
popupTrigger.forEach(value => value.addEventListener("click", popupTriggerLogic));
popupClose.forEach(value => value.addEventListener("click", popupCloseLogic));

// pick images randomly
randomPickImage();

// main-middle-highline img
setMiddleHighlineImg();

// main-middle-highline textContent
getHighlightText(highline);

// main-middle-profile img
setMiddleProfileImg();

// main-middle thought input functionality
mainmiddleinput(profile);

// main-middle-post-profile photo
setMiddlePostPhoto(profile);

// main-middle-post focus functionality
middlePostFocus();

// test main-middle-post functionality
testMiddlePost();

// main-middle search bar functionality
headerSearchBar.addEventListener("input", handleCardSearch);
headerSearchBar.addEventListener("keydown", handleCardKeyDown);

// main-middle cards generation
generateMiddlePostList(cards);

// main-right searchbar functionality
mainRightSearchInput_primary.addEventListener("input", handle_main_right_search_primary);
mainRightSearchInput_primary.addEventListener("keydown", handle_main_right_search_primary_clear);
mainRightSearchInput_request.addEventListener("input", handle_main_right_search_request);
mainRightSearchInput_request.addEventListener("keydown", handle_main_right_search_request_clear);

// main-right friend panel (three options)
friendOptionPanelLogic();

// main-right primary panel generation
createPrimaryList();

// main-right primary panel event listener
primaryBtn.addEventListener("click", createPrimaryList);

// main-right request panel generation
requestBtn.addEventListener("click", createRequestPanel);

// main-right general panel generation
generalBtn.addEventListener("click", createGeneralList);

// main-right request list generation
createRequestList();
