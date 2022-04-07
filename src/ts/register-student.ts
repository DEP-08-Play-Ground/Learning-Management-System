let txtName: HTMLInputElement =document.querySelector("#txt-studentName")!;
let txtNIC: HTMLInputElement =document.querySelector("#txt-studentNic")!;
let txtEmail: HTMLInputElement=document.querySelector("#txt-studentEmail")!;

const validationListner =(e:Event)=>{
    if (e.target instanceof HTMLInputElement){
        e.target.classList.remove('is-valid','is-invalid');
        let regExp:RegExp;
        if (e.target ===txtName){
            regExp=/^[A-Za-z ]+$/;
        }else if (e.target === txtNIC){
            regExp=/^\d{9}[Vv]$/;
        }else {
            regExp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }

        if (regExp.test(e.target.value)){
            e.target.classList.add('is-valid');
        }else {
            e.target.classList.add('is-invalid');
        }
    }
}
txtName.addEventListener('input',validationListner);
txtNIC.addEventListener('input',validationListner);
txtEmail.addEventListener('input',validationListner);



