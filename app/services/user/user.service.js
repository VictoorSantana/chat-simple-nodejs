
const userRepository = require('./user.repository');
const authRepository = require('../auth/auth.repository');
const fileRepository = require('../file/file.repository');
const storage = require('../../config/storage');

const { onlyNumbers, resume } = require('../../config/filter');
const { pathTo } = require('../../config/storage');

module.exports = {
    find: async function (query, user) {
        let exclude = [];
        let include = [];

        const { paginate } = resume(query, []);

    
        return await userRepository
            .findAndCountAll({
                ...paginate,
                attributes: { exclude, include }                
            });
    },

    findOne: async function (id) {
        // let exclude = [];
        const response = await userRepository
            .findOne({
                where: { id: onlyNumbers(id) }
            });

        let clone = JSON.parse(JSON.stringify(response));
        const reponseFile = await fileRepository
            .findOne({
                where: { id: clone.id_photo }
            });
        const filed = JSON.parse(JSON.stringify(reponseFile));
        clone['url_photo'] = pathTo(filed.type, filed.hash, filed.extension);

        return clone;
    },

    create: async function (value, files) {
        const existUser = await userRepository.findOne({ where: { email: value.email } });
        const existAuth = await authRepository.findOne({ where: { username: value.username } });


        if (existUser) {
            throw new Error('Email já está em uso!');
        }
        if (existAuth) {
            throw new Error('Nome de usuário já está em uso!');
        }

        if (files) {
            if (!files['stream']) {
                throw new Error('Não foi encontrado arquivo dentro do "stream".');
            }
        } else {
            throw new Error('Adicione um arquivo na propriedade "stream" antes de enviar.');
        }

        const filed = await this.createFile(files, 2);

        const user = await userRepository
            .create({ ...value, id_photo: filed.id });

        const auth = await authRepository
            .create({
                username: value.username,
                password: value.password,
                id_user: user.id,
            });

        authRepository.belongsTo(userRepository, { foreignKey: 'id_user' });
        let exclude = ['password', 'id_user'];
        return await authRepository
            .findOne({
                where: { id: auth.id },
                attributes: { exclude },
                include: [
                    { model: userRepository, as: 'user' },
                ]
            });
    },

    createFile: async function (files, parentFolder = 2) {
        const filesResult = storage.several([files['stream']]);
        const file = filesResult[0];
        const fileResponse = await fileRepository
            .create({
                id_folder_parent: parentFolder,
                ...file,
            });

        const fileClone = JSON.parse(JSON.stringify(fileResponse));

        return fileClone;
    },

    update: async function (id, value, files) {

        if (files) {
            if (!files['stream']) {
                throw new Error('Não foi encontrado arquivo dentro do "stream".');
            }
        } else {
            throw new Error('Adicione um arquivo na propriedade "stream" antes de enviar.');
        }

        const filed = await this.createFile(files, 2);

        await userRepository
            .update({ value, id_photo: filed.id }, {
                where: { id: onlyNumbers(id) }
            });
        return await this.findOne(id);
    },

    delete: async function (id) {
        return await userRepository
            .destroy({
                where: { id: onlyNumbers(id) }
            });
    }
}