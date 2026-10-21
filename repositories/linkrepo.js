const db=require('../db')
const link=require('../entities/links')
class linkRepository{
    constructor(){
        this.repository=db.getRepository(link)
    }
    async createLink(data){
      const newlink=this.repository.create(data)
       return await this.repository.save(newlink)
    }
    async getlink(id){
        const find=await this.repository.findOneBy({id})
        return find
    }
    async deletelink(id){
        return await this.repository.delete({id})
    }
    async updatelink(title,description,tags,id){
        const find=await this.repository.findOneBy({id})
        if(!find){
            return `there's no link `
        }
        const updated={...find,title,description,tags}
        return await this.repository.save(updated)
    }
}
module.exports=linkRepository