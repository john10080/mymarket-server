import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Session = sequelize.define('Session', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  uid: {
    type: DataTypes.INTEGER,
  },
  token: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'sessions',
  timestamps: false, // Disable Sequelize's createdAt/updatedAt if you use created_date
  paranoid: false,
});

export default Session;