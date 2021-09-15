
/*menu de ropa*/

 function mostrarContenido (mostrar){
 	var estructura=document.getElementById(mostrar)
 	estructura.style.display='block'
 }
 function ocultarContenido(ocultar){
 	var estructura=document.getElementById(ocultar)
 	estructura.style.display='none'

 }
 function maps() {

swal.fire({

grow: 'fullscreen',
allowOutSideClick: true,
allowEscapeKey: true,
allowEnterKey:true,
stopKeydownPropagation:false,
showConfirmButton:true,
imageUrl:'imagenes/mapa.png' ,
imageWidth: '950px',
	
});
 }

 
 

 
	 
		 