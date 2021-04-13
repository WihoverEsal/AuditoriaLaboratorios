const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();
    connection.connect(function(err){
        if(err) throw err;
        console.log("Conected!");
    });    
    
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM Persona', (err, result) => {
            //console.log(result);
            res.render('form/form', {
                form: result
            });
        });
    });

    app.post('/form', (req, res) => {
        const{ tipo, nombreEspacio, notaTipo, edificio, nivel, numAula, areaResp, capacidadPersonas, notaCapacidad, areaSuf, notaAreaSuf, 
            equipoAud, notaEquipoA, mobiliario, notaMobiliario, internet, notaInternet,
            reglamento, notaReglamento, normas, notaNormas, protocolos, notaProtocolos, orden, notaOrden, limpieza, notaLimpieza, aislamiento, notaAislamiento, generacion, notaGeneracion, accesibilidad, notaAccesibilidad, conectividad, notaConectividad, regaderaSeg, notaRegaderaSeg, lavaOjos, notaLavaOjos, senaletica, notaSenaletica, rutasEvacuacion, notaRutasEvac, sisExtraccion, notaSisExtrac, botiquinPAuxilios, notaBotiquinPA,
            iluminacion, sufIluminacion, notaIluminacion, ventilacion, notaVentilacion, sisHidraulico, sisHidraulicoReq, notaSisHi, sisSanitario, sisSanitarioReq, notaSisSan, sisSismos, sisSismosReq, notaSisAl, sisIncendios, sisIncendiosReq, notaSisIncendio, hidrante, hidranteReq, notaHidrante, extintor, extintorReq, notaExtintor, gases, gasesReq, notaGases, observacion, especificaTipo, especificaArea,
            elaboro, nomEspacio, sufVentilacion} = req.body;
        //var concatenaNotas = notaTipo + "; " + notaCapacidad + "; " + notaAreaSuf;
        var idInfraestructura, idServicio, idPersona;
        var equipStatus = [equipoAud, mobiliario, internet];
        var equipNotas = [notaEquipoA, notaMobiliario, notaInternet];
        var hsStatus = [reglamento, normas, protocolos, orden, limpieza, aislamiento, generacion, accesibilidad, conectividad, regaderaSeg, lavaOjos, senaletica, rutasEvacuacion, sisExtraccion, botiquinPAuxilios];
        var hsNotas = [notaReglamento, notaNormas, notaProtocolos, notaOrden, notaLimpieza, notaAislamiento, notaGeneracion, notaAccesibilidad, notaConectividad, notaRegaderaSeg, notaLavaOjos, notaSenaletica, notaRutasEvac, notaSisExtrac, notaBotiquinPA];
        var k = 0, j = 0;
        var sisStatus = [iluminacion, ventilacion, sisHidraulico, sisSanitario, sisSismos, sisIncendios, hidrante, extintor, gases];
        var sisNotas = [notaIluminacion, notaVentilacion, notaSisHi, notaSisSan, notaSisAl, notaSisIncendio, notaHidrante, notaExtintor, notaGases];
        var sisReq = [sisHidraulicoReq, sisSanitarioReq, sisSismosReq, sisIncendiosReq, hidranteReq, extintorReq, gasesReq];       
                
        //Llenar tabla Infraestructura y Ubicacion
        connection.query('INSERT INTO Infraestructura SET?', {
            infraestructuraTipo: (tipo == "otro") ? especificaTipo : tipo,
            infraestructuraNombre: (nombreEspacio == "") ? nomEspacio : nombreEspacio,
            infraestructuraAreaResp: (areaResp == "otra") ? especificaArea : areaResp,
            infraestructuraCapacidad: capacidadPersonas,
            infraestructuraAreaSuf: areaSuf,
        }, (err, result) => {
            idInfraestructura = result.insertId;            
            //Obtener el id de Persona
            connection.query('SELECT idPersona FROM Persona WHERE personaNombre = ?', [elaboro], (err, result) => {
                //console.log(result[0].idPersona);
                idPersona = result[0].idPersona;
                connection.query('INSERT INTO PersonaInfraestructura SET?',{
                    Persona_idPersona: idPersona,
                    Infraestructura_idInfraestructura: idInfraestructura
                },(err,result) => {
                    console.log(err);
                });
            });           
            
            //Llena tabla ubicacion            
            connection.query('INSERT INTO Ubicacion SET?', {
                ubicacionEdificio: edificio,
                ubicacionNivel: nivel,
                ubicacionNumero: numAula,
                Infraestructura_idInfraestructura: idInfraestructura
            }, (err, result) => {
                console.log(err);
            });

            //Llena tabla NotaInfraestructura
            connection.query('INSERT INTO NotaInfraestructura SET?',{
                notaInfraestructuraNotaTipo: notaTipo,
                notaInfraestructuraNotaCapacidad: notaCapacidad,
                notaInfraestructuraNotaArea: notaAreaSuf,
                Infraestructura_idInfraestructura: idInfraestructura
            },(err,result) => {
                console.log(err);
            });

            //Llena tabla equipamiento
            for(var i = 0 ; i < equipStatus.length ; i++){
                connection.query('INSERT INTO Equipamiento SET?',{
                    TipoEquipamiento_idTipoEquipamiento: (i+1),
                    equipamientoStatus: equipStatus[i],
                    equipamientoNota: equipNotas[i],
                    Infraestructura_idInfraestructura: idInfraestructura
                }, (err, result) => {
                    console.log(err);
                });
            }

            //Llena tabla HigieneSeguridad
            for(var i = 0 ; i < hsStatus.length ; i++){
                connection.query('INSERT INTO HigieneSeguridad SET?',{
                    TipoHS_idTipoHS: (i+1),
                    hsStatus: hsStatus[i],
                    hsNota: hsNotas[i],
                    Infraestructura_idInfraestructura: idInfraestructura
                }, (err, result) => {
                    console.log(err);
                });
            }
            
            //Llena la tabla servicio de tipo Iluminacion
            connection.query('INSERT INTO Servicio SET?',{
                TipoServicio_idTipoServicio: 1,
                Infraestructura_idInfraestructura: idInfraestructura,
                servicioStatus: sisStatus[0],
                servicioNota: sisNotas[0]
            }, (err, result) => {
                idServicio = result.insertId;
                connection.query('INSERT INTO SufiIluminacion SET?',{
                    sufiIluminacionDesc: sufIluminacion,
                    Servicio_idServicio: idServicio
                },(err,result) => {
                    console.log(err);
                });
                console.log(err);
            });
            //Llena la tabla servicio de tipo Ventilacion
            connection.query('INSERT INTO Servicio SET?',{
                TipoServicio_idTipoServicio: 2,
                Infraestructura_idInfraestructura: idInfraestructura,
                servicioStatus: sisStatus[1],
                servicioNota: sisNotas[1]
            },(err, result) => {
                idServicio = result.insertId;
                connection.query('INSERT INTO SufiIluminacion SET?',{
                    sufiIluminacionDesc:sufVentilacion,
                    Servicio_idServicio: idServicio
                }, (err, result) => {
                    console.log(err);
                });
                console.log(err);
            });                        

            //Llena tabla Servicio y ServicioS, k comienza despues del servicio de ventilacion
            for( k = 2; k < sisStatus.length ; k++){
                connection.query('INSERT INTO Servicio SET?',{
                    TipoServicio_idTipoServicio: (k+1),
                    Infraestructura_idInfraestructura: idInfraestructura,
                    servicioStatus: sisStatus[k],
                    servicioNota: sisNotas[k]
                },(err, resultS) => {
                    idServicio = resultS.insertId;
                    connection.query('INSERT INTO ServicioS SET?',{
                        Servicio_idServicio: idServicio,
                        servicioSReqMantenimiento: sisReq[j++]
                    },(err, result) => {
                        console.log(err);
                    });
                });                
            }

            //Lena tabla Observacion
            connection.query('INSERT INTO Observacion SET?',{
                observacionObservacion: observacion,
                Infraestructura_idInfraestructura: idInfraestructura
            }, (err, result) => {
                console.log(err);            
            });

            res.redirect('/');            
        });   
             
    });
}