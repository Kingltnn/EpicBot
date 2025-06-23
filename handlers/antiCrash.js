module.exports = (client) => {
    process.on("unhandledRejection", (reason, promise) => {
        console.log(
            client.chalk.blue(client.chalk.bold(`[antiCrash]`)),
            client.chalk.white(`>>`),
            client.chalk.magenta(`Unhandled Rejection/Catch`),
            client.chalk.red(reason instanceof Error ? reason.stack : reason)
        );
        // Log thêm thông tin về promise nếu cần
        if (promise && typeof promise === 'object') {
            console.log(
                client.chalk.blue(client.chalk.bold(`[antiCrash]`)),
                client.chalk.white(`>>`),
                client.chalk.yellow(`Promise Details:`),
                client.chalk.red(JSON.stringify(promise, null, 2))
            );
        }
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(
            client.chalk.blue(client.chalk.bold(`[antiCrash]`)),
            client.chalk.white(`>>`),
            client.chalk.magenta(`Uncaught Exception/Catch`),
            client.chalk.red(err.stack || err),
            client.chalk.yellow(`\nOrigin:`, origin)
        );
    });
    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(
            client.chalk.blue(client.chalk.bold(`[antiCrash]`)),
            client.chalk.white(`>>`),
            client.chalk.magenta(`Uncaught Exception Monitor`),
            client.chalk.red(err.stack || err),
            client.chalk.yellow(`\nOrigin:`, origin)
        );
    });
    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`AntiCrash`),
        client.chalk.green(`ready!`)
    );
};
