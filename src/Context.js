import React, { Component } from 'react';
import {detailProduct, storeProducts} from './data';
const ProductContext = React.createContext();
//React Context berfungsi untuk mengakses data pada state


class Context extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        this.setProducts();
    }

    //mengambil semua data untuk di tampilkan
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products:tempProducts};
        });
    }

    //menampilan data berdasarkan id  yang dipilih
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals();
        })
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct:product, modalOpen:true}
        })
    }
    closeModal = id => {
        this.setState(() => {
            return {modalOpen:false}
        })
    }
    increase = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() => {
            this.addTotals();
        })
    }
    decrease = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];


        product.count = product.count - 1;
        if(product.count === 0){
            this.removeItem(id);
            console.log('cannot be less than 0');
        }else{
            product.total = product.count * product.price;

            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },()=> {
            this.addTotals();
        })
    }
    clearCart = () => {
        this.setState(() => {
            return {cart:[]};
        },() => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal : subTotal,
                cartTax : tax,
                cartTotal : total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increase: this.increase,
            decrease: this.decrease,
            removeItem: this.removeItem,
            clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, Context};