const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// SUBJECT CHANGE HANDLER
document.getElementById("subject").addEventListener("change", function () {
    const topicSelect = document.getElementById("topic");
    topicSelect.innerHTML = `<option value="" disabled selected>Choose a Chapter</option>`;

    const topics = {
        math: {
            "algebra": "Algebraic Expressions",
            "cubeRoots": "Cubes and Cube Roots",
            "inverseProportion": "Direct and Inverse Proportion",
            "exponents": "Exponents and Powers",
            "factorization": "Factorizations",
            "linear": "Linear Equation in One Variable",
            "mensuration": "Mensuration",
            "playingWithNose": "Playing with Nose",
            "rationalNumbers": "Rational Numbers",
            "squareroot": "Squares and Square Roots"
        }
    };

    const selectedSubject = this.value;
    if (topics[selectedSubject]) {
        topicSelect.disabled = false;
        for (let key in topics[selectedSubject]) {
            let option = document.createElement("option");
            option.value = key; // Use key instead of formatted value
            option.textContent = topics[selectedSubject][key];
            topicSelect.appendChild(option);
        }
    } else {
        topicSelect.disabled = true;
    }
});

// TOPIC CHANGE HANDLER
document.getElementById("topic").addEventListener("change", function () {
    const testList = document.getElementById("test-list");
    const testContainer = document.querySelector(".available-tests-container");

    testList.innerHTML = ""; // Clear previous entries
    testContainer.classList.add("hidden"); // Hide table initially

    const tests = {
        algebra: [
            { serial: 1, name: "Test 1" },
            { serial: 2, name: "Test 2" },
            { serial: 3, name: "Test 3" }
        ],
        cubeRoots: [
            { serial: 1, name: "Test 4" },
            { serial: 2, name: "Test 5" },
            { serial: 3, name: "Test 6" }
        ],
        inverseProportion: [
            { serial: 1, name: "Test 7" },
            { serial: 2, name: "Test 8" },
            { serial: 3, name: "Test 9" }
        ],
        exponents: [
            { serial: 1, name: "Test 10" },
            { serial: 2, name: "Test 11" },
            { serial: 3, name: "Test 12" }
        ],
        factorization: [
            { serial: 1, name: "Test 13" },
            { serial: 2, name: "Test 14" },
            { serial: 3, name: "Test 15" }
        ],
        linear: [
            { serial: 1, name: "Test 16" },
            { serial: 2, name: "Test 17" },
            { serial: 3, name: "Test 18" }
        ],
        mensuration: [
            { serial: 1, name: "Test 19" },
            { serial: 2, name: "Test 20" },
            { serial: 3, name: "Test 21" }
        ],
        playingWithNose: [
            { serial: 1, name: "Test 22" },
            { serial: 2, name: "Test 23" },
            { serial: 3, name: "Test 24" }
        ],
        rationalNumbers: [
            { serial: 1, name: "Test 25" },
            { serial: 2, name: "Test 26" },
            { serial: 3, name: "Test 27" }
        ],
        squareroot: [
            { serial: 1, name: "Test 28" },
            { serial: 2, name: "Test 29" },
            { serial: 3, name: "Test 30" }
        ]
    };

    const selectedTopic = this.value;
    if (tests[selectedTopic]) {
        testContainer.classList.remove("hidden"); // Show table when chapter is selected

        tests[selectedTopic].forEach(test => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${test.serial}</td>
                <td>${test.name}</td>
                <td><input type="number" min="1" class="question-input" placeholder="Enter no. of questions"></td>
            `;
            testList.appendChild(row);
        });
    }
});

// HANDLE SUBMIT BUTTON
document.getElementById("submit-tests").addEventListener("click", function () {
    const selectedQuestions = [];
    document.querySelectorAll(".question-input").forEach(input => {
        if (input.value) {
            selectedQuestions.push(`Topic: ${input.closest("tr").children[1].textContent}, Questions: ${input.value}`);
        }
    });

    if (selectedQuestions.length > 0) {
        alert("Selected Topics and No. of Questions:\n" + selectedQuestions.join("\n"));
    } else {
        alert("Please enter at least one question count.");
    }
});
