// Works for arrays or strings

const username = function (names) {
  if (typeof names === "object") {
    const details = [];
    names.forEach((name) => {
      details.push(name[0].toUpperCase());
    });
    const merger = details.join("");
    alert(merger);
    console.log(merger);
  } else if (typeof names === "string") {
    const [x = "", y = "", z = ""] = names.split(" ");
    let merger = `${Boolean(x[0]) ? x[0].toUpperCase() : ""}${
      Boolean(y[0]) ? y[0].toUpperCase() : ""
    }${Boolean(z[0]) ? z[0].toUpperCase() : ""}`;
    alert(merger);
    console.log(merger);
  }
};

const button = document.querySelector("button");
button.addEventListener("click", function (ev) {
  ev.preventDefault();
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const mname = document.querySelector("#mname").value;
  const display = document.querySelector(".display");

  if (fname || lname || mname) {
    const name = [];
    name.push(fname, lname, mname);
    username(name);
  } else {
    alert("Provide input");
    console.log(false);
    username();
  }
});
