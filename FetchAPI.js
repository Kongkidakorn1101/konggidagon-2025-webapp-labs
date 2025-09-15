let promise = fetch("https://api.disneyapi.dev/character");

    promise
      .then(response => response.json())
      .then(data => console.log(data.info));