document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.json();

      if (response.ok) {
        document.getElementById("message").textContent = result.message;
        document.getElementById("message").style.color = "green";
        document.getElementById("userForm").reset();
      } else {
        document.getElementById("message").textContent = result.error;
        document.getElementById("message").style.color = "red";
      }
    } catch (error) {
      document.getElementById("message").textContent =
        "Error: " + error.message;
      document.getElementById("message").style.color = "red";
    }
  });
