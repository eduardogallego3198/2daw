<?php
    function verAlumno() {
        $conex = new mysqli('localhost', 'root', 'EduGallego_98', 
                    'prueba');
        $alumno = $conex->query("select * from alumno where 
                    num_matricula = {$_REQUEST['num_matricula']}")
                    ->fetch_row();
?>
<?php if($alumno != null) : ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Formulario SQL</title>
    </head>
    <body>
        <h2>Datos del alumno</h2>
        <p>Número matrícula: <?=$alumno[0]?></p>
        <p>Nombre: <?=$alumno[1]?></p>
        <p>Apellidos: <?=$alumno[2]?></p>
        <p>Teléfono: <?=$alumno[3]?></p>
        <p>Email: <?=$alumno[4]?></p>
        <p>Id curso: <?=$alumno[5]?></p>
        <a href='formularioSQL.php'><button>Volver</button></a>
    </body>
    </html>
<?php endif; } ?>
<?php
    function insertarAlumno() {
        $conex = new mysqli('localhost', 'root', 'EduGallego_98', 
            'prueba');
        $insertar_alumno = $conex->query("insert into alumno values (
            '{$_REQUEST['num_matricula']}', '{$_REQUEST['nombre']}', 
            '{$_REQUEST['apellidos']}', '{$_REQUEST['telefono']}', 
            '{$_REQUEST['email']}', '{$_REQUEST['id_curso']}')");
?>
        <a href='formularioSQL.php'><button>Volver</button></a><br/>
<?php
        if($insertar_alumno != null) {
            $ult_matricula = $conex->query("select num_matricula from 
                alumno where num_matricula = max(num_matricula)");
            if($_REQUEST['num_matricula'] > $ult_matricula)
                echo "Alumno insertado correctamente";
            else
                echo "El número de matrícula ya existe";
        } else
            echo "Fallo al insertar el alumno";
    }

    function borrarAlumno() {
        $conex = new mysqli('localhost', 'root', 'EduGallego_98', 
            'prueba');
        $borrar_alumno = $conex->query("delete from alumno where num_matricula = '{$_REQUEST['num_matricula']}'");
?>
        <a href='formularioSQL.php'><button>Volver</button></a><br/>
<?php
        if($borrar_alumno != null)
            echo "Alumno borrado correctamente";
        else
            echo "Fallo al borrar el alumno";
    }

    function modificarAlumno() {
        $conex = new mysqli('localhost', 'root', 'EduGallego_98', 
            'prueba');
        $consulta = "update alumno set ";
        if($_REQUEST['nombre'] != null)
            $consulta .= "nombre = '{$_REQUEST['nombre']}'";
        if($_REQUEST['apellidos'] != null)
            $consulta .= "apellidos = '{$_REQUEST['apellidos']}'";
        if($_REQUEST['telefono'] != null)
            $consulta .= "telefono = '{$_REQUEST['telefono']}'";
        if($_REQUEST['email'] != null)
            $consulta .= "email = '{$_REQUEST['email']}'";
        if ($_REQUEST['id_curso'] != null)
            $consulta .= "id_curso = '{$_REQUEST['id_curso']}'";
        $consulta .= "where num_matricula = '{$_REQUEST['num_matricula']}'";
        $modificar_alumno = $conex->query($consulta);
?>
        <a href='formularioSQL.php'><button>Volver</button></a><br/>
<?php
        if($modificar_alumno != null)
            echo "Alumno modificado correctamente";
        else
            echo "Fallo al modificar el alumno";
    }

    if(isset($_REQUEST['ver']))
        verAlumno();
    else if(isset($_REQUEST['insertar']))
        insertarAlumno();
    else if(isset($_REQUEST['borrar']))
        borrarAlumno();
    else if (isset($_REQUEST['modificar']))
        modificarAlumno();
?>