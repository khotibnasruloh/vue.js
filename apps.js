new Vue({
    el: '#app',
    data:{
        bil1:10,
        bil2:2
    },
    computed:{
        jumlah:function(){
            return this.bil1 + this.bil2
        },
        kurang:function(){
            return this.bil1 - this.bil2
        },
        kali:function(){
            return this.bil1 * this.bil2
        },
        bagi:function(){
            return this.bil1 / this.bil2
        }
    }
});