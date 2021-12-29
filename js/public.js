$(function(){
    console.log(document.images)

    console.log('1')
    $(window).on('load',function(){
        console.log('页面加载完成')
        $('.loader').fadeOut(400)
        alert('加载图隐藏')
        // $('#div-body').css({
        //     'overflow-y':'auto',
        // })
        // console.log('滚动条出现')
        // $('.head-name').slideDown(600)
        // console.log('头部出现')
    })
    console.log('2')

    // $('.loading1').hide()
    // console.log('已隐藏')
})