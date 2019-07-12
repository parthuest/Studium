// const DataLoader = require("dataloader");
const Group = require("../../models/group");
const Url = require("../../models/url");

const url = async urlId => {
    try {
      const url = await Url.findById(urlId);
      return {
        ...url._doc,
        id: url.id,
      };
    } catch (err) {
      throw err;
    }
  };
  
const urls = async urlIds => {
  try {
    const urls = await Url.find({ _id: { $in: urlIds } });
    return urls.map(url => {
      return transformUrl(url);
    });
  } catch (err) {
    throw err;
  }
};

const group = async groupId => {
    try {
      const group = await Group.findById(groupId);
      return {
        ...group._doc,
        id: group.id,
      };
    } catch (err) {
      throw err;
    }
  };
  
const groups = async groupIds => {
  try {
    const groups = await Group.find({ _id: { $in: groupIds } });
    return groups.map(group => {
      return transformGroup(group);
    });
  } catch (err) {
    throw err;
  }
};
// =============================================================================================
const transformUrl = url => {
    return {
        ...url._doc,
        id: url.id,
        parent: group.bind(this, url._doc.parent),
        // createdCourses: courses.bind(this, url._doc.createdCourses),
        // enrolledCourses: courses.bind(this, url._doc.enrolledCourses),
        // wailistedCourses: courses.bind(this, url._doc.wailistedCourses),
    };
};

const transformGroup = group => {
    return {
        ...group._doc,
        id: group.id,
        childUrls: urls.bind(this, group._doc.childUrls),
        // enrolledStudents: users.bind(this, group._doc.enrolledStudents),
        // waitlistedStudents: users.bind(this, group._doc.waitlistedStudents),
    };
};

exports.transformUrl = transformUrl;
exports.transformGroup = transformGroup;