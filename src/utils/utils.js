
const Cryptr = require('cryptr');
const cryptr = new Cryptr('pmj@axlrdata@2020');

encryptPassword = (password)=>{
  return cryptr.encrypt(password); 
}
decryptedPassword = (encryptedPassword)=>{
  return cryptr.decrypt(encryptedPassword);
}
compareSync = (value1, value2)=>{
  if(value1 == value2) return true
  else false
}


bcryptCompare = (userPassword, hashPassword)=>{
  bcrypt.compare(userPassword, hashPassword)
  .then(function(res) {
      return res
  })
  .catch((resp)=>{
      return false
  })
}

const _copy = (data) => {
  return JSON.parse(JSON.stringify(data));
};

module.exports = {
  decryptedPassword, encryptPassword, compareSync, bcryptCompare,
  _copy
}