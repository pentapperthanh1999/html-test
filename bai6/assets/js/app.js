$(document).ready(function(){
    var $grid =  $('.portfolio-music').isotope({
        //options
    });
    //filter icon
    $('.navbar-nav').on('click', '.nav-item', function(){
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        })
    });
});