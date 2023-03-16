import compdata from './data.json' assert { type:'json'};


let result="";
         for(let i=0;i<10;i++)
         {
             result +=`<tr>
             <td >${compdata[i].id}</td>
             <td>${compdata[i].name}</td>
             <td>${compdata[i].email}</td>
              </tr>`;
            }
        
            document.getElementById("body").innerHTML=result;
         
        

let buttons=Array.from(document.getElementsByClassName(" btn btn-primary btn-sm"));
var a=0;
  a= buttons.forEach((item)=>{ 
    item.addEventListener('click',(e)=>{

        let state= {
        'queryset':compdata,
        'page':e.target.value,
        'row':10, 
    }
        table();
        function pagination(queryset,page,row){
            // console.log(queryset,page,row)
            
            let start=(page-1)*row;
            let end=start+1*row;
            let trimeddata=queryset.slice(start,end)
            let pages=Math.ceil(queryset.length/row)
            // console.log(trimeddata,pages)
            return {
                'queryset':trimeddata,
                'pages':pages
            }
        }    
        
        function table(){
        
        let data=pagination(state.queryset,state.page,state.row)
        
         let mylist=data.queryset;
          console.log(mylist);
            let result="";
         for(let i of mylist)
         {
             result +=`<tr>
             <td >${i.id}</td>
             <td>${i.name}</td>
             <td>${i.email}</td>
              </tr>`;
            }
        
            document.getElementById("body").innerHTML=result;
         
        }
        
            })
        })
      


 


