
const form = document.getElementById('submit-form')

loadLocal();

function loadLocal(){
Array.from(form.elements).forEach(element => {
    element.value = localStorage.getItem(element.id) ;
});}

function updateLocal(element){
    localStorage.setItem(element.id, element.value);
}

function formSubmit(e){
    console.log('hi');
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    formData.push({
        firstname: document.getElementById('first-name').value,
        lastname: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        address: document.getElementById('address').value
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    emptyStore()
    e.preventDefault();


}

function emptyStore(){

    Array.from(form.elements).forEach(element => {
        localStorage.setItem( element.id, '') ;
        element.value = '';
    });

}


setInterval(function() {
    loadLocal();
}, 100);
