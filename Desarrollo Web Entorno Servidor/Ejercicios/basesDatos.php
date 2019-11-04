<?php
    $conex = new mysqli('localhost', 'root', 'EduGallego_98', 'prueba');
    $alumnos = $conex->query('select * from alumno');
    echo "<table><tr>";
    foreach ($alumnos as $alumno)
        $alumnoAct = $alumno;
        foreach ($alumnoAct as $clave => $valor) {
            $claveCod = mb_convert_encoding($clave, "UTF-8", "ISO-8859-1");
            echo "<th>$claveCod</th>";
        }
    echo "</tr>";
    foreach ($alumnos as $alumno) {
        echo "<tr>";
        foreach ($alumno as $clave => $valor) {
            $valorCod = mb_convert_encoding($valor, "UTF-8", "ISO-8859-1");
            echo "<td>$valorCod</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
?>