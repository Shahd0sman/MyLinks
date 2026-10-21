const db=require('../db')
const user=require('../entities/users')
class userRepository{
    constructor(){
        this.repository=db.getRepository(user)
    }
    async createUser(data){
        const newuser=this.repository.create(data)
        return this.repository.save(newuser)
    }
    async updateuser(username,email,id,password){
        const find=this.repository.findOneBy(id)
        if(!find){
            return `there's no user`
        }
        const update={...find,username,email,password}
        return this.repository.save(update)
    }
    async deleteuser(id){
        return await this.repository.delete({id})
    }
}
module.exports=userRepository