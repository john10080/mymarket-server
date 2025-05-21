import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const User = sequelize.define('User', {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  birth_date: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  role: {
    type: DataTypes.INTEGER, // Use INTEGER to match GraphQL Int!
    allowNull: false,
    defaultValue: 0, // 0: customer, 1: seller, 2: admin (example)
  },
  last_login: {
    type: DataTypes.STRING, // Or DataTypes.DATE if you want date objects
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATE, // Or DataTypes.DATE if you want date objects
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false, // Disable Sequelize's createdAt/updatedAt if you use created_date
  paranoid: false,
});

export default User;