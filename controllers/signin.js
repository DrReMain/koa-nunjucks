module.exports = {
    'POST /signin': async (ctx, next) => {
        let
            username = ctx.request.body.username || '',
            password = ctx.request.body.password || '';

        if (username === 'admin' && password === '123456') {
            console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: username
            });
        } else {
            console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            })
        }
    }
}