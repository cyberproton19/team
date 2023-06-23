document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Check if username and password are valid
  if (username === 'admin' && password === 'password') {
    // Successful login
    alert('Giriş Uğurlu');
  } else {
    // Invalid login
    alert('Yanlış istifadəçi adı və ya şifrə');
  }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  // Check if all fields are filled
  if (username && email && password && confirmPassword) {
    // Check if passwords match
    if (password === confirmPassword) {
      // Successful registration
      alert('Qeydiyyat Uğurlu');
      // Reset the form
      document.getElementById('registrationForm').reset();
    } else {
      // Passwords don't match
      alert('Parollar uyğun gəlmir');
    }
  } else {
    // Missing fields
    alert('Zəhmət olmasa bütün sahələri doldurun');
  }
});