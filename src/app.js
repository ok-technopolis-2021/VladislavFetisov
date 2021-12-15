import {Modal} from "./modal";
import {Skill} from "./skill";

const lt = /</g,
    gt = />/g,
    ap = /'/g,
    ic = /"/g

export function checkXss(str) {
    return str.toString()
        .replace(lt, "&lt;")
        .replace(gt, "&gt;")
        .replace(ap, "&#39;")
        .replace(ic, "&#34;")
}

// document.addEventListener("DOMContentLoaded", function (event) {
//     document.body.addEventListener("click", function () {
//         if (document.body.classList.contains("light-theme")) {
//             document.body.classList.replace("light-theme", "dark-theme");
//         } else {
//             document.body.classList.replace("dark-theme", "light-theme");
//         }
//     })
// });

document.addEventListener("DOMContentLoaded", function (event) {
    const skill = new Skill();
    const into = document.querySelector(".skills_wrapper");
    skill.insert(into, "Eat", 95);
    skill.insert(into, "Sleep", 100);
    skill.insert(into, "EatAfterSleep", 50);

    Modal.initialize();

    const form = document.getElementById("form");

    function retrieveFormValue(event) {
        event.preventDefault();

        const name = form.querySelector('[name="skillName"]'),
            progress = form.querySelector('[name="progress"]')

        skill.insert(into, name.value, progress.value);
    }

    form.addEventListener('submit', retrieveFormValue);
});