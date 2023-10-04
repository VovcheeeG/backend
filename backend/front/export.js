

const form = document.querySelector('form[name="form"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const nickname = formData.get('nickname');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('http://localhost:3000/people/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname, email, password })
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("gg");
  }
});


const login = document.querySelector("form[name=login]")

login.addEventListener('submit',async(event)=>{
  event.preventDefault()

  const formLogin = new FormData(login);
  const email = formLogin.get('email');
  const password = formLogin.get('password');
  
  try {
    const responseLog = await fetch('http://localhost:3000/people/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password })
    });

    const dataLog = await responseLog.json();
    console.log(dataLog, );
  } catch (err) {
    console.log("gg");
  }
})



