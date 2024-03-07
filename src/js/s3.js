let url = 'https://s3.amazonaws.com/edx.js.bucket/portfolio.json';
let formData = [];

// Getter and setter for form array
function getFormData() {
  return formData;
}

function setFormData(newFormData) {
  formData.splice(0, formData.length);
  formData.push(...newFormData);
}

// Other functions
async function fetchData() {
    console.log('Trying to fetch form data');

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      formData = await response.json();
      console.log(formData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// Run fetch data to initialize on load
fetchData();

async function putData() {
  console.log('Trying to put formData');
  console.log(formData);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Upload successful');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

export { fetchData, putData, getFormData, setFormData };