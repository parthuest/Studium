const Url = require("../../models/url");
const Group = require("../../models/group");
const { transformUrl } = require('./merge');

module.exports = {
    createUrl: async args => {
        try {
            const url = new Url({
                name: args.urlInput.name,
                url: args.urlInput.url,
                parent: args.urlInput.parent
            });
            const res = await url.save();
            const res1 = await Group.findOneAndUpdate({_id:args.urlInput.parent},{ $addToSet: { childUrls: res.id } },{new:true});
            return transformUrl(res)
        } catch (err) {
            throw err;
        }
    },
    incUrlCounter: async args => {
        try {
            console.log(args.id)
            let url = await Url.findByIdAndUpdate({_id:args.id},{$inc: { visitCounter: 1 }},{new:true});
            return transformUrl(url)
        } catch (err) {
            throw err;
        }
    },
    url: async args => {
        try {
            const res = await Url.findById(args.id);
            return transformUrl(res)
        } catch (err) {
            throw err;
        }
    },
    urls: async () => {
        try {
            const res = await Url.find();
            return res.map(url => {
                return transformUrl(url);
              }); 
        } catch (err) {
            throw err;
        }
    },
    limitedUrls: async () => {
        try {
            const res = await Url.find({ visitCounter: { $gt: 4 } });
            return res.map(url => {
                return transformUrl(url);
              }); 
        } catch (err) {
            throw err;
        }
    },
    randomUrl: async (args) => {
        try {
            const res = await Url.find({ visitCounter: { $lt: 5 }, parent:args.groupId});
            if(res.length < 1){
                throw new Error('All our service centers are busy, please try again later');
            }else{
                randomIndex = Math.floor(Math.random() * Math.floor(res.length));
                let url = await Url.findByIdAndUpdate({_id:res[randomIndex].id},{$inc: { visitCounter: 1 }},{new:true});
                let group = await Group.findByIdAndUpdate({_id:args.groupId},{$inc: { visitCounter: 1 }},{new:true});
                return transformUrl(url);
            }
        } catch (err) {
            throw err;
        }
    },
};