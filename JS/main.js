// Incluye jQuery
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
    / Selecciona todos los elementos de la galería
    var $items = $('.productItem');
    // Selecciona el primer elemento de la galería
    var $current = $items.first();
    // Asigna el evento click al botón anterior
    $('#prev-btn').click(function() {
        // Oculta el elemento actual
        $current.hide();
        // Si el elemento actual es el primero, selecciona el último
        if ($current.is(':first-child')) {
            $current = $items.last();
        } else {
            // Si no, selecciona el elemento anterior
            $current = $current.prev();
        }
        // Muestra el elemento seleccionado
        $current.show();
    });
    // Asigna el evento click al botón siguiente
    $('#next-btn').click(function() {
        // Oculta el elemento actual
        $current.hide();
        // Si el elemento actual es el último, se
