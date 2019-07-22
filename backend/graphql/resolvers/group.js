// const Url = require("../../models/url");                     
const Group = require("../../models/group");
const { transformGroup } = require('./merge');

module.exports = {
    createGroup: async args => {
        try {
            const group = new Group({
                name: args.groupInput.name,
                url: args.groupInput.url
            });
            const res = await group.save();
            return transformGroup(res)
        } catch (err) {
            throw err;
        }
    },
    incGroupCounter: async args => {
        try {
            console.log(args.incGroupInput.id)
            let group = await Group.findByIdAndUpdate({_id:args.incGroupInput.id},{$inc: { visitCounter: 1 }},{new:true});
            return transformGroup(group)
        } catch (err) {
            throw err;
        }
    },
    group: async args => {
        try {
            const res = await Group.findById(args.id);
            return transformGroup(res)
        } catch (err) {
            throw err;                                                                                                                                                                                                                                                
        }
    },
    addUrlInGroup: async args => {
        try {
            const res = await Group.findOneAndUpdate({_id:args.addUrlInGroupInput.groupId},{ $addToSet: { childUrls: args.addUrlInGroupInput.urlId } },{new:true});
            return transformGroup(res)
        } catch (err) {
            throw err;
        }
    },
    groups: async () => {
        try {
            const res = await Group.find();
            return res.map(group => {
                return transformGroup(group);
              }); 
        } catch (err) {
            throw err;
        }
    }
};