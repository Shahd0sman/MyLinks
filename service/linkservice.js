const linkrepo=require('../repositories/linkrepo')
class linkService{
    constructor(){
        this.repo=new linkrepo()
    }
    createlink(data){
       return this.repo.createLink(data)
    }
    delete(id){
     return this.repo.deletelink(id)
    }
    getlink(id){
       return this.repo.getlink(id)
    }
    update(title,description,tags,id){
        return this.repo.updatelink(title,description,tags,id)
    }
}
module.exports=linkService