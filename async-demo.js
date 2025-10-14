// A function that returns a resolved promise on success and rejected on error
function fetchDataWithPromise(URL, ms) {
  return new Promise((resolve, reject) => {
    if (!URL || URL.trim() === "") {
      setTimeout(() => reject(new Error("URL is empty")), ms);
    } else {
      setTimeout(() => resolve("data is fetched"), ms);
    }
  });
}

async function fetchDataAsync(URL, ms) {
  return await fetchDataWithPromise(URL, ms);
}

// Usage
(async () => {
  try {
    const data = await fetchDataAsync("https://www.google.com/data", 1000);
    console.log(data + " this is async"); // "data is fetched"
  } catch (err) {
    console.error(err.message);
  }

  try {
    const data = await fetchDataAsync("", 1000);
    console.log(data);
  } catch (err) {
    console.error(err.message + " this is async"); // "URL is empty"
  }
})();
// Test: valid URL which results in success
fetchDataWithPromise("https://www.google.com/data", 1000)
  .then((result) => console.log(result)) // "data is fetched"
  .catch((err) => console.error(err.message));

// Test: empty URL which results in an error
fetchDataWithPromise("", 1000)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message)); // "URL is empty"
