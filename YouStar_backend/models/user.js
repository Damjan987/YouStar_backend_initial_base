const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname:       { type: String,  required: true  },
  lastname:        { type: String,  required: true  },
  username:        { type: String,  required: true  },
  email:           { type: String,  required: true  },
  birthday:        { type: Date,    required: false  },
  gender:          { type: String,  required: true  },
  password:        { type: String,  required: true  },
  isAccountPublic: { type: Boolean, default:  false },
  profileImageUrl: { type: String,  required: false },
  status:          { type: String,  required: false },
  stars:           { type: Number,  default:  0 },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  savedPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  follows: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('User', userSchema);
