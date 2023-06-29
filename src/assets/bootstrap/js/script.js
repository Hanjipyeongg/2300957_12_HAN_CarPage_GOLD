// event pada saat link
$('.page-scroll').on('click' , function() {

// ambil isi href
    var tujuan = $(this).attr ('href')
// tangkap elemen ybs
    var elemenTujuan = $(tujuan);
// Pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top
    })


});