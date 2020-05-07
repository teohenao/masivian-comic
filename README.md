# Mateo Henao Rodriguez 08 mayo 2020
# PruebaMasivian

##NOTA IMPORTANTE

antes de realizar la instalacion del proyecto se debe  instalar una extension para desbloquear el cors, esto se presenta gracias a que nuestro servidor no esta registrado en los accesos del servicio back, lo que hace el desbloqueador de cors es que podemos realizar pruebas sin tener esa autorizacion.
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
uno de las extensiones de chrome que permite esto es CORS Unlock despues de instalarla activarla y proceder.

## instalar librerias de angular del package node_modules

Para instalar las librerias se ingresa a la raiz del proyecto, se abre la consola y ejecuta "npm i" que viene de npm install.

## Correr el servidor
Para correr el servidor y ver la aplicacion, en la consola raiz del proyecto ingresamos "ng serve" o "ng serve -o" el -o es para que se abra el navegador ya en la vista predeterminada.

navegar hacia `http://localhost:4200/` dado el caso de que no se escriba el -o.

## Como iteractuar 

despues de correr el servidor el abre por defecto la pagina, iteraciones que alli se pueden hacer son:

1. al ingresar a la pagina por primera vez se carga un comic aleatorio con sus estrellas vacias para realizar la calificacion
2. se puede observar el comic y algunos detalles
3. si se selecciona alguna estrella queda seleccionada y aparece un mensaje que le dice que calificacion le ha dado al comic
4. boton de comic random para que sin necesidad de refrescar la pagina el pueda cambiar de comic para calificarlo
