var getters = {
  usersID(state){
    let temp=[];
    state.users.forEach(item=>{
      temp.push(item.uid)
    });
    return temp;
  },
  


}

export default getters
