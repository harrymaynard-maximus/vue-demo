import routes from '../../../routes';
import environment from '../../../environments/environment';

class PageStateService {
  constructor() {
    this.pages = [];
    console.log('Init PageStateService.');
  }

  importRoutes() {
    for (let key in routes) {
      this.pages.push(routes[key]);
    }
  }

  setPageIncomplete(path) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });
    page.isComplete = false;
  }

  setPageComplete(path) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });
    console.log(path, this.pages);
    page.isComplete = true;
  }

  isPageComplete(path) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });

    return (page && !!page.isComplete) || environment.bypassRouteGuards;
  }
}

export default new PageStateService();