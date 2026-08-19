function openRegisterModal(obj){
    let id=obj.getAttribute('rel');
    let e =document.getElementById(id);
    e.classList.remove('modal-hide');
     e.classList.add('modal-show');

}
function closeRegisterModal(obj){
    let id = obj.getAttribute('rel');
    let e=document.getElementById(id);
    e.classList.remove('modal-show');
    e.classList.add('modal-hide');
}