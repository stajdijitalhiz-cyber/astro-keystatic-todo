import { defineCollection } from 'astro:content';

const todos = defineCollection({
  // Keystatic otomatik olarak şemayı yönetir
});

export const collections = {
  todos,
};
