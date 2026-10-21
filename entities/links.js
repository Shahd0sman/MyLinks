const {EntitySchema, JoinColumn}=require('typeorm')
const { number, nullable } = require('zod')
const { describe } = require('zod/v4/core')
const linkSchema=new EntitySchema({
    name:'link',
    tableName:'links',
    columns:{
        id:{
            primary:true,
            generated:true,
            type:Number
        },
        title:{
            type:String,
            nullable:false
        },
        description:{
            type:String,
            nullable:true
        },
        tags:{
            type:String,
            nullable:false
        }

    },
    relations:{
        user:{
            type:'many-to-one',
            target:'user',
            inverseSide:'link',
            JoinColumn:{
                name:'userid'
            },
            nullable:false
        }
    }
})
module.exports=linkSchema