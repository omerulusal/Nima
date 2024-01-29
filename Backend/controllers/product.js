import Product from "../models/product.js"


const allProducts = async (req, res) => {
    try {
        const products = await Product.find({}, "name desc price stock category rating")
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


const adminProduct = async (req, res) => {
    try {
        const products = await Product.find({}, "name desc price stock category rating")
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


const createProduct = async (req, res) => {
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


const deleteProduct = async (req, res) => {
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


const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

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

export { createProduct, allProducts, adminProduct, detailProduct, deleteProduct, updateProduct }