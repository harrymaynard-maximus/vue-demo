import { routes, Route } from '../../../routes';
import environment from '../../../environments/environment';

class PageStateService {
  private pages: Array<Route> = [];

  constructor() {
    this.pages = [];
    console.log('Init PageStateService.');
  }

  importRoutes() {
    for (let key in routes) {
      this.pages.push(routes[key]);
    }
  }

  setPageIncomplete(path: string) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });
    if (page) {
      page.isComplete = false;
    }
  }

  setPageComplete(path: string) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });
    if (page) {
      page.isComplete = true;
    }
  }

  isPageComplete(path: string) {
    const page = this.pages.find((page) => {
      return page.path === path;
    });
    return (page && !!page.isComplete) || environment.bypassRouteGuards;
  }
}

export default new PageStateService();