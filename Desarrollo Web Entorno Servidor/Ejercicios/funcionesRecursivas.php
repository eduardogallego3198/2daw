<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        function recursividaad($a) {
            if($a < 20) {
                echo "$a\n";
                recursividaad($a + 1);
            }
        }

        function factorial($num) {
            if ($num > 0)
                for($i = 1; $i < $num - 1; $i++)
                    $num *= factorial($num - $i);
            return $num;
        }

        // recursividaad(0);
        echo factorial(7);
    ?>
</body>
</html>