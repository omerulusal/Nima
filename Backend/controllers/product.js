import Product from "../models/product.js"

const allProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        if (products.length === 0) {
            return res.status(404).json({
                error: "Urunler Bulunamadı",
            });
        } else {
            res.status(200).json({
                products
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urunler Gelmedi",
        });
    }
}


const adminProduct = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            products
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urunler Gelmedi",
        });
    }
}

const detailProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            product
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urun Gelmedi",
        });
    }
}


// ADMIN 
const createProduct = async (req, res, next) => {
    let images = [];
    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images
    }
    // requestin images verisi string ise images dizisine bu istegi ekler aksi halde bu istegi bir degiskene atar
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            product
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urun Oluşturma Hatası",
        });
    }
}


const deleteProduct = async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            product: deletedProduct
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urun silinemedi",
        });
    }
}


const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        let images = [];
        if (typeof req.body.images === "string") {
            images.push(req.body.images);
        } else {
            images = req.body.images
        }
        if (!updatedProduct) {
            return res.status(404).json({
                error: "Ürün bulunamadı",
            });
        }
        res.status(200).json({
            product: updatedProduct
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Urun Guncellenemedi",
        });
    }
}

const createReview = async (req, res, next) => {
    try {
        const { comment, rating } = req.body;
        const review = {
            user: req.user._id,
            name: req.user.name,
            comment,
            rating: Number(rating)
        };
        let product = await Product.findById(req.body.productId);
        product.rating = (product.rating * product.reviews.length + review.rating) / (product.reviews.length + 1);
        product.reviews.push(review);
        await product.save();
        res.status(200).json({
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Yorum Oluşturulamadı",
        });
    }
}



export { createProduct, allProducts, adminProduct, detailProduct, deleteProduct, updateProduct, createReview }