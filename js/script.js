/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}


function mascaracp(c,p){
    d_obj=c
    d_fun=p
    setTimeout("exemascara()", 1)
}

function exemascara(){
    d_obj.value=d_fun(d_obj.value)
}

function mCPF(k){
    k=k.replace(/\D/g,""); //Remove tudo o que não é dígito
    k=k.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    k=k.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    k=k.replace(/(\d{3})(\d{1,2})$/,"$1-$2")//Coloca um hífen entre o terceiro e o quarto dígitos
    return k;
}



function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
    id('Telefones').onkeyup = function(){
        mascara( this, mtel );
    }
    id('CPF').onkeyup = function(){
        mascara( this, mCPF);
    }
}