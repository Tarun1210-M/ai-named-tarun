function reply() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  const chatBox = document.getElementById("chatBox");

  // Show user input
  const userMessage = document.createElement("p");
  userMessage.innerHTML = `<strong>You:</strong> ${input}`;
  chatBox.appendChild(userMessage);

  // Generate response
  const response = document.createElement("p");
  response.innerHTML = `<strong>Tarun:</strong> ${generateResponse(input)}`;
  chatBox.appendChild(response);

  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
  const lower = input.toLowerCase();

  // Recipe: Sambar
  if (lower.includes("how to make sambar") || lower.includes("sambar recipe")) {
    return `
      Here's how to make delicious South Indian Sambar:
      <ol>
        <li>Boil 1 cup toor dal with 3 cups water until soft.</li>
        <li>In a pan, heat oil, add mustard seeds, curry leaves, red chilies.</li>
        <li>Add chopped vegetables (carrot, drumstick, onion, etc.).</li>
        <li>Cook with salt, turmeric and tamarind water (2 tbsp paste).</li>
        <li>Add cooked dal, 2 tbsp sambar powder. Simmer 10 mins.</li>
        <li>Garnish with coriander. Done!</li>
      </ol>`;
  }

  // Math Calculation (basic)
  try {
    if (/[\d+\-*/().]/.test(input)) {
      const result = eval(input);
      return `The answer is: <strong>${result}</strong>`;
    }
  } catch (err) {
    return "Oops! That math didn't work.";
  }

  // General reply
  return "I'm Tarun! You can ask me about food recipes 🍲 or math 📐!";
}
