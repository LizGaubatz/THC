const UserController = require("../controllers/user.controller");
const ItemController = require("../controllers/item.controller");
const PageController = require("../controllers/page.controller");
const {authenticate} = require("../config/jwt")

module.exports = app=>{
    // USER ROUTES
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("/api/users/logout", UserController.logout);
    // ITEM ROUTES
    app.post('/api/item/new', authenticate, ItemController.addItem)
    app.get('/api/item', ItemController.allItems)
    app.get('/api/item/:id', ItemController.oneItem)
    app.put('/api/item/edit/:id', authenticate, ItemController.updateItem)
    app.delete('/api/item/delete/:id', authenticate, ItemController.deleteItem)
    // PAGE ROUTES
    app.post('/api/page/new', PageController.addPage)
    app.get('/api/page', PageController.allPages)
    app.get('/api/page/:id', PageController.onePage)
    app.put('/api/page/edit/:id', authenticate, PageController.updatePage)
    app.delete('/api/page/delete/:id', authenticate, PageController.deletePage)
}
