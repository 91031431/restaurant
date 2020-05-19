import { 
    addNewUser, 
    getUser, 
    signUpUser,
    login,
    auth,
} from "../controller/userController";

const route = (app) => {
    app.use('/user', auth)
    .get('/user', (req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    },  getUser)
    .post('/user', addNewUser)
    .post('/signup', signUpUser)
    .post('/login', login); 
}
        
export default route;
