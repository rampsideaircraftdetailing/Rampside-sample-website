const requestForms = document.querySelectorAll(".request-form");

requestForms.forEach((requestForm) => {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = requestForm.querySelector(".form-status");
    // TODO: Connect concept forms to the production backend or CRM intake workflow.
    if (status) {
      status.textContent = "Concept sample only: this form is ready for backend integration.";
    }
  });
});
