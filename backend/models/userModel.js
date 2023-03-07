const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (req) {
  const { email, password } = req.body;

  //   Email already exists
  //   const isExist = await this.findOne({ email });
  //   if (isExist) {
  //     throw Error("Bunday email mavjud");
  //   }

  // Yangi user yaratish
  //   const newUser = await this.create({
  //     ...req.body,
  //   });

  //   console.log(newUser);

  //   Email va passwordlar talabga javob beradimi tekshirish
  if (!validator.isEmail(email)) {
    throw Error("Email formati noto'g'ri");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password mustahkam emas");
  }

  //   Email mavjud bo'lsa error qaytarish
  const isExist = await this.findOne({ email });
  if (isExist) {
    throw Error("Bunday email mavjud");
  }

  //   Passwordni shifrlash
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  //   Yangi user yaratish
  const newUser = await this.create({
    ...req.body,
    password: encryptedPassword,
  });

  return newUser;
};

userSchema.statics.login = async function (req) {
  const { email, password } = req.body;
  console.log(email, password);

  // Email mavjudligini tekshirish
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email yoki password noto'g'ri");
  }

  // Email mabjud bo'lsa passwordni solishtirish
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Email yoki password noto'g'ri");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
