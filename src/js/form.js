import { putData, getFormData } from "./s3.js";

async function addFormData(name, email, message) {
  const data = getFormData(); 
  data.push({ name, email, message });
  
  try {
      await putData();
      console.log('Data updated in S3');
  } catch (error) {
      console.error('Error updating data:', error);
      throw error; // Propagate error to caller
  }
}

function removeFormData(name) {
  for (let i = 0; i < getFormData().length; i++) {
    if (getFormData()[i][0] === name) {
      getFormData().splice(i, 1);
      console.log(`${name} has been removed from form data.`);
      return;
    }
  }

  console.log(`${name} was not found in form data.`);
}

export { addFormData, removeFormData };