// variable qui permet d 'envoyer le formulaire
var validation=document.getElementById('envoyer');
// verification du champs nom
var nom=document.getElementById("nom");
var nom_m=document.getElementById("nom_manquant");
var nom_v=/^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+(?:(?:\-| )?[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+)*$/;
//verification du champs prenom
var prenom=document.getElementById("prenom");
var prenom_m=document.getElementById("prenom_manquant");
var prenom_v=/^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+(?:(?:\-| )?[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+)*$/;





//code postale
var cp=document.getElementById("cp");
var cp_manquant=document.getElementById("cp_manquant");
var cp_v=/^(?:(?:(?:(?:[013-8]\d)|(?:2[\dabAB])|(?:9[0-5]))\d{3})|(?:(?:97[1-5]\d{2})|(?:98[06-8]\d{2})))$/;

var addr=document.getElementById("addr");
var addresse_m=document.getElementById("addr_manquant");
var addr_v=/^(?:\d+,?(?: [a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ-]+){2,}|(?:[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ-]+(?: [a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ-]+)+))$/;

var mail=document.getElementById("mail");
var mail_m=document.getElementById("mail_manquant");
var mail_v=/^\w+[\w!#$%&'*+-/=?^`{|}~]*@[\w!#$%&'*+-/=?^`{|}~]+.[a-zA-Z]+$/;

var question=document.getElementById("pose");
var question_m=document.getElementById  ("pose_manquant");
var question_v= /[<>]|(script)|(php)|(bitmap)|(png)+/;
validation.addEventListener("click",f_valid);// evenement qui permet l'envoi du formulaire
// fonction qui permet de verifier chaue champs

function f_valid(event){
    if (nom.validity.valueMissing){
    event.preventDefault();// bloquer l'envoi du formulaire si le champ est vide    
    nom_m.textContent="nom_manquant";
    nom_m.style.color="red";
} else if(nom_v.test(nom.value) ==false)
{
    event.preventDefault();
    nom_m.textContent="format incorrect";
    nom_m.style.color="orange";
}    
    if (prenom.validity.valueMissing){
    event.preventDefault();
    prenom_m.textContent="prenom_manquant";
    prenom_m.style.color="red";
} else if(prenom_v.test(prenom.value) ==false)
{
    event.preventDefault();
    prenom_m.textContent="format incorrect";
    prenom_m.style.color="orange";
}


  
if (mail.validity.valueMissing){
    event.preventDefault();
    mail_m.textContent="mail_manquant";
    mail_m.style.color="red";
} else if(mail_v.test(mail.value) ==false)
{
    event.preventDefault();
    mail_m.textContent="format incorrect";
    mail_m.style.color="orange";
}


if (cp.validity.valuemissing){
event.preventDefault();
cp_manquant.textContent="incorrect";
cp_manquant.style.color="red";
}else if (cp_v.test(cp.value) == false)
{
    event.preventDefault();
    cp_manquant.textContent="format incorrect";
    cp_manquant.style.color="orange";
}
else{
    cp_manquant.textContent="format correct";
    cp_manquant.style.color="green";
}


if(pose.validity.valuemissing){
 event.preventDefault();
 pose_manquant.textContent="format incorrect";
 pose_manquant.style.color="red";
}else if (question_v.test(pose.value) == true)
{
    event.preventDefault();
    pose_manquant.textContent="format incorrect";
    pose_manquant.style.color="orange";
}
else{
    pose_manquant.textContent="format correct";
    pose_manquant.style.color="green";
}
}