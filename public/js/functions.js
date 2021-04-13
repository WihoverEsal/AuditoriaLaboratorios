//import { type } from "os";

document.getElementById('areaResp').focus();
function otroTipo() {
    var selection = document.getElementById('tipo').value;
    //console.log(selection);
    if(selection == "otro"){
        document.getElementById('divEspecificar').style.display='block';
    }else{
            document.getElementById('divEspecificar').style.display='none';
    }
}
function otraArea() {
    var selection = document.getElementById('areaResp').value;    
    if(selection == "otra"){
        document.getElementById('divArea').style.display = 'block';
        document.getElementById('dirOtra').style.display = 'block';
        document.getElementById('cbEspacio').style.display = 'none';
        document.getElementById('sisEspacio').style.display = 'none';
        document.getElementById('matEspacio').style.display = 'none';
        document.getElementById('electronicaEspacio').style.display = "none";
        document.getElementById('energiaEspacio').style.display = 'none';
    }else{
        document.getElementById('divArea').style.display = 'none';
        if(selection == "cb"){
            document.getElementById('cbEspacio').style.display = "block";
            document.getElementById('energiaEspacio').style.display = 'none';
            document.getElementById('sisEspacio').style.display = 'none';
            document.getElementById('matEspacio').style.display = 'none';
            document.getElementById('electronicaEspacio').style.display = 'none';
            document.getElementById('dirOtra').style.display='none';
        }else if(selection == "electronica"){
            document.getElementById('electronicaEspacio').style.display = "block";
            document.getElementById('cbEspacio').style.display = 'none';
            document.getElementById('sisEspacio').style.display = 'none';
            document.getElementById('matEspacio').style.display = 'none';
            document.getElementById('energiaEspacio').style.display = 'none';
            document.getElementById('dirOtra').style.display='none';
        }else if(selection == "sistemas"){
            document.getElementById('sisEspacio').style.display = "block";
            document.getElementById('cbEspacio').style.display = 'none';
            document.getElementById('matEspacio').style.display = 'none';
            document.getElementById('energiaEspacio').style.display = 'none';
            document.getElementById('electronicaEspacio').style.display = "none";
            document.getElementById('dirOtra').style.display='none';
        }else if(selection == "materiales"){
            document.getElementById('matEspacio').style.display = "block";
            document.getElementById('cbEspacio').style.display = 'none';
            document.getElementById('sisEspacio').style.display = 'none';
            document.getElementById('energiaEspacio').style.display = 'none';
            document.getElementById('electronicaEspacio').style.display = "none";
            document.getElementById('dirOtra').style.display='none';
        }else if(selection == "energia"){
            document.getElementById('energiaEspacio').style.display = "block";
            document.getElementById('cbEspacio').style.display = 'none';
            document.getElementById('sisEspacio').style.display = 'none';
            document.getElementById('matEspacio').style.display = 'none';
            document.getElementById('electronicaEspacio').style.display = "none";
            document.getElementById('dirOtra').style.display='none';
        }else if(selection == "direccion"){
            document.getElementById('dirOtra').style.display="block";
            document.getElementById('cbEspacio').style.display = 'none';
            document.getElementById('sisEspacio').style.display = 'none';
            document.getElementById('matEspacio').style.display = 'none';
            document.getElementById('electronicaEspacio').style.display = "none";
            document.getElementById('energiaEspacio').style.display = 'none';
        }
    }
}

function ubicacionCB(){
    var opcion = document.getElementById('cbAulas');
    var selected = opcion.options[opcion.selectedIndex].text;
    document.getElementById('nomEspacio').value = selected;

    if(opcion.value == "aula1"){
        document.getElementById("edificio").value = "G007";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "007";
        
    }else if(opcion.value == "aula2"){
        document.getElementById("edificio").value = "G212";
        document.getElementById("nivel").value = "nivel 2";
        document.getElementById("numAula").value = "212";
  
    }else if(opcion.value == "aula3"){
        document.getElementById("edificio").value = "G104";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "104";
  
    }else if(opcion.value == "aula4"){
        document.getElementById("edificio").value = "G101";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "101";
  
    }else if(opcion.value == "aula5"){
        document.getElementById("edificio").value = "G102";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "102";
  
    }else if(opcion.value == "aula6"){
        document.getElementById("edificio").value = "G105";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "105";
  
    }else if(opcion.value == "aula7"){
        document.getElementById("edificio").value = "G106";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "106";
  
    }else if(opcion.value == "aula8"){
        document.getElementById("edificio").value = "G107";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "107";
  
    }else if(opcion.value == "aula9"){
        document.getElementById("edificio").value = "G108";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "108";
  
    }else if(opcion.value == "aula10"){
        document.getElementById("edificio").value = "G006";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "006";
  
    }else if(opcion.value == "aula11"){
        document.getElementById("edificio").value = "G004";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "004";
  
    }else if(opcion.value == "aula12"){
        document.getElementById("edificio").value = "G003";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "003";
  
    }
}

function ubicacionElectronica(){
    var opcion = document.getElementById('electronicaAulas');
    var selected = opcion.options[opcion.selectedIndex].text;
    document.getElementById('nomEspacio').value = selected;

    if(opcion.value == "aula1"){
        document.getElementById("edificio").value = "G302-A";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "302-A";
       
    }else if(opcion.value == "aula2"){
        document.getElementById("edificio").value = "G302-B";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "302-B";
  
    }else if(opcion.value == "aula3"){
        document.getElementById("edificio").value = "F302";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "302";
  
    }else if(opcion.value == "aula4"){
        document.getElementById("edificio").value = "G304, G306";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "304-306";
  
    }else if(opcion.value == "aula5"){
        document.getElementById("edificio").value = "F301";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "301";
  
    }else if(opcion.value == "aula6"){
        document.getElementById("edificio").value = "G308";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "308";
  
    }else if(opcion.value == "aula7"){
        document.getElementById("edificio").value = "F303";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "303";
  
    }else if(opcion.value == "aula8"){
        document.getElementById("edificio").value = "F307";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "307";
  
    }else if(opcion.value == "aula9"){
        document.getElementById("edificio").value = "F306";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "306";
  
    }
}

function ubicacionSistemas(){
    var opcion = document.getElementById('sisAulas');
    var selected = opcion.options[opcion.selectedIndex].text;
    document.getElementById('nomEspacio').value = selected;
    if(opcion.value == "aula1"){
        document.getElementById("edificio").value = "G206";
        document.getElementById("nivel").value = "nivel 2";
        document.getElementById("numAula").value = "206";
       
    }else if(opcion.value == "aula2"){
        document.getElementById("edificio").value = "G208";
        document.getElementById("nivel").value = "nivel 2";
        document.getElementById("numAula").value = "208";
  
    }else if(opcion.value == "aula3"){
        document.getElementById("edificio").value = "T";
        document.getElementById("nivel").value = "nivel 2";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula4"){
        document.getElementById("edificio").value = "T";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula5"){
        document.getElementById("edificio").value = "E306";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "306";
  
    }else if(opcion.value == "aula6"){
        document.getElementById("edificio").value = "W";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula7"){
        document.getElementById("edificio").value = "E309";
        document.getElementById("nivel").value = "nivel 3";
        document.getElementById("numAula").value = "309";
  
    }
}

function ubicacionMat(){
    var opcion = document.getElementById('matAulas');
    var selected = opcion.options[opcion.selectedIndex].text;
    document.getElementById('nomEspacio').value = selected;
    if(opcion.value == "aula1"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
       
    }else if(opcion.value == "aula2"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula3"){
        document.getElementById("edificio").value = "P4";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula4"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula5"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula6"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula7"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula8"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula9"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula10"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula11"){
        document.getElementById("edificio").value = "P 1er PISO, LMET";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula12"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula13"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula14"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula15"){
        document.getElementById("edificio").value = "P3,LMAT";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula16"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula17"){
        document.getElementById("edificio").value = "W";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula18"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula19"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }
}

function ubicacionEnergia(){
    var opcion = document.getElementById('energiaAulas');
    var selected = opcion.options[opcion.selectedIndex].text;
    document.getElementById('nomEspacio').value = selected;
    if(opcion.value == "aula1"){
        document.getElementById("edificio").value = "P2";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
       
    }else if(opcion.value == "aula2"){
        document.getElementById("edificio").value = "P2 MEZZANINE";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula3"){
        document.getElementById("edificio").value = "M ANEXO";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula4"){
        document.getElementById("edificio").value = "P";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula5"){
        document.getElementById("edificio").value = "P2 MEZZANINE";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula6"){
        document.getElementById("edificio").value = "P2";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula7"){
        document.getElementById("edificio").value = "P2";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula8"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula9"){
        document.getElementById("edificio").value = "P3";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula10"){
        document.getElementById("edificio").value = "P2";
        document.getElementById("nivel").value = "pb";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula11"){
        document.getElementById("edificio").value = "O";
        document.getElementById("nivel").value = "nivel 1";
        document.getElementById("numAula").value = "SN";
  
    }else if(opcion.value == "aula12"){
        document.getElementById("edificio").value = "M,INCINERADOR";
        document.getElementById("nivel").value = "pb y nivel 1";
        document.getElementById("numAula").value = "003";
    }
}

var count_click=0;

//var lista = document.getElementById("lista");
var container= document.getElementById('container');
function inputsDinamicos() {    
    var elemInput= document.createElement('input');
    //var elemLi= document.createElement('li');
    elemInput.type = "text";
    elemInput.setAttribute("id", "acom"+(count_click));
    elemInput.setAttribute("class", "form-control");
    container.appendChild(elemInput);
    //elemLi.appendChild(elemInput);
    //lista.appendChild(elemLi);
}

window.onload = function(){
    var btnAdd = document.getElementById('btnAdd');
    count_click++;    
    btnAdd.onclick = inputsDinamicos;
}