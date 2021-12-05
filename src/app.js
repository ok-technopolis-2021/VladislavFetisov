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
    let modal = document.getElementsByClassName("modal")[0];
    let skill = new Skill();
    let into = document.getElementsByClassName("skills_wrapper")[0];
    skill.insert(into, "Eat", 95);
    skill.insert(into, "Sleep", 100);
    skill.insert(into, "EatAfterSleep", 50);
    document.getElementById("skill-btn").addEventListener("click", function () {
        modal.classList.add('active');
    })
    document.getElementsByClassName("modal_close-button")[0].addEventListener("click", function () {
        modal.classList.remove('active');
    })

    const form = document.getElementById("form");

    function retrieveFormValue(event) {
        event.preventDefault();

        const name = form.querySelector('[name="skillName"]'),
            progress = form.querySelector('[name="progress"]')

        skill.insert(into, name.value, progress.value);
    }

    form.addEventListener('submit', retrieveFormValue);
});

class Skill {

    insert(element, name, percents) {
        const namePercentsButton = `<div class="skill_description"><div class="skills_info">${name}</div><div class="skills_info">${percents}%</div></div>`
        const progressBar = `<div class="progress"><div class="progress-value" style="max-width: ${percents}%"></div></div>`
        let wrapper = `<div class="skills_node"><div>${namePercentsButton}</div><div>${progressBar}</div></div>`

        let btn = document.createElement('input');
        btn.type = "image"
        btn.src = 'assets/minus.png';
        btn.width = 30;
        btn.height = 30;
        btn.style.marginTop = "25px";
        btn.onclick = function () {
            remove(btn);
        }

        let skillsButton = document.createElement("div");
        skillsButton.classList.add("skills_button");
        skillsButton.innerHTML = `${wrapper}`;
        skillsButton.appendChild(btn)

        element.appendChild(skillsButton);
    }
}

function remove(e) {
    let parent = document.getElementsByClassName("skills_wrapper")[0];
    parent.removeChild(e.parentNode);
}