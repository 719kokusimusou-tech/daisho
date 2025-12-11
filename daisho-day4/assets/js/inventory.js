const items=[
    {id:"D001",name:"オレンジジュース",price:150,stock:20,minStock:5,zyoukyou:在庫たっぷり},
    {id:"D002",name:"コーラ",price:150,stock:12,minStock:5,zyoukyou:在庫たっぷり},
    {id:"D003",name:"お茶",price:120,stock:30,minStock:10,zyoukyou:在庫たっぷり},
    {id:"D004",name:"カルピス",price:150,stock:15,minStock:10,zyoukyou:在庫たっぷり}
    
];
const tbody=document.getElementById("item-list");
//const sum=document.getElementById("item-sum")
function render(){
    tbody.innerHTML="";
    //sum.innerHTML=""
    items.forEach(item=>{
        const tr=document.createElement("tr");
        if(item.stock<item.minStock){
            tr.classList.add("low-stock");
        }
        tr.innerHTML=`
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.stock}</td>
            <td>
                <button onclick="changeStock('${item.id}',1)">+</button>
                <button onclick="changeStock('${item.id}',-1)">-</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    //items.forEach(item=>{
    //    const h4=document.createElement("h4");
    //    sum=item.price*item.stock+sum;
   //     sum.appendChild(h4);
   // });
}
//function changezyoukyou(id){
//    const item=items.find(i=>i.id===id);
//    if(!item){
//        return;
//    }
//    if(item.stock<=item.stock*2){
//        item.zyoukyou="在庫たっぷり"
//    }
 //   if(item.stock<item.stock*2){
 //       item.zyoukyou="在庫少なめ"
 //   }
 //   if(item.stock<=0){
 //       item.zyoukyou="売り切れ"
  //  }
 //   render();
//}
function changeStock(id,diff){
    const item=items.find(i=>i.id===id);
    if(!item){
        return;
    }
    item.stock+=diff;
    if(item.stock<0){
        item.stock=0;
    }
    render();
}
render();