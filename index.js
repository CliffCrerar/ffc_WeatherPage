const sp = require('child_process').spawn;
const devServer = () => sp('node',['dev-server'],{stdio: 'inherit', cwd: './'})
const prodServer = () => sp('node',['dev-server'],{stdio: 'inherit', cwd: './'})

process.argv[2]==="--build" ? devServer(): prodServer();

