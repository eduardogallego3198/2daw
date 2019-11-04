<?php
    function mayorMenor(...$numeros) {
        $MIN = 9999;
        $MAY = 0;
        foreach($numeros as $n)
            if($n <= $MIN)
                $MIN = $n;
            elseif($n > $MAY)
                $MAY = $n;
        $array = ['mayor' => $MAY, 'menor' => $MIN];
        return $array;
    }
    $res = mayorMenor(2, 7, 9, 4, 15, 3, 4, 5, 60);
    echo "El mayor es $res[mayor] y el menor es $res[menor]"
?>