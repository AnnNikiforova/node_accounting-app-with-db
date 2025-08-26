const { User } = require('../models/User.model');

class UserService {
  getAll = () => User.findAll();
  getById = (id) => User.findByPk(id);
  create = (name) => User.create(name);

  update = async (id, { name }) => {
    await User.update({ name }, { where: { id } });

    return this.getById(id);
  };

  remove = (id) => User.destroy({ where: { id } });
}

module.exports = new UserService();
