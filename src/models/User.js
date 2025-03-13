// src/models/User.js
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static initialize(sequelize) {
    User.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
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
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        hooks: {
          beforeUpdate: (user) => {
            user.updated_at = new Date();
          },
        },
      }
    );
  }

  // Define associations here (if needed)
  static associate(models) {
    // Example: this.hasMany(models.Order);
  }
}

export default User;