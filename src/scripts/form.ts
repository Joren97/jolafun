const MAIL_SENT = 'success';
const INVALID = 'error';

const setFeedback = (message: string, classname: string) => {
    const feedbackEl = document.querySelector("#feedback")! as HTMLDivElement;
    feedbackEl.textContent = message;
    feedbackEl.className = `text-${classname}`;
    setTimeout(() => {
        feedbackEl.textContent = "";
        feedbackEl.className = "";
    }, 3000);
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const action = e.submitter!.dataset.action;



        if (action === "submit") {
            try {
                const nameEl = form.querySelector(
                    "input[name='your-name']"
                )! as HTMLInputElement;
                const nameVal = nameEl.value;
                const emailEl = form.querySelector(
                    "input[name='your-email']"
                )! as HTMLInputElement;
                const emailVal = emailEl.value;
                const messageEl = form.querySelector(
                    "textarea[name='your-message']"
                )! as HTMLTextAreaElement;
                const messageVal = messageEl.value;

                let formdata = new FormData();
                formdata.append("your-name", nameVal);
                formdata.append("your-email", emailVal);
                formdata.append("your-message", messageVal);

                const res = await fetch(
                    "https://jolafun.be/form.php",
                    {
                        method: "POST",
                        body: formdata,
                    }
                );

                const json = await res.json();
                const { status, message, validationError } = json;

                if (status === MAIL_SENT) {
                    setFeedback(message, "success");
                    form.reset();
                } else if (status === INVALID) {
                    setFeedback(validationError, "error");
                }

            } catch (error) {
                setFeedback("Er ging iets fout. Probeer het later opnieuw of neem telefonisch contact op.", "error");
            }
        } else {
            form.reset();
        }
    });
}