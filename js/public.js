$(function(){
    $('.loading1>img').on('load',function(){
        $('.loader').fadeOut(400)
        $('#div-body').css({
            'overflow-y':'auto',
        })
        $('.head-name').slideDown(600)
        console.log('图片加载完成')
    })
    // $('.loading1').hide()
    // console.log('已隐藏')
})