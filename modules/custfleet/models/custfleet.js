module.exports = (sequelize, Sequelize) => {
  const fleet_customer = sequelize.define(
    "fleet_customer",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_fleet: Sequelize.DataTypes.STRING,
      contact_person: Sequelize.DataTypes.STRING,
      no_telp_cust: Sequelize.DataTypes.STRING,
      total_omzet_14bln: Sequelize.DataTypes.INTEGER,
      point_reward: Sequelize.DataTypes.INTEGER,
      alamat: Sequelize.DataTypes.STRING,
      alamat_dati2: Sequelize.DataTypes.STRING,
      alamat_dati3: Sequelize.DataTypes.STRING,
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return fleet_customer;
};
