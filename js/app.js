const sifreGirInputDOM = document.querySelector("#sifreGirInput");
const sifreGirButtonDOM = document.querySelector("#sifreGirButton");
const sifreCozButtonDOM = document.querySelector("#sifreCozButton");
const sifreCozInputDOM = document.querySelector("#sifreCozInput");
const alertWarningDOM = document.querySelector("#alertWarning");
const alertIciStrongDOM = document.querySelector("#alertIciStrong");
const inputlariTemizleDOM = document.querySelector("#inputlariTemizle");

runEventListeners();

function runEventListeners() {
    sifreGirButtonDOM.addEventListener("click", sifrele);
    sifreCozButtonDOM.addEventListener("click", sifreCoz);
    inputlariTemizleDOM.addEventListener("click", inputlariTemizle);
}

function sifrele() {
    if (sifreGirInputDOM.value != "") {
        sifreCozInputDOM.value = btoa(sifreGirInputDOM.value);
        console.log(sifreCozInputDOM.value);
        sifreGirInputDOM.value = "";
        alertWarningDOM.classList = `alert alert-success`;
        alertWarningDOM.style = `display:block`;
        alertIciStrongDOM.textContent = `İşlem Başarılı`;
        setTimeout(function() {
            alertWarningDOM.style = `display:none`;
        }, 2000);
    } else {
        alertWarningDOM.classList = `alert alert-danger`;
        alertWarningDOM.style = `display:block`;
        alertIciStrongDOM.textContent = `Şifrelenecek herhangi bir değer girmediniz !!!`;
        setTimeout(function() {
            alertWarningDOM.style = `display:none`;
        }, 2000);
    }
}

function sifreCoz() {
    if (sifreCozInputDOM.value != "") {
        sifreGirInputDOM.value = atob(sifreCozInputDOM.value);
        console.log(sifreGirInputDOM.value);
        sifreCozInputDOM.value = "";
        alertWarningDOM.classList = `alert alert-success`;
        alertWarningDOM.style = `display:block`;
        alertIciStrongDOM.textContent = `İşlem Başarılı`;
        setTimeout(function() {
            alertWarningDOM.style = `display:none`;
        }, 2000);
    } else {
        alertWarningDOM.classList = `alert alert-danger`;
        alertWarningDOM.style = `display:block`;
        alertIciStrongDOM.textContent = `Çözülecek herhangi bir şifre değeri girmediniz !!!`;
        setTimeout(function() {
            alertWarningDOM.style = `display:none`;
        }, 2000);
    }
}

function inputlariTemizle() {
    sifreGirInputDOM.value = "";
    sifreCozInputDOM.value = "";
}
