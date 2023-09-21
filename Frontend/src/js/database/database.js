import { getPath } from "./utils";
import axios from "//cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
const getInfo = async path => {
    try {
        return await axios.get(path);
    } catch (error) {
        console.error(error);
    }
};
export const [cards, profile, highline, message, request] = await Promise.all([
    (async () => (await getInfo(getPath("cards/all"))).data.data)(),
    (async () => (await getInfo(getPath("profile"))).data.data)(),
    (async () => (await getInfo(getPath("highline"))).data.data.highline)(),
    (async () => (await getInfo(getPath("message"))).data.data.message)(),
    (async () => (await getInfo(getPath("request/all"))).data.data)(),
]);
