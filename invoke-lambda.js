module.exports.handler = (event, context, callback) => {
    callback(null, `${event.msg} (from Invoked function)`);
};
