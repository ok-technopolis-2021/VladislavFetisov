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
    skill.insert(into, "some2", 95);
    skill.insert(into, "some3", 100);
    skill.insert(into, "some1", 50);
    document.getElementsByClassName("right-info_btn-skills")[0].addEventListener("click", function () {
        modal.classList.add('active');
    });
    document.getElementsByClassName("modal_close-button")[0].addEventListener("click", function () {
        modal.classList.remove('active');
    });

    const form = document.getElementById("form");

    function retrieveFormValue(event) {
        event.preventDefault();

        const name = form.querySelector('[name="skillName"]'),
            progress = form.querySelector('[name="progress"]');

        skill.insert(into, name.value, progress.value);
    }

    form.addEventListener('submit', retrieveFormValue);
});

class Skill {

    insert(element, name, percents) {
        const namePercentsButton = `<div class="skill_description"><div>${name}</div><div>${percents}%</div></div>`;
        const progressBar = `<div class="progress"><div class="progress-value" style="max-width: ${percents}%"></div></div>`;
        let wrapper = `<div style="width: 100%"><div>${namePercentsButton}</div><div>${progressBar}</div></div>`;

        let btn = document.createElement('button');
        btn.classList.add("small-circle2");
        btn.addEventListener('click', remove, false);
        btn.innerHTML =`<img class="small-circle" src="./assets/minus.png" alt="Remove skill">`;

        let skillsButton = document.createElement("div");
        skillsButton.classList.add("skills_button");
        skillsButton.innerHTML = `${wrapper}`;
        skillsButton.appendChild(btn);

        element.appendChild(skillsButton);
    }
}

function remove(e) {
    let parent = document.getElementsByClassName("skills_wrapper")[0];
    parent.removeChild(e.target.parentNode.parentNode);
}
