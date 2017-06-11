const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;


// Create User Schema

const UserSchema = new Schema({
  email : {type:Strinng,unquie:true,lowercase:true},
  password : {type:String},

  profile:{
    name : {type:String,default:''},
    picture:{type:String,default:""}
  },

  address : {type:String},
  history:[{
    date:Date,
    paid:{type:Number,default:0}
  }]

});



// Hash the password even before save it to database
UserSchema.pre('save',function(next){
  const user = this;
  if(!user.isModified(password)) return next();
  bcrypt.getSalt(10,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});


//compare the password that user type in
UserSchema.methods.comparePassword = function(password){
  bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);
