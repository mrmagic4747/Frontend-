async function askAI() {
  const prompt = document.getElementById("prompt").value;
  const responseBox = document.getElementById("response");
  responseBox.innerText = "Thinking...";

  try {
    const res = await fetch("https://cybershield-god.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    responseBox.innerText = data.response || data.error || "No response.";
  } catch (err) {
    responseBox.innerText = "Error connecting to AI.";
  }
}
