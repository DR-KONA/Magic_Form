const formData = JSON.parse(localStorage.getItem('formData')) || [];

loadData();

function loadData() {
    formData.forEach( (e) =>  {
        createCard(e);
    });
}

function createCard(data) {
    let html = `<div class="submit-history-card">
        <label class="label"><br>First name<br><p class="card-first-name">${data.firstname}</p></label>
        <label class="label"><br>Last name<br><p class="card-last-name">${data.lastname}</p></label>
        <label class="label"><br>Email<br><p class="card-email">${data.email}</p></label>
        <label class="label"><br>Phone<br><p class="card-phone">${data.phone}</p></label>
        <label class="label"><br>Company<br><p class="card-company">${data.company}</p></label>
        <label class="label"><br>Address<br><p class="card-address">${data.address}</p></label>
        <br><button class="delete-button" id="${data[0]}" type="button">Delete</button></div>`

    document.querySelector('body').insertAdjacentHTML('beforeend', html);
    let delBtn = document.getElementById(`${data[0]}`);
    delBtn.addEventListener('click', (e) => deleteCard(e));
}

function deleteCard(e) {
    let id = e.target.id;
    let div = e.target.parentNode;
    let idx = formData.findIndex(e => e[0] == id);
    // alert(`deleteCard id=${id}  idx=${idx} `);
    div.remove();
    formData.splice(idx, 1);
    localStorage.setItem('formData', JSON.stringify(formData));
}

setInterval(function() {
    loadData();
}, 100);