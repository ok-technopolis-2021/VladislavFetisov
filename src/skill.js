import {checkXss} from "./app";

export class Skill {
    remove(e) {
        const parent = document.querySelector(".skills_wrapper");
        parent.removeChild(e.parentNode);
    }

    insert(element, name, percents) {
        name = checkXss(name);
        const namePercentsButton = `<div class="skill_description"><div class="skills_info">${name}</div><div class="skills_info">${percents}%</div></div>`
        const progressBar = `<div class="progress"><div class="progress-value" style="max-width: ${percents}%"></div></div>`
        const wrapper = `<div class="skills_node"><div>${namePercentsButton}</div><div>${progressBar}</div></div>`

        const btn = document.createElement('input');
        btn.type = "image"
        btn.src = 'assets/minus.png';
        btn.width = 30;
        btn.height = 30;
        btn.style.marginTop = "25px";
        btn.addEventListener('click', () => this.remove(btn))


        const skillsButton = document.createElement("div");
        skillsButton.classList.add("skills_button");
        skillsButton.innerHTML = `${wrapper}`;
        skillsButton.appendChild(btn)

        element.appendChild(skillsButton);
    }
}
