module.exports = async (client) => {
    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`${client.user.username}`),
        client.chalk.green(`is ready!`)
    );

    client.rpc("start");
    // Tự động farm khi bot ready
    const farm = require("../../utils/farm.js");
    const channel = client.channels.cache.get(client.config.channelid);
    if (channel) farm(client, { channel });
};
