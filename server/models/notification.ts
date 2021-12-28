import * as Sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { ModelStatic } from './types';
import { SubscriptionAttributes } from './subscription';

export interface NotificationAttributes {
  notification_data: string;
  chain_id: string;
  category_id: string;
  id?: number;
  chain_event_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface NotificationInstance
extends Model<NotificationAttributes>, NotificationAttributes {}

export type NotificationModelStatic = ModelStatic<NotificationInstance>

export default (
  sequelize: Sequelize.Sequelize,
  dataTypes: typeof DataTypes,
): NotificationModelStatic => {
  const Notification = <NotificationModelStatic>sequelize.define('Notification', {
    id: { type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    notification_data: { type: dataTypes.TEXT, allowNull: false },
    chain_event_id: { type: dataTypes.INTEGER, allowNull: true },
    chain_id: { type: dataTypes.STRING, allowNull: false},
    category_id: { type: dataTypes.STRING, allowNull: false}
  }, {
    tableName: 'Notifications',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      { fields: ['subscription_id'] },
    ],
  });

  Notification.associate = (models) => {
    models.Notification.hasMany(models.NotificationsRead)
    models.Notification.belongsTo(models.ChainEvent, { foreignKey: 'chain_event_id', targetKey: 'id' });
    models.Notification.belongsTo(models.NotificationCategory, { foreignKey: 'category_id', targetKey: 'name'});
    models.Notification.belongsTo(models.Chain, {foreignKey: 'chain_id', targetKey: 'id'});
  };

  return Notification;
};
