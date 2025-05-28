<template>
  <div class="home">
    <h1>selamat datang di Thrift Shop</h1>
    <div class="products">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
        @click="goToProduct(product.id)"
      >
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: [
        { id: 1, name: 'Vintage Jacket', price: 25.99, image: '/assets/jacket.jpg' },
        { id: 2, name: 'Retro Jeans', price: 19.99, image: '/assets/jeans.jpg' },
        { id: 3, name: 'Classic T-Shirt', price: 12.99, image: '/assets/tshirt.jpg' }
      ]
    }
  },
  methods: {
    goToProduct(id) {
      this.$router.push({ name: 'ProductDetail', params: { id } })
    }
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}
.product-card:hover {
  transform: scale(1.05);
}
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>