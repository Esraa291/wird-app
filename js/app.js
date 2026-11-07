document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".category");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const category = this.dataset.category;

            console.log("Selected category:", category);

        });

    });

});
