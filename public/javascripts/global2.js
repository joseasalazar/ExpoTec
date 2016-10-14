// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

    cuentaStaff();

    // Add Registro Externo button click
    $('#registroExterno').on('click', addExternoUser);

    // Add Registro Asociaciones button click
    $('#registroAsoc').on('click', addAsocUser);

    // Add Registro Staff button click
    $('#registroStaff').on('click', addStaffUser);

    // Add Registro Staff button click
    $('#buscarBoton').on('click', changeClass);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var contenidoContent = '';

    // Empty content string
    var logisticaContent = '';

    // Empty content string
    var expotecContent = '';

    // Empty content string
    var careContent = '';

    // Empty content string
    var desarrolloContent = '';

    // Empty content string
    var comiteContent = '';

    // Empty content string
    var asociacionesContent = '';

    // Empty content string
    var invitadoContent = '';

    // Empty content string
    var proveedoresContent = '';

    // Empty content string
    var prensaContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
        // Stick our user data array into a userlist variable in the global object
        userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            if (this.Puesto === "Asociacion") {
                asociacionesContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                asociacionesContent += '<div class="thumbnail">';
                asociacionesContent += '<div class="caption">';
                asociacionesContent += '<p>' + this.Asociacion + '</p>';
                asociacionesContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    asociacionesContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    asociacionesContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                asociacionesContent += '</div></div></div>';
            }
            else if (this.Puesto === "Externo") {
                if (this.Tipo === "Proveedor Externo" || this.Tipo === "Proveedor de Comida"){
                    proveedoresContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                    proveedoresContent += '<div class="thumbnail">';
                    proveedoresContent += '<div class="caption">';
                    proveedoresContent += '<p>' + this.Tipo + '</p>';
                    proveedoresContent += '<p>' + this.Empresa + '</p>';
                    proveedoresContent += '<h6>' + this.Nombre + '</h6>';
                    if (this.Adentro === 'Dentro') {
                        proveedoresContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                    }
                    else{
                        proveedoresContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                    }
                    proveedoresContent += '</div></div></div>';
                }
                if(this.Tipo === "Prensa"){
                    prensaContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                    prensaContent += '<div class="thumbnail">';
                    prensaContent += '<div class="caption">';
                    prensaContent += '<p>' + this.Empresa + '</p>';
                    prensaContent += '<h6>' + this.Nombre + '</h6>';
                    if (this.Adentro === 'Dentro') {
                        prensaContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                    }
                    else{
                        prensaContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                    }
                    prensaContent += '</div></div></div>';
                    }
                
            }
            else if (this.Puesto == 'Contenido') {
                contenidoContent += '<div class="col-sm-6 col-md-3 col-md-offset-2 border m-x-1 p-x-0 m-b-1">';
                contenidoContent += '<div class="thumbnail">';
                contenidoContent += '<div class="caption">';
                contenidoContent += '<p>' + this.Subarea + '</p>';
                contenidoContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    contenidoContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    contenidoContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                contenidoContent += '</div></div></div>';
            }
            else if (this.Puesto == 'Logistica') {
                logisticaContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                logisticaContent += '<div class="thumbnail">';
                logisticaContent += '<div class="caption">';
                logisticaContent += '<p>' + this.Subarea + '</p>';
                logisticaContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    logisticaContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    logisticaContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                logisticaContent += '</div></div></div>';
            }
            else if (this.Puesto == 'Equipo de Expotec') {
                expotecContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                expotecContent += '<div class="thumbnail">';
                expotecContent += '<div class="caption">';
                expotecContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    expotecContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    expotecContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                expotecContent += '</div></div></div>';
            }
            else if (this.Puesto == 'CARE') {
                careContent += '<div class="col-sm-6 col-md-2 border m-x-1 p-x-0 m-b-1">';
                careContent += '<div class="thumbnail">';
                careContent += '<div class="caption">';
                careContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    careContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    careContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                careContent += '</div></div></div>';
            }
            else if (this.Puesto == 'Comite Electoral') {
                comiteContent += '<div class="col-sm-6 col-md-2 border m-x-1 p-x-0 m-b-1">';
                comiteContent += '<div class="thumbnail">';
                comiteContent += '<div class="caption">';
                comiteContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    comiteContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    comiteContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                comiteContent += '</div></div></div>';
            }
            else if (this.Puesto == 'Desarrollo Estudiantil') {
                desarrolloContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                desarrolloContent += '<div class="thumbnail">';
                desarrolloContent += '<div class="caption">';
                desarrolloContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    desarrolloContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    desarrolloContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                desarrolloContent += '</div></div></div>';
            }
            else if (this.Puesto == 'Invitado Especial') {
                invitadoContent += '<div class="col-sm-6 col-md-3 border m-x-1 p-x-0 m-b-1">';
                invitadoContent += '<div class="thumbnail">';
                invitadoContent += '<div class="caption">';
                invitadoContent += '<h6>' + this.Nombre + '</h6>';
                if (this.Adentro === 'Dentro') {
                    invitadoContent += '<div class="alert alert-success" role="alert">' + this.Adentro + '</div>';
                }
                else{
                    invitadoContent += '<div class="alert alert-danger" role="alert">' + this.Adentro + '</div>';
                }
                invitadoContent += '</div></div></div>';
            }
        });

        // Inject the whole content string into our existing HTML table
        $('#contenido').html(contenidoContent);
        // Inject the whole content string into our existing HTML table
        $('#logistica').html(logisticaContent);
        // Inject the whole content string into our existing HTML table
        $('#expotec').html(expotecContent);
        // Inject the whole content string into our existing HTML table
        $('#care').html(careContent);
        // Inject the whole content string into our existing HTML table
        $('#desarrollo').html(desarrolloContent);
        // Inject the whole content string into our existing HTML table
        $('#comite').html(comiteContent);
        // Inject the whole content string into our existing HTML table
        $('#invitados').html(invitadoContent);
        // Inject the whole content string into our existing HTML table
        $('#asoc').html(asociacionesContent);
        // Inject the whole content string into our existing HTML table
        $('#proveedores').html(proveedoresContent);
        // Inject the whole content string into our existing HTML table
        $('#prensa').html(prensaContent);

        var titCont = 0;
        var titLog = 0;
        var titExp = 0;
        var titCARE = 0;
        var titDE = 0;
        var titCE = 0;
        var titAsoc = 0;
        var titInvi = 0;
        var titProv = 0;
        var titPrensa = 0;
        var tit = 0;

        userListData.forEach( function (arrayItem){
            var x = arrayItem;
            console.log(x.Puesto);
            //tit = tit + 1;
            //console.log(tit);
            if (x.Puesto === "Desarrollo Estudiantil") {
                if (x.Adentro === "Dentro") {
                    titDE = titDE + 1;
                }
            }
            else if (x.Puesto === "Equipo de Expotec") {
                if (x.Adentro === "Dentro") {
                    titExp = titExp + 1;
                }
                
            }
            else if (x.Puesto === "CARE") {
                if (x.Adentro === "Dentro") {
                    titCARE = titCARE + 1;
                }
                
            }
            else if (x.Puesto === "Comite Electoral") {
                if (x.Adentro === "Dentro") {
                    titCE = titCE + 1;
                }
                
            }
            else if (x.Puesto === 'Contenido') {
                if (x.Adentro === "Dentro") {
                    titCont = titCont + 1;
                }
                
            }
            else if (x.Puesto === "Logistica") {
                if (x.Adentro === "Dentro") {
                    titLog = titLog + 1;
                }
                
            }
            else if (x.Puesto === "Asociacion") {
                if (x.Adentro === "Dentro") {
                    titAsoc = titAsoc + 1;
                }
                
            }
            else if (x.Puesto === "Invitado Especial") {
                if (x.Adentro === "Dentro") {
                    titInvi = titInvi + 1;
                }
                
            }
            else if (x.Puesto === "Externo" && arrayItem.Tipo === "Proveedor") {
                if (x.Adentro === "Dentro") {
                    titProv = titProv + 1;
                }
                
            }
            else if (x.Puesto === "Externo" && arrayItem.Tipo === "Prensa") {
                if (x.Adentro === "Dentro") {
                    titPrensa = titPrensa + 1;
                }
                
            }
        });

        // Inject the whole content string into our existing HTML table
        $('#titulocontenido').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Contenido - ' + titCont + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#titulologistica').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Logistica - ' + titLog + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#tituloexpo').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Expotec - ' + titExp + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#titulocare').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> CARE - ' + titCARE + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#titulodesarrollo').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Desarrollo Estudiantil - ' + titDE + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#titulocomite').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Comite Electoral - ' + titCE + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#tituloasoc').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Asociaciones - ' + titAsoc + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#tituloinvitados').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Invitados Especiales - ' + titInvi + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#tituloproveedores').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Proveedores - ' + titProv + '</h1>');
        // Inject the whole content string into our existing HTML table
        $('#tituloprensa').html('<h1 class="display-4 text-xs-center m-y-3 text-muted"> Prensa - ' + titPrensa + '</h1>');
        

    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.Nombre; }).indexOf(thisUserName);

        // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

};


// Add Staff User
function addStaffUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    /*var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });*/

    // Check and make sure errorCount's still at zero
    //if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'nombre': $('#staff-modal fieldset input#name').val(),
            'correo': $('#staff-modal fieldset input#mail').val(),
            'puesto': $('#staff-modal select#job').val(),
            'carrera': $('#staff-modal select#career').val(),
            'semestre': $('#staff-modal select#semester').val(),
            'subarea': $('#staff-modal select#subarea').val(),
            'adentro': "Fuera",
            'entrada': "",
            'salida': ""
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#staff-modal fieldset input').val('');
                $('#staff-modal select').val('-');


                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    /*}
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }*/
};

// Add Asociacion User
function addAsocUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    /*var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });*/

    // Check and make sure errorCount's still at zero
    //if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newAsoc = {
            'puesto': "Asociacion",
            'nombre': $('#asociaciones-modal fieldset input#name').val(),
            'asociacion': $('#asociaciones-modal select#association').val(),
            'tipo': $('#asociaciones-modal select#job').val(),
            'adentro': "Fuera",
            'entrada': "",
            'salida': ""
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newAsoc,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#asociaciones-modal fieldset input').val('');
                $('#asociaciones-modal select').val('-');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    /*}
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }*/
};

// Add Externo User
function addExternoUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    /*var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });*/

    // Check and make sure errorCount's still at zero
    //if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newExt = {
            'puesto': "Externo",
            'nombre': $('#externos-modal fieldset input#name').val(),
            'tipo': $('#externos-modal select#tipo').val(),
            'empresa': $('#externos-modal fieldset input#business').val(),
            'motivo': $('#externos-modal fieldset input#motivo').val(),
            'adentro': "Fuera",
            'entrada': "",
            'salida': ""
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newExt,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#externos-modal fieldset input').val('');
                $('#externos-modal select').val('-');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    /*}
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }*/
};

// Change adentro state
function changeClass(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisName = $('form#buscar input#nombre').val();

    if (thisName === '' || !$("input[name='optionsRadios']").is(':checked')) {
        // If something goes wrong, alert the error message that our service returned
                alert('Favor de llenar todos los campos.');
    }
    else{

        // Get Index of object based on id value
        var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.Nombre; }).indexOf(thisName);

        // Get our User Object
        var thisUserObject = userListData[arrayPosition];

        var checked = $("form#buscar input[name='optionsRadios']:checked").val();

        var entrada = thisUserObject.Entrada;
        entrada += "/ " + new Date().toLocaleTimeString('en-MX');

        var salida = thisUserObject.Salida;
        salida += "/ " + new Date().toLocaleTimeString('en-MX');

        if (checked === "Dentro") {
            // do the AJAX
            $.ajax({
                type: 'PUT',
                url: '/users/updateuser/' + thisUserObject._id,
                data: {"Adentro": checked, "Entrada": entrada},
            }).done(function( response ) {

                // Check for a successful (blank) response
                if (response.msg === '') {
                    $('form#buscar input#nombre').val('');
                    $("form#buscar input:radio").attr("checked", false);
                } 
                else {
                   alert('Error: ' + response.msg);
                }
                // Update the table
                populateTable();
            });
        }
        else if (checked === "Fuera"){

            // do the AJAX
            $.ajax({
                type: 'PUT',
                url: '/users/updateuser/' + thisUserObject._id,
                data: {"Adentro": checked, "Salida": salida},
            }).done(function( response ) {

                // Check for a successful (blank) response
                if (response.msg === '') {
                    $('form#buscar input#nombre').val('');
                    $("form#buscar input:radio").attr("checked", false);
                } 
                else {
                   alert('Error: ' + response.msg);
                }
                // Update the table
                populateTable();
                x = t1 - t0;
                console.log(x);
            });
        }

        
    }

};

// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteuser/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

function cuentaStaff(){

    userListData.forEach( function (arrayItem){
        var x = arrayItem.puesto;
        alert(puesto);
    });


}






