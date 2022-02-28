const srcField = document.getElementById("src-field");
const dataContainer = document.getElementById("dataContainer");
const spinnerId = document.getElementById("spinner");
// 1. fetch api by name
const loadApi = () => {
  spinnerControl("block");
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${srcField.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showResult(data.player));
  srcField.value = "";
};
// 2. show results
const showResult = (data) => {
  dataContainer.innerHTML = "";
  data.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col mb-2 mcard">
    <div class="bg-light h-100 cursor d-flex justify-content-center align-items-center flex-column rounded">
    <div class="w-75"><img src="${element.strThumb}" class="card-img-top p-3 mcard-img" alt="...">
    </div>
      <div class="card-body">
        <h5 class="card-title">Name: ${element.strPlayer}</h5>
        <h5 class="card-title">Country: ${element.strNationality}</h5>
        <div class="w-100 d-flex">
        <button type="button" class="btn btn-outline-info w-50 me-1">Details</button>
        <button type="button" class="btn btn-outline-danger w-50">Delete</button>
        </div>
      
      </div>
    </div>
    </div>
    `;
    dataContainer.appendChild(div);
  });
  spinnerControl("none");
};
// 3. control spinner
const spinnerControl = (v) => {
  spinnerId.style.display = v;
};
