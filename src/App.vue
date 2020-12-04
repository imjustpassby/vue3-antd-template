<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>

    <transition name="fade-transform">
      <router-view />
    </transition>
  </div>
</template>
