 const description = {
   descripcion:{
     demand: true,
     alias: 'd',
     desc:'Descripción de la tarea por hacer'
   }
 }
 const complete = {
   completado:{
     alias: 'c',
     default: true,
     desc:'Marca como completado o pendiente la tarea'
   }
 }
const argv = require('yargs')
    .command('crear','crear un elemento por hacer',{
      description
    })
    .command('actualizar','crear un elemento por hacer',{
      description,
      complete
    })
    .command('borrar','borrar un elemento por hacer',{
    description
    })
    .help()
    .argv;
module.exports = {
  argv
}
