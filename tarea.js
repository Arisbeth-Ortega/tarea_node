const express= require ('express')
const servidor= express();
var num=0;
function peticion(req,res)
{
    num= contador +1;
    

}
servidor.get('/',function (req, res) {

          res.send('Bienvenido visitante'+''+ num++);

});
 
servidor.listen(3000,function(){
    console.log('Estoy escuchando 3000');

});
