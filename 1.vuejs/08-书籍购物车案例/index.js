const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        data:'2006-9',
        price:85.00,
        count:1
      },{
        id:2,
        name:'《编程艺术》',
        data:'2006-9',
        price:59.00,
        count:1
      },{
        id:3,
        name:'《编程珠玑》',
        data:'2006-9',
        price:39.00,
        count:1
      },{
        id:4,
        name:'《计算机原理》',
        data:'2002-9',
        price:159,
        count:1
      }
    ]
  },
  methods: {
        getFinalPrice(price){
        return '￥'+price.toFixed(2)
        },
    increment(index){
          this.books[index].count++
    },
    decrement(index){
          this.books[index].count--
    },
    removeBtnClick(index){
          this.books.splice(index,1)
    }
  },
  computed:{
      totalPrice(){
        //1.普通for循环
       // let price=0
       // for(let i=0;i<this.books.length;i++){
        //  price+=this.books[i].price*this.books[i].count
        //}
       // return price
      //}
        //2. for(let i in the books)
    //let price=0
    //for(let i in this.books){
     // const book=this.books[i]
     // price+=book.price*book.count
//}
    //return price
        //3.for(let i of this.books)遍历每一项
        //let price=0
       // for(let item of  this.books){
         // price+=item.price*item.count
        //}
       // return price
        //4.高阶函数reduce
        return this.books.reduce(function(prevalue,book){
          return prevalue+book.price*book.count
        },0)
      }
  },
  filters:{
    showPrice(price){
    return '￥'+price.toFixed(2)
  }},


})
