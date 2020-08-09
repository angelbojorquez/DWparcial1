var button = document.getElementById("button");

button.addEventListener('click', function(){
    notify();
});

function notify(){
    //verifica que el navegador soporta notificaciones
    if(!("Notification" in window)){
        alert("tu navegador no soporta notificaciones");
    } else if(Notification.permission === "granted"){
        //envia notificaciones si esta autorisado
       var notification = new Notification("Envio notificacion")
    } else if (Notification.permission !=="denied"){
        Notification.requestPermission(function(permission){
            if(Notification.permission === "granted"){
                var notification = new Notification("OK")
            }
        });
    }
}