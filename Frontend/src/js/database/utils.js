import path from "path-browserify";

export function isNumber(element) {
    return element === +element;
}

export function isFalsy(element) {
    return element !== 0 && element == false;
}

export function getPath(...info) {
    const protocol = import.meta.env.VITE_DB_PATH.includes("localhost") ? "http://" : "https://";
    return protocol + path.join(import.meta.env.VITE_DB_PATH, ...info);
}

export function getPathWithID(id, ...info) {
    return isNumber(id) ? getPath(...info, id) : getPath(...info);
}
