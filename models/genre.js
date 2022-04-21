module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genre", {
        name: {
            type: Sequelize.STRING
        }
    });

    Genre.sync().then(() => {
        console.log('Genre table created');
    }).finally(() => {
        // sequelize.close();
    })
    return Genre;
}
