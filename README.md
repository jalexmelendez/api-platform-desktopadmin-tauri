# Api Platfrom Desktop Application

Use this application to manage your api platform instances.

## Getting Started

You can either download the application [Here](link.com) for your OS or buid it as you wish without limitations.

### Coustomizing the application

#### Recommendations before digging into the code

- TypeScript basic knowledge
- [React basic knowledge](https://create-react-app.dev/)
- Only if you wish to extend tauri's core features having rust knowledge is a must

Feel free to personalize the application as you wish, the base template contains the admin interface (i'm working on adding an authentication scheme.).

### Development

By default the application uses a [cloudbridge](https://tauri.studio/docs/architecture/recipes/cloudbridge) pattern.

1. [Update your dependencies](https://tauri.studio/docs/getting-started/prerequisites/)
2. [Install yarn](https://yarnpkg.com/getting-started/install)
3. Run yarn install
``` bash 

user@root:~APP_PATH/$ yarn install

```
4. Run the development server
``` bash 
user@root:~APP_PATH/$ yarn tauri dev
```
#### 

### Production build

``` bash 
user@root:~APP_PATH/$ yarn build
```
