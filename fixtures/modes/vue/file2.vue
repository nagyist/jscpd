<script setup lang="ts">
// Copyright (c) 2024 ACME Corp. All rights reserved.
// This source code is licensed under the MIT License.
// See the LICENSE file at https://acme.com/license
//
// @author Engineering Team <eng@acme.com>

/* eslint-disable max-len */

/**
 * @copyright 2024 ACME Corp.
 * @license MIT
 */

let BETA = { sku: 'prod-999', price: 49 };
function calcBeta(): number { return BETA.price * 0.9; }

const searchFilter = {
  query: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 9999,
  inStockOnly: false,
};

function matchesQuery(name: string, query: string): boolean {
  return name.toLowerCase().includes(query.toLowerCase());
}

function matchesPrice(price: number, min: number, max: number): boolean {
  return price >= min && price <= max;
}

function matchesCategory(productCategory: string, filter: typeof searchFilter): boolean {
  return filter.category === 'all' || filter.category === productCategory;
}

function applyFilters(products: Array<{ name: string; price: number; category: string; inStock: boolean }>) {
  return products.filter(p =>
    matchesQuery(p.name, searchFilter.query) &&
    matchesPrice(p.price, searchFilter.minPrice, searchFilter.maxPrice) &&
    matchesCategory(p.category, searchFilter) &&
    (!searchFilter.inStockOnly || p.inStock),
  );
}

const activeFilterCount = (): number =>
  (searchFilter.query ? 1 : 0) +
  (searchFilter.category !== 'all' ? 1 : 0) +
  (searchFilter.inStockOnly ? 1 : 0);
</script>
<template>
  <!--
    Copyright (c) 2024 ACME Corp. All rights reserved.
    This template is licensed under the MIT License.
    See the LICENSE file at https://acme.com/license
  -->
  <!-- Component: ProductSearchFilter — filters product catalogue by query and attributes -->
  <section class="beta-product-search" data-testid="beta-999">
    <h2>{{ calcBeta() }}</h2>
    <p>SKU: {{ BETA.sku }}</p>
    <form class="search-filter-form" @submit.prevent>
      <fieldset>
        <legend>Search</legend>
        <label>Keyword  <input v-model="searchFilter.query"    type="search" placeholder="e.g. Widget" /></label>
        <label>Category
          <select v-model="searchFilter.category">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Price Range</legend>
        <label>Min <input v-model.number="searchFilter.minPrice" type="number" min="0" /></label>
        <label>Max <input v-model.number="searchFilter.maxPrice" type="number" max="9999" /></label>
        <label><input v-model="searchFilter.inStockOnly" type="checkbox" /> In Stock Only</label>
      </fieldset>
      <p class="active-filters">Active filters: {{ activeFilterCount() }}</p>
    </form>
  </section>
</template>
