document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
    const feedbackElement = document.getElementById("feedback");

    function checkAnswer() {
        const correctAnswer = "4";
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

        if (!selectedAnswer) {
            feedbackElement.textContent = "Please select an answer!";
            feedbackElement.style.color = "red";
            return;
        }

        const userAnswer = selectedAnswer.value;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    }

    submitButton.addEventListener("click", checkAnswer);
});
