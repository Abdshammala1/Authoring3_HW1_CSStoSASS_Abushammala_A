(() => {
  //make an AJAX request using the Fetch API
  fetch("./data/classData.json")
    .then(res => res.json())
    .then(data => {
      // debugger;
      console.log(data);

      // data handling
      courseName = document.getElementById("courseName");
      profName = document.getElementById("profName");
      courseTiming = document.getElementById("courseTiming");
      courseName.innerHTML = data["coursename"] + "-" + data["coursecode"];
      profName.innerHTML = "Professor - " + data["profname"];
      courseTiming.innerHTML =
        data["classtime"][0] + " - " + data["classtime"][1];
    })

    .catch(err => {
      console.log(err);

      // error handling
      courseName = document.getElementById("courseName");
      profName = document.getElementById("profName");
      courseTiming = document.getElementById("courseTiming");
      courseName.innerHTML = "Unknown";
      profName.innerHTML = "Unknown";
      courseTiming.innerHTML = "Unknown";
    });
})();
