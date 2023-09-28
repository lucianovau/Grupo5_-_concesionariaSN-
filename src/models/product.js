const fs = require('fs');
const path = require('path');

const Product = {
    fileName: path.resolve(__dirname, '../data/products.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function(){
        return this.getData();
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        } 
        return 1;
    },

    findByPk: function(id){
        let allProduct = this.findAll();
        let productFound = allProduct.find(oneProduct => oneProduct.id === id);
        return productFound;
    },

    findByField: function(field, text){
        let allProduct = this.findAll();
        let productFound = allProduct.find(oneProduct => oneProduct[field] === text);
        return productFound;
    },

    create: function(productData){
        let allProduct = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...productData
        }
        allProduct.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProduct, null, ' '));
        return true
    },

    delete: function(id){
        let allProduct = this.findAll();
        let finalProduc = allProduct.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProduct, null, ' '));
        return true
    }


}

module.exports = Product;