const form = document.querySelector('form[name="CreateTeam"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const teamName = formData.get('teamName');
  const captain = formData.get('captain');
  const game = formData.get('game');

  try {
    const response = await fetch('http://localhost:3000/profile/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teamName, captain, game  })
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("gg");
  }
});
