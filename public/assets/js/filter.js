var sectorFilter = '';
var especialidadFilter = '';
var nombre = '';
var sede = '';

var data = [
  {nombre : 'Carlos', sede : 'somewhere', especialidad : 'Derecho de prueba', sector : 'valencia'},
];

$('#especialidad')
.dropdown({
    onChange: function(value, text, $selectedItem) {
        programFilter = value;
    }
});

$('#sede')
  .dropdown()
;

$('#sector')
  .dropdown()
;

$(function() {
    document.getElementById('buscar').addEventListener('click', function() {
        sectorFilter = document.getElementById('sector').value;
        especialidadFilter = document.getElementById('especialidad').value;
        nombreFilter = document.getElementById('nombre').value;
        sedeFilter = document.getElementById('sede').value;
        search();
    });
});

function search(){
    for(i in data){
        if(execFilter(data[i]))
            console.log(data[i]['nombre']);
  }
}

function execFilter(row) {
    if ((especialidadFilter != '') && especialidadFilter.indexOf(row['especialidad']) < 0)
        return 0;
    if (sectorFilter != '' && sectorFilter != row['A_C_Operator_Manager__c'])
        return 0;
    if(sedeFilter != ''  && sedeFilter != row['sede'])
        return 0;
    if(nombreFilter != '' && nombreFilter != row['nombre'])
        return 0;
    return 1;
}
