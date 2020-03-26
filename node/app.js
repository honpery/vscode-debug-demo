const koa = require('koa');

const app = new koa();

app.use(ctx => {
    console.log(111);
});

app.listen(8000, () => console.log('server running at 8000'));