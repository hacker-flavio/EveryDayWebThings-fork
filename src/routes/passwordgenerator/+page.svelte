<script>
  let password = '';
  let length = 12;
  let includeUppercase = true;
  let includeNumbers = true;
  let includeSpecialChars = true;

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(randomIndex);
    }

    password = newPassword;
  };
</script>

<main>
  <h1> Password Generator</h1>
  <div>
    <label for="length">Password Length:</label>
    <input type="number" id="length" bind:value={length} min="1" />
  </div>
  <div>
    <label for="includeUppercase">Include Uppercase:</label>
    <input type="checkbox" id="includeUppercase" bind:checked={includeUppercase} />
  </div>
  <div>
    <label for="includeNumbers">Include Numbers:</label>
    <input type="checkbox" id="includeNumbers" bind:checked={includeNumbers} />
  </div>
  <div>
    <label for="includeSpecialChars">Include Special Characters:</label>
    <input type="checkbox" id="includeSpecialChars" bind:checked={includeSpecialChars} />
  </div>
  <button on:click={generatePassword}>Generate Password</button>
  <div class="result">
    <label for="password">Generated Password:</label>
    <input type="text" id="password" readonly value={password} />
  </div>
</main>

<style>
  main {
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  div {
    margin: 10px;
  }

  label {
    margin-right: 10px;
  }

  input[type="number"] {
    width: 40px;
  }

  .result {
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  input[type="text"] {
    font-size: 20px;
    margin-top: 10px;
    color: #555;
  }
</style>
