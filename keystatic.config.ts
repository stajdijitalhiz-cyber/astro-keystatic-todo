import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    todos: collection({
      label: 'Todos',
      slugField: 'title',
      path: 'src/content/todos/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Başlık' } }),
        content: fields.document({
          label: 'İçerik',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        status: fields.select({
          label: 'Durum',
          options: [
            { label: 'Yapılacak', value: 'todo' },
            { label: 'Yapılıyor', value: 'in-progress' },
            { label: 'Yapıldı', value: 'done' },
          ],
          defaultValue: 'todo',
        }),
        createdAt: fields.date({
          label: 'Oluşturulma Tarihi',
          defaultValue: { kind: 'today' },
        }),
      },
    }),
  },
});
