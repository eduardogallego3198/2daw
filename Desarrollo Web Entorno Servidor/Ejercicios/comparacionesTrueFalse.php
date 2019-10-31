<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Comparaciones TRUE - FALSE</title>
</head>
<body>
    <?php
        $valores = [TRUE, FALSE, 1, 0, -1, "1", "0", "-1", NULL, [], "php", ""];
        $valoresString = ["TRUE", "FALSE", 1, 0, -1, "\"1\"", "\"0\"", "\"-1\"", "NULL", "array()", "\"php\"", "\"\""];
        print ("<h3>Comparaciones flexibles</h3><table><tr><td></td>");
        foreach ($valoresString as $valor)
            print ("<th>$valor</th>");
        print ("</tr>");
        for ($i = 0; $i < count($valores); $i++) {
            print ("<tr><td>$valoresString[$i]</td>");
            foreach ($valores as $valor)
                if ($valores[$i] == $valor)
                    print ("<td>TRUE</td>");
                else
                    print ("<td>FALSE</td>");
            print ("</tr>");
        }
        print ("</table>");
    ?>
</body>
</html>