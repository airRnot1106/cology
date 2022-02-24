const { Cology } = require('../dist/index');

//Normal Test
Cology.log('debug', 'debug test');
Cology.log('info', 'info test');
Cology.log('success', 'success test');
Cology.log('warn', 'warn test');
Cology.log('error', 'error test');
Cology.log('fatal', 'fatal test');
Cology.log('info', 'hoge', 'fuga', 'piyo');

//Border Test
Cology.setBorder('--------');
Cology.log('info', 'Test:\nGlobal Border Test In Progress');
Cology.push();
Cology.setBorder('<><><><>');
Cology.log('info', 'Test:\nTemporary Border Test In Progress');
Cology.pop();
Cology.log('info', 'Test:\nGlobal Border Test In Progress Again');

//Date Test
Cology.date();

Cology.setBorder('');
Cology.log('success', 'Test Completed');

process.exit(0);
