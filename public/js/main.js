const contactForm = document.querySelector('#contact-form');

const submitContact = async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const data = {
    name: form.get('name'),
    email: form.get('email'),
    message: form.get('message'),
  };

  if (data.name === '' || data.email === '' || data.message === '') {
    alert('All fields are required');
  } else {
    const response = await sendDataToServer(data);
    if (response) {
      alert(
        `Thank you for contacting me ${response.name}, your message has been received. I'll contact you as soon as possible.`,
      );
      contactForm.reset();
    } else {
      alert(`An error occurred`);
    }
  }

  return false;
};

const sendDataToServer = async (formData) => {
  try {
    const serverResponse = await fetch('/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = serverResponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
