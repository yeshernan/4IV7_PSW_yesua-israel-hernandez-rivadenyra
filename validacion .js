/*
Javascript es un lenguaje que poseee un paradigma orientado a objetos y a funciones, por tal motivo presenta una particularidad la cual es
NO TIPADO


todo es var ->variable


*/


function validar (formulario){
     // obtener los datos y discrimar a  los que tiene 3 letras
     if(formulario.nombre.value.length < 3){
     alert("escriba por lo menos 5 caracteres en el campo NOMBRE");
     formulario.nombre.focus();
     return false;    
     } 
   
    var checkOK="1234567890";
    

    var checkstr = formulario.nombre.value
    var todoesvaildo=true;

    for(var i=0; i<checkstr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j= 0; j< checkOK.length; j++){
            if(ch== checkOK.charAt(j)){
                break;
            }
         
            if(j==checkOK.length){
                todoesvalido=false;
                break;
            }
        } 
    }

   if(!todoesvaildo){
       alert("escriba unicamente letras en el campo Nombre");
       formulario.edad.focus();
       return false;
   }
    


     var txt= formulario.email.value;

     //creo mi expresion regular

     var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

     alert("Email" +(b.test(txt)?" ":"no")+" valido");
     return b.test;

}

