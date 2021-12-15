(function (exports) {
    'use strict';

    class Modal {
        static initialize() {
            const modal = document.querySelector(".modal");

            document.getElementById("skill-btn").addEventListener("click", function () {
                modal.classList.add('active');
            });
            document.querySelector(".modal_close-button").addEventListener("click", function () {
                modal.classList.remove('active');
            });
        }
    }

    class Skill {
        remove(e) {
            const parent = document.querySelector(".skills_wrapper");
            parent.removeChild(e.parentNode);
        }

        insert(element, name, percents) {
            name = checkXss(name);
            const namePercentsButton = `<div class="skill_description"><div class="skills_info">${name}</div><div class="skills_info">${percents}%</div></div>`;
            const progressBar = `<div class="progress"><div class="progress-value" style="max-width: ${percents}%"></div></div>`;
            const wrapper = `<div class="skills_node"><div>${namePercentsButton}</div><div>${progressBar}</div></div>`;

            const btn = document.createElement('input');
            btn.type = "image";
            btn.src = 'assets/minus.png';
            btn.width = 30;
            btn.height = 30;
            btn.style.marginTop = "25px";
            btn.addEventListener('click', () => this.remove(btn));


            const skillsButton = document.createElement("div");
            skillsButton.classList.add("skills_button");
            skillsButton.innerHTML = `${wrapper}`;
            skillsButton.appendChild(btn);

            element.appendChild(skillsButton);
        }
    }

    const lt = /</g,
        gt = />/g,
        ap = /'/g,
        ic = /"/g;

    function checkXss(str) {
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
                progress = form.querySelector('[name="progress"]');

            skill.insert(into, name.value, progress.value);
        }

        form.addEventListener('submit', retrieveFormValue);
    });

    exports.checkXss = checkXss;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
