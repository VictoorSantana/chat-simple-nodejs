
const userRepository = require('../user/user.repository');
const authRepository = require('./auth.repository');
const fileRepository = require('../file/file.repository');
const { onlyNumbers } = require('../../config/filter');
const HttpError = require('../../config/error');
const jwt = require('jsonwebtoken');
const { pathTo } = require('../../config/storage');

module.exports = {
    findUser: async function (id) {
        authRepository.belongsTo(userRepository, { foreignKey: 'id_user' });

        console.log(id);
        let exclude = ['password'];
        return await authRepository
            .findOne({
                where: { id_user: onlyNumbers(id) },
                attributes: { exclude },
                include: [
                    { model: userRepository, as: 'user' },
                ]
            });
    },

    login: async function (value) {
        authRepository.belongsTo(userRepository, { foreignKey: 'id_user' });
        let exclude = ['password', 'id_user'];
        console.log('login 01');

        const userReponse = await authRepository
            .findOne({
                where: { username: value.username, password: value.password },
                attributes: { exclude },
                include: [
                    { model: userRepository, as: 'user' },
                ]
            });

        const userAuth = JSON.parse(JSON.stringify(userReponse));

        const reponseFile = await fileRepository
            .findOne({
                where: { id: userAuth.user.id_photo }
            });
        const filed = JSON.parse(JSON.stringify(reponseFile));
        const urlPhoto = pathTo(filed.type, filed.hash, filed.extension);

        if (userAuth) {
            const token = jwt.sign({ user: userAuth.user }, process.env.SERVER_KEY, { expiresIn: process.env.SERVER_EXPIRES });



            return {
                token: token,
                user: {...userAuth.user, url_photo: urlPhoto}
            };
        } else {
            throw new HttpError('Usuário ou senha não foi encontrado', 400);
        }
    }



}