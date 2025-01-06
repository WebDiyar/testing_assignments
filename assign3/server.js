const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test Application</title>
        <style>
          body { font-family: Arial, sans-serif; }
          #output { margin-top: 20px; color: blue; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Welcome to Selenium Testing</h1>
        <form id="testForm">
          <label for="dropdown">Select an option:</label>
          <select id="dropdown">
            ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">Option ${i + 1}</option>`).join('')}
          </select>
          <button id="submitBtn" type="button" onclick="submitForm()">Submit</button>
        </form>
        <p id="output"></p>
        <script>
          function submitForm() {
            const dropdown = document.getElementById('dropdown');
            const selectedOption = dropdown.options[dropdown.selectedIndex].text;
            document.getElementById('output').textContent = 'You selected: ' + selectedOption;
          }
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
