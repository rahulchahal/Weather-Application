import React from 'react';
import './adduser.css';


class  Adduser extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            userList:[
                {
                    id: 101,
                    name: 'abc',
                    num: 123
                },
                {
                    id: 102,
                    name: 'def',
                    num: 321
                }
            ]
        }

        }
        
   deletehandler(userId){
       let list=[...this.state.userList];
       let userIndex=-1;
       for(let i=0;i<list.length;i++){
           if(list[i].id==userId){
               userIndex=i;
               break;
           }
       }
       list.splice(userIndex,1);
       this.setState({userList:list});
   }
     addUser(e){
         e.preventDefault();
         let user={
             id:0,
             name:'',
             num:'',
         }

         if(this.state.userList.length>0){
             user.id=this.state.userList[this.state.userList.length-1]+1;
         }
         else{
             user.id=101;
         }
        user.name=e.target.nm.value;
        user.num=e.target.num.value;
       let list=[...this.state.userList];

        list.push(user);
        this.setState({userList:list});
     }



    render(){
        return(
            <div>
                <div className="adduser">
                   <form id='add-user' onSubmit={this.addUser.bind(this)}>
                       Name:<input type="text" name='nm'/>
                       Number:<input type="text" name='num'/>
                       <input type="submit" value='add' className="Addbtn"/>
                       </form>
                       <div className="user-heading">
                   <span>Name</span><span>Number</span>
              
               <div>
                   {
                       this.state.userList.map(sub =>{

                          return(
                            <div key={sub.id} className="userlist">
                               <span>{sub.name}</span>
                               
                               <span>{sub.num}</span>
                               <button onClick={ this.deletehandler.bind(this,sub.id)}> Delete</button>
                               </div>
                          );
                       })
                   }
                    </div>
               </div>
               </div>
            </div>
        )
    }
       
}
export default Adduser;