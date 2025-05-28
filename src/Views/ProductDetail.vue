<template>
  <div class="product-detail" v-if="product">
    <button @click="$router.go(-1)">Back to Products</button>
    <div class="product-info">
      <img :src="product.image" :alt="product.name">
      <div class="details">
        <h2>{{ product.name }}</h2>
        <p class="price">${{ product.price }}</p>
        <p class="description">This is a high-quality second-hand item in excellent condition.</p>
        <button class="buy-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null
    }
  },
  created() {
    // In a real app, you would fetch this from an API
    const productId = parseInt(this.$route.params.id)
    const products = [
      { id: 1, name: 'Vintage Jacket', price: 25.99, image: '/assets/jacket.jpg' },
      { id: 2, name: 'Retro Jeans', price: 19.99, image: '/assets/jeans.jpg' },
      { id: 3, name: 'Classic T-Shirt', price: 12.99, image: '/assets/tshirt.jpg' }
    ]
    this.product = products.find(p => p.id === productId)
  }
}
</script>

<style scoped>
.product-detail {
  padding: 20px;
}
.product-info {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
.product-info img {
  width: 400px;
  height: auto;
}
.details {
  display: flex;
  flex-direction: column;
}
.price {
  font-size: 24px;
  font-weight: bold;
  color: #42b983;
}
.description {
  margin: 20px 0;
}
.buy-btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  width: 150px;
}
</style>