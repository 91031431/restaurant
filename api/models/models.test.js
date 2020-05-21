import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';
import { menuSchema } from './menuModel';

const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';

beforeAll(() => {
    return mongoose.connect(MONGODB_URI,
        {
         useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );  
});


test('Menu model-add and find', async () => {
    const Menu = mongoose.model('Menu', menuSchema);
    const menuItem = new Menu ({
        MealName: "Pasta Carbonara" ,
        Ingredients: "Cream, Bacon, Egg" ,
        Price: 25,
        Picture: "blabla"
    });
    expect(menuItem).toBeDefined();
    const result = await menuItem.save();
    expect(result).toBeDefined();
    const found = await Menu.findOne({
        MealName: "Pasta Carbonara"  
    });
    expect(found).toMatchObject({
        MealName: "Pasta Carbonara" ,
        Ingredients: "Cream, Bacon, Egg" ,
        Price: 25,
        Picture: "blabla"
    });  
});

test('Booking model-add and find', async () => {
    const Menu = mongoose.model('Menu', menuSchema);
    const menuItem = new Menu ({
        MealName: "Pasta Carbonara" ,
        Ingredients: "Cream, Bacon, Egg" ,
        Price: 25,
        Picture: "blabla"
    });
    expect(menuItem).toBeDefined();
    const result = await menuItem.save();
    expect(result).toBeDefined();
    const found = await Menu.findOne({
        MealName: "Pasta Carbonara"  
    });
    expect(found).toMatchObject({
        MealName: "Pasta Carbonara" ,
        Ingredients: "Cream, Bacon, Egg" ,
        Price: 25,
        Picture: "blabla"
    });  
});