let txtName: HTMLInputElement =document.querySelector("#txt-studentName")!;
let txtNIC: HTMLInputElement =document.querySelector("#txt-studentNic")!;
let txtEmail: HTMLInputElement=document.querySelector("#txt-studentEmail")!;
let frmRegistration:HTMLFormElement =document.querySelector('#frm-register-students')!;

frmRegistration.addEventListener('submit',(e)=>{
    e.preventDefault();

    let inputs:HTMLInputElement[]=[txtName,txtNIC,txtEmail];
    let invalidInputElm=inputs.find((input:HTMLInputElement)=>
        input.classList.contains('is-invalid') || input.value.length===0
    );
    if (invalidInputElm){
        invalidInputElm.classList.add('is-invalid');
        invalidInputElm.focus();
        invalidInputElm.select();
        return;
    }else {
        let student={
            name:txtName.value.trim(),
            nic:txtNIC.value.trim(),
            email:txtEmail.value.trim()
        };
        let studentJSON=JSON.stringify(student);
        console.log(studentJSON);

    }
});


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



