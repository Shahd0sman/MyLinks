const userRepo=require('../repositories/userrepo')
class userService{
    constructor(){
        this.repo=new userRepo()
    }
    create(data){
        return this.repo.createUser(data)
    }
    update(username,email,id,password){
        return this.repo.updateuser(username,email,id,password)
    }
    delete(id){
        return this.repo.deleteuser(id)
    }
}
module.exports=userService