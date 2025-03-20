var currentYear = document.getElementById('currentYear');
currentYear.innerHTML = new Date().getFullYear();

var rows = document.querySelectorAll('.row');

rows.forEach(function (row) {
    var cols = row.querySelectorAll('.col-md-6');
    var maxHeight = 0;
    cols.forEach(function (col) {
        var height = col.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    cols.forEach(function (col) {
        col.style.height = maxHeight + 'px';
    });
});