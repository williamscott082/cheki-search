import Application from './lib';
import HelloController from './HelloController';
import HomeController from './HomeController';

const application = new Application({
    '/hello/{name*}': HelloController,
    '/': HomeController
}, {
// query selector for the element in which
// the controller response should be injected
    target: 'body'
});
application.start();