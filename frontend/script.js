document.getElementById('londonForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: formData
      });
  
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  });
  

  // LOADER SCRIPT
  