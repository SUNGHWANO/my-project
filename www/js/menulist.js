var mySwiper = new Swiper('.swiper-container',{
//Enable Scrollbar
scrollbar: {
container :'.swiper-scrollbar',
hide: false,
draggable: true,
watchActiveIndex: true,
onScrollbarDrag: function(){
console.log('Dragging')
}
}
})
