const express= require ('express')
const servidor= express();

servidor.get('/',function (req, res) {
    for(let i=0; i<i ;i++){
        res.send('Bienvenido visitante'+i);

    }
   

});

servidor.listen(3000,function(){
    console.log('Estoy escuchando 3000');

});
