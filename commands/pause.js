module.exports = {
    config: {
        name: "2",
        aliases: ["4"],
    },
    run: async (client, message, args) => {
        if (client.global.paused) {
            await message.delete();
            await message.channel.send({
                content: "Bot is already paused!!!",
            });
        } else {
            client.global.paused = true;
            client.rpc("update");
            await message.delete();
            await message.channel.send({ content: "Paused :)" });
            // process.exit(0);
        }
    },
};
