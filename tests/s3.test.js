import { fetchData, putData, getFormData, setFormData } from '../src/js/s3.js';

describe('Integration tests for s3.js', () => {

    describe('fetchData', () => {
      it('should fetch form data', async () => {
        await fetchData();

        expect(getFormData().some(item => Object.values(item).some(value => value.includes("John Doe")))).toBeTruthy();
      });
    });
  
    describe('putData', () => {
        it('should put form data', async () => {        
            getFormData().push({name: "Test", email: "email@test.com", message: "hello world"});
            await putData();

            // Fetch data to verify
            await fetchData();

            expect(getFormData()).toContainEqual({name: "Test", email: "email@test.com", message: "hello world"});
        });

        it('should remove form data', async () => {
            setFormData(getFormData().filter(item => item.name !== "Test"));
            await putData();

            // Fetch data to verify
            await fetchData();
            expect(getFormData()).not.toContainEqual({name: "Test", email: "email@test.com", message: "hello world"});
        });
    });

    describe('getFormData', () => {
        it('should return form data', async () => {
            expect(getFormData().some(item => Object.values(item).some(value => value.includes("John Doe")))).toBeTruthy();
        });
      });
  });
