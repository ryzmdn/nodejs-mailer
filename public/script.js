document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const errorDiv = document.getElementById("error");
  const successDiv = document.getElementById("success");
  errorDiv.style.display = "none";
  successDiv.style.display = "none";

  try {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post("/api/submit", formData);

    successDiv.style.display = "block";
    successDiv.textContent = response.data.message;
    document.getElementById("form").reset();
  } catch (error) {
    errorDiv.style.display = "block";
    const errorMessage =
      error.response?.data?.error || error.message || "Error";
    errorDiv.textContent = errorMessage;
  }
});
