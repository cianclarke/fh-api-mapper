module.exports = function(req, res){
    if (!process.env.FH_MONGODB_CONN_URL){
      return res.render('upgrade.html', {});
    }
    return res.render('index.html', { guid : process.env.FH_INSTANCE || 'Unknown service GUID' });
};
